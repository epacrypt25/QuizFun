// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// Minimal IERC20 Interface
import "./ERC20/ERC20Token.sol";

// If you need NFT Badge, you can import ERC1155 contract or interface here in the future.
// import "./ERC1155/IERC1155.sol";

/// @title EduFun Educational Platform Contract
/// @notice This contract manages student registrations and quiz score submissions, rewarding them with tokens.
/// @dev Uses ERC20Token for RWA and USDT rewards.
contract EduFun {
    /// @notice The RWA token contract used for rewards.
    ERC20Token public rwaToken;

    /// @notice The USDT token contract used for rewards.
    ERC20Token public usdtToken;

    /// @notice The address of the contract owner (admin).
    address public owner;

    /// @dev Structure to store student information.
    struct Student {
        string name;
        string nik;
        string email;
        bool isRegistered;
    }

    /// @notice Mapping from student wallet address to their details.
    mapping(address => Student) public students;

    /// @notice Emitted when a new student registers.
    /// @param wallet The wallet address of the student.
    /// @param name The name of the student.
    /// @param nik The NIK (National ID) of the student.
    event StudentRegistered(address indexed wallet, string name, string nik);

    /// @notice Emitted when a student completes a quiz and receives a reward.
    /// @param student The wallet address of the student.
    /// @param score The score achieved in the quiz.
    /// @param rewardAmount The amount of tokens rewarded.
    /// @param tokenType The type of token rewarded ("RWA" or "USDT").
    event QuizCompleted(address indexed student, uint256 score, uint256 rewardAmount, string tokenType);

    /// @notice Modifier to restrict access to the owner only.
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    /// @notice Modifier to restrict access to registered students only.
    /// @param studentWallet The address of the student to check.
    modifier onlyRegistered(address studentWallet) {
        require(students[studentWallet].isRegistered, "Student is not registered (No role yet)");
        _;
    }

    /// @notice Initializes the contract and deploys the reward tokens.
    constructor() {
        owner = msg.sender;
        // Deploy token automatically using your ERC20Token
        rwaToken = new ERC20Token("Real World Asset", "RWA", 18);
        usdtToken = new ERC20Token("Tether USD", "USDT", 18);
    }

    /// @notice Registers a new student with their details.
    /// @dev The NIK must be exactly 16 characters long.
    /// @param _name The name of the student.
    /// @param _nik The NIK (National ID) of the student.
    /// @param _email The email address of the student.
    function registerStudent(string calldata _name, string calldata _nik, string calldata _email) external {
        require(bytes(_nik).length == 16, "NIK must be exactly 16 digits");
        require(!students[msg.sender].isRegistered, "You are already registered");

        students[msg.sender] = Student({name: _name, nik: _nik, email: _email, isRegistered: true});

        emit StudentRegistered(msg.sender, _name, _nik);
    }

    /// @notice Submits a quiz score for a student and distributes rewards.
    /// @dev quizType: 1 for RWA Educational Quiz, 2 for General Task Quiz.
    /// @param student The address of the student.
    /// @param score The score achieved by the student.
    /// @param quizType The type of quiz taken (1 or 2).
    function submitQuizScore(address student, uint256 score, uint8 quizType)
        external
        onlyOwner
        onlyRegistered(student)
    {
        if (quizType == 1) {
            require(score > 80, "Quiz score must be strictly over 80 to get RWA");
            uint256 reward = 10 * 10 ** 18; // 10 RWA
            rwaToken.mint(student, reward);
            emit QuizCompleted(student, score, reward, "RWA");
        } else if (quizType == 2) {
            uint256 reward = 5 * 10 ** 18; // 5 USDT
            usdtToken.mint(student, reward);
            emit QuizCompleted(student, score, reward, "USDT");
        } else {
            revert("Invalid quiz type");
        }
    }
}
