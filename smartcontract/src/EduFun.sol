// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

// Minimal IERC20 Interface
import "./ERC20/ERC20Token.sol";
// Jika Anda membutuhkan NFT Badge, Anda bisa mengimport contract atau interface ERC1155 di sini ke depannya.
// import "./ERC1155/IERC1155.sol";

contract EduFun {
    ERC20Token public rwaToken;
    ERC20Token public usdtToken;
    address public owner;

    struct Student {
        string name;
        string nik;
        string email;
        bool isRegistered;
    }

    mapping(address => Student) public students;

    event StudentRegistered(address indexed wallet, string name, string nik);
    event QuizCompleted(address indexed student, uint256 score, uint256 rewardAmount, string tokenType);

    modifier onlyOwner() {
        require(msg.sender == owner, "Hanya owner");
        _;
    }

    modifier onlyRegistered(address studentWallet) {
        require(students[studentWallet].isRegistered, "Siswa belum terdaftar (Belum ada role)");
        _;
    }

    constructor() {
        owner = msg.sender;
        // Deploy token secara otomatis menggunakan ERC20Token buatan Anda
        rwaToken = new ERC20Token("Real World Asset", "RWA", 18);
        usdtToken = new ERC20Token("Tether USD", "USDT", 18);
    }

    // Fungsi bagi siswa untuk mendaftarkan biodata (NIK, Nama, Email) setelah konek wallet
    function registerStudent(string calldata _name, string calldata _nik, string calldata _email) external {
        require(bytes(_nik).length == 16, "NIK harus 16 digit valid");
        require(!students[msg.sender].isRegistered, "Anda sudah terdaftar");
        
        students[msg.sender] = Student({
            name: _name,
            nik: _nik,
            email: _email,
            isRegistered: true
        });

        emit StudentRegistered(msg.sender, _name, _nik);
    }

    // Fungsi bagi admin untuk mensubmit nilai siswa setelah mereka mengerjakan kuis
    // quizType: 1 untuk Quiz Edukasi RWA, 2 untuk Task Quiz Umum
    function submitQuizScore(address student, uint256 score, uint8 quizType) external onlyOwner onlyRegistered(student) {
        if (quizType == 1) {
            require(score > 80, "Nilai kuis harus lebih dari 80 untuk mendapatkan RWA");
            uint256 reward = 10 * 10**18; // 10 RWA
            rwaToken.mint(student, reward);
            emit QuizCompleted(student, score, reward, "RWA");
        } else if (quizType == 2) {
            uint256 reward = 5 * 10**18; // 5 USDT
            usdtToken.mint(student, reward);
            emit QuizCompleted(student, score, reward, "USDT");
        } else {
            revert("Tipe kuis tidak valid");
        }
    }
}
