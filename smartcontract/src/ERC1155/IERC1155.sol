// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/// @title ERC-1155 Multi Token Standard Interface
/// @notice Interface for the ERC1155 standard as defined in the EIP.
interface IERC1155 {
    /// @notice Emitted when a single token is transferred.
    /// @param _operator The address of an account/contract that is approved to make the transfer.
    /// @param _from The address of the token owner.
    /// @param _to The address of the token receiver.
    /// @param _id The ID of the token being transferred.
    /// @param _value The amount of tokens being transferred.
    event TransferSingle(
        address indexed _operator, address indexed _from, address indexed _to, uint256 _id, uint256 _value
    );

    /// @notice Emitted when multiple tokens are transferred.
    /// @param _operator The address of an account/contract that is approved to make the transfer.
    /// @param _from The address of the token owner.
    /// @param _to The address of the token receiver.
    /// @param _ids An array containing the IDs of the tokens being transferred.
    /// @param _values An array containing the amounts of tokens being transferred.
    event TransferBatch(
        address indexed _operator, address indexed _from, address indexed _to, uint256[] _ids, uint256[] _values
    );

    /// @notice Emitted when an operator is enabled or disabled for an owner.
    /// @param _owner The address of the token owner.
    /// @param _oprator The address of the authorized operator.
    /// @param _approved True if the operator is approved, false to revoke approval.
    event ApprovalForAll(address indexed _owner, address indexed _oprator, bool _approved);

    /// @notice Emitted when the URI for a token ID is changed.
    /// @param _value The new URI.
    /// @param _id The ID of the token.
    event URI(string _value, uint256 indexed _id);

    /// @notice Transfers `_value` amount of an `_id` from the `_from` address to the `_to` address specified.
    /// @param _from Source address.
    /// @param _to Target address.
    /// @param _id ID of the token type.
    /// @param _value Transfer amount.
    /// @param _data Additional data to pass to the receiver contract.
    function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data) external;

    /// @notice Transfers `_values` amount(s) of `_ids` from the `_from` address to the `_to` address specified.
    /// @param _from Source address.
    /// @param _to Target address.
    /// @param _ids IDs of each token type.
    /// @param _value Transfer amounts per token type.
    /// @param _data Additional data to pass to the receiver contract.
    function safeBatchTransferFrom(
        address _from,
        address _to,
        uint256[] calldata _ids,
        uint256[] calldata _value,
        bytes calldata _data
    ) external;

    /// @notice Gets the balance of an account's tokens.
    /// @param _owner The address of the token holder.
    /// @param _id ID of the token.
    /// @return The _owner's balance of the token type requested.
    function balanceOf(address _owner, uint256 _id) external view returns (uint256);

    /// @notice Gets the balance of multiple account/token pairs.
    /// @param _owners The addresses of the token holders.
    /// @param _ids The IDs of the tokens.
    /// @return An array containing the balance of each requested account/token pair.
    function balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids)
        external
        view
        returns (uint256[] memory);

    /// @notice Enable or disable approval for a third party ("operator") to manage all of the caller's tokens.
    /// @param _operator Address to add to the set of authorized operators.
    /// @param _approved True if the operator is approved, false to revoke approval.
    function setApprovalForAll(address _operator, bool _approved) external;

    /// @notice Queries the approval status of an operator for a given owner.
    /// @param _owner The owner of the tokens.
    /// @param _operator Address of authorized operator.
    /// @return True if the operator is approved, false if not.
    function isApprovedForAll(address _owner, address _operator) external view returns (bool);
}
