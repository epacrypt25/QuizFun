// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./ERC1155/IERC1155.sol";
import "./ERC20/ERC20Token.sol";
import "./ERC1155/IERC1155TokenReceiver.sol";

/// @title School System Contract
/// @notice Manages exam scores and rewards students with tokens and ERC1155 badges.
/// @dev Inherits from ERC20Token for base token functionality and implements IERC1155 for badges.
contract SchoolSystem is ERC20Token("School Token", "SCT", 18), IERC1155 {
    /// @notice The address of the teacher/admin who has privileged access.
    address public immutable teacherAdmin;

    /// @notice ID for the Mathematics badge.
    uint256 public constant BADGE_MATH = 1;

    /// @notice ID for the Science badge.
    uint256 public constant BADGE_SCIENCE = 2;

    /// @dev Internal mapping of badge balances: badgeId => owner => balance.
    mapping(uint256 => mapping(address => uint256)) private _badgeBalances;

    /// @dev Internal mapping of operator approvals: owner => operator => approved.
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    /// @dev Structure to store exam data for a student.
    struct ExamData {
        uint256 score;
        bool hasClaimed;
        bool isRegistered;
    }

    /// @notice Mapping from student address and subject name to their exam data.
    mapping(address => mapping(string => ExamData)) public studentExamHistory;

    /// @notice Initializes the contract and sets the deployer as the admin.
    constructor() {
        teacherAdmin = msg.sender;
    }

    /// @notice Inputs an exam score for a student.
    /// @dev Can only be called by the admin.
    /// @param _student The address of the student.
    /// @param _subject The subject name.
    /// @param _score The score achieved (max 100).
    function inputExamScore(address _student, string memory _subject, uint256 _score) external {
        require(msg.sender == teacherAdmin, "Only Teacher/Admin can input scores!");
        require(_score <= 100, "Maximum score is 100");

        studentExamHistory[_student][_subject] = ExamData({score: _score, hasClaimed: false, isRegistered: true});
    }

    /// @notice Claims the reward for a specific exam subject.
    /// @dev Mints ERC20 tokens and an ERC1155 badge if the score is at least 80.
    /// @param _subject The subject name to claim the reward for.
    function claimExamReward(string memory _subject) external {
        ExamData storage exam = studentExamHistory[msg.sender][_subject];

        require(exam.isRegistered, "Exam data not found");
        require(exam.score >= 80, "Sorry, your score is below 80. Cannot claim!");
        require(!exam.hasClaimed, "You have already claimed for this subject");

        exam.hasClaimed = true;

        _mint(msg.sender, 100 * 10 ** uint256(decimals));

        uint256 targetBadgeId;
        if (keccak256(abi.encodePacked(_subject)) == keccak256(abi.encodePacked("Math"))) {
            targetBadgeId = BADGE_MATH;
        } else {
            targetBadgeId = BADGE_SCIENCE;
        }

        _mintSingle1155(msg.sender, targetBadgeId, 1, "");
    }

    /// @notice Internal function to mint a single ERC1155 token.
    /// @param _to The recipient address.
    /// @param _id The token ID to mint.
    /// @param _value The amount of tokens to mint.
    /// @param _data Additional data to pass to the receiver contract.
    function _mintSingle1155(address _to, uint256 _id, uint256 _value, bytes memory _data) internal {
        require(_to != address(0), "Cannot mint to zero address");

        _badgeBalances[_id][_to] += _value;

        emit TransferSingle(msg.sender, address(0), _to, _id, _value);

        require(_checkOnERC1155Received(address(0), _to, _id, _value, _data), "Receiver rejected ERC1155 token");
    }

    /// @notice Gets the balance of an account's tokens.
    /// @param _owner The address of the token holder.
    /// @param _id ID of the token.
    /// @return The _owner's balance of the token type requested.
    function balanceOf(address _owner, uint256 _id) public view override returns (uint256) {
        require(_owner != address(0), "Invalid address");
        return _badgeBalances[_id][_owner];
    }

    /// @notice Gets the balance of multiple account/token pairs.
    /// @param _owners The addresses of the token holders.
    /// @param _ids The IDs of the tokens.
    /// @return An array containing the balance of each requested account/token pair.
    function balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids)
        public
        view
        override
        returns (uint256[] memory)
    {
        require(_owners.length == _ids.length, "Array lengths do not match");

        uint256[] memory batchBalances = new uint256[](_owners.length);
        for (uint256 i = 0; i < _owners.length; i++) {
            batchBalances[i] = balanceOf(_owners[i], _ids[i]);
        }
        return batchBalances;
    }

    /// @notice Transfers `_value` amount of an `_id` from the `_from` address to the `_to` address specified.
    /// @param _from Source address.
    /// @param _to Target address.
    /// @param _id ID of the token type.
    /// @param _value Transfer amount.
    /// @param _data Additional data with no specified format, MUST be sent unaltered in call to `onERC1155Received` on `_to`.
    function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data)
        public
        override
    {
        require(_from == msg.sender || isApprovedForAll(_from, msg.sender), "Not owner or approved operator");
        require(_to != address(0), "Cannot transfer to zero address");
        require(_badgeBalances[_id][_from] >= _value, "Insufficient NFT balance");

        _badgeBalances[_id][_from] -= _value;
        _badgeBalances[_id][_to] += _value;

        emit TransferSingle(msg.sender, _from, _to, _id, _value);

        require(_checkOnERC1155Received(_from, _to, _id, _value, _data), "Receiver rejected token transfer");
    }

    /// @notice Enable or disable approval for a third party ("operator") to manage all of the caller's tokens.
    /// @param _operator Address to add to the set of authorized operators.
    /// @param _approved True if the operator is approved, false to revoke approval.
    function setApprovalForAll(address _operator, bool _approved) public override {
        _operatorApprovals[msg.sender][_operator] = _approved;
        emit ApprovalForAll(msg.sender, _operator, _approved);
    }

    /// @notice Queries the approval status of an operator for a given owner.
    /// @dev Used OVERRIDE to match overloading ERC-20 vs ERC-1155
    /// @param _owner The owner of the tokens.
    /// @param _operator Address of authorized operator.
    /// @return True if the operator is approved, false if not.
    function isApprovedForAll(address _owner, address _operator) public view override returns (bool) {
        return _operatorApprovals[_owner][_operator];
    }

    /// @notice Transfers `_values` amount(s) of `_ids` from the `_from` address to the `_to` address specified (with safety call).
    /// @dev Disabled feature in this school system.
    function safeBatchTransferFrom(
        address,
        /* _from */
        address,
        /* _to */
        uint256[] calldata,
        /* _ids */
        uint256[] calldata,
        /* _values */
        bytes calldata /* _data */
    )
        public
        pure
        override
    {
        revert("Batch Transfer feature is disabled in this school system");
    }

    /// @notice Internal function to invoke `onERC1155Received` on a target address.
    /// @param _from The address which previously owned the token.
    /// @param _to The target address that will receive the token.
    /// @param _id The ID of the token being transferred.
    /// @param _value The amount of tokens being transferred.
    /// @param _data Additional data to pass to the receiver contract.
    /// @return True if the transfer is accepted, false otherwise.
    function _checkOnERC1155Received(address _from, address _to, uint256 _id, uint256 _value, bytes memory _data)
        internal
        returns (bool)
    {
        if (_to.code.length > 0) {
            try IERC1155TokenReceiver(_to).onERC1155Received(msg.sender, _from, _id, _value, _data) returns (
                bytes4 retval
            ) {
                return retval == IERC1155TokenReceiver.onERC1155Received.selector;
            } catch {
                return false;
            }
        }
        return true;
    }
}
