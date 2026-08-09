// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./ERC1155/IERC1155.sol";
import "./ERC20/ERC20Token.sol";
import "./ERC1155/IERC1155TokenReceiver.sol";

contract SchoolSystem is ERC20Token("School Token", "SCT", 18), IERC1155 {
    address public immutable guruAdmin;

    uint256 public constant BADGE_MATEMATIKA = 1;
    uint256 public constant BADGE_SAINS = 2;

    mapping(uint256 => mapping(address => uint256)) private _badgeBalances;
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    struct DataUjian {
        uint256 nilai;
        bool sudahClaim;
        bool terdaftar;
    }
    
    mapping(address => mapping(string => DataUjian)) public riwayatUjianSiswa;

    constructor() {
        guruAdmin = msg.sender;
    }

    function inputNilaiUjian(address _siswa, string memory _mapel, uint256 _nilai) external {
        require(msg.sender == guruAdmin, "Hanya Guru/Admin yang bisa input nilai!");
        require(_nilai <= 100, "Nilai maksimal adalah 100");

        riwayatUjianSiswa[_siswa][_mapel] = DataUjian({
            nilai: _nilai,
            sudahClaim: false,
            terdaftar: true
        });
    }

    function claimHadiahUjian(string memory _mapel) external {
        DataUjian storage ujian = riwayatUjianSiswa[msg.sender][_mapel];

        require(ujian.terdaftar, "Data ujian tidak ditemukan");
        require(ujian.nilai >= 80, "Maaf, nilai Anda di bawah 80. Tidak bisa claim!");
        require(!ujian.sudahClaim, "Anda sudah melakukan claim untuk mata pelajaran ini");

        ujian.sudahClaim = true;

        _mint(msg.sender, 100 * 10 ** uint256(decimals));

        uint256 targetBadgeId;
        if (keccak256(abi.encodePacked(_mapel)) == keccak256(abi.encodePacked("Matematika"))) {
            targetBadgeId = BADGE_MATEMATIKA;
        } else {
            targetBadgeId = BADGE_SAINS;
        }

        _mintSingle1155(msg.sender, targetBadgeId, 1, "");
    }

    function _mintSingle1155(address _to, uint256 _id, uint256 _value, bytes memory _data) internal {
        require(_to != address(0), "Tidak bisa mint ke alamat kosong");

        _badgeBalances[_id][_to] += _value;

        emit TransferSingle(msg.sender, address(0), _to, _id, _value);

        require(_checkOnERC1155Received(address(0), _to, _id, _value, _data), "Penerima menolak token ERC-1155");
    }

    function balanceOf(address _owner, uint256 _id) public view override returns (uint256) {
        require(_owner != address(0), "Alamat tidak valid");
        return _badgeBalances[_id][_owner];
    }

    function balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids) public view override returns (uint256[] memory) {
        require(_owners.length == _ids.length, "Panjang array tidak sama");

        uint256[] memory batchBalances = new uint256[](_owners.length);
        for (uint256 i = 0; i < _owners.length; i++) {
            batchBalances[i] = balanceOf(_owners[i], _ids[i]);
        }
        return batchBalances;
    }

    function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data) public override {
        require(_from == msg.sender || isApprovedForAll(_from, msg.sender), "Bukan pemilik atau operator");
        require(_to != address(0), "Tidak bisa kirim ke alamat kosong");
        require(_badgeBalances[_id][_from] >= _value, "Saldo NFT tidak cukup");

        _badgeBalances[_id][_from] -= _value;
        _badgeBalances[_id][_to] += _value;

        emit TransferSingle(msg.sender, _from, _to, _id, _value);

        require(_checkOnERC1155Received(_from, _to, _id, _value, _data), "Penerima kontrak menolak token");
    }

    function setApprovalForAll(address _operator, bool _approved) public override {
        _operatorApprovals[msg.sender][_operator] = _approved;
        emit ApprovalForAll(msg.sender, _operator, _approved);
    }

    // Menggunakan JONGKOK OVERRIDE untuk mencocokkan overloading ERC-20 vs ERC-1155
    function isApprovedForAll(address _owner, address _operator) public view override returns (bool) {
        return _operatorApprovals[_owner][_operator];
    }

    // PERBAIKAN WARNING: Diubah ke PURE dan nama parameter disembunyikan menggunakan /* */
    function safeBatchTransferFrom(
        address /* _from */, 
        address /* _to */, 
        uint256[] calldata /* _ids */, 
        uint256[] calldata /* _values */, 
        bytes calldata /* _data */
    ) public pure override {
        revert("Fitur Batch Transfer tidak diaktifkan di sekolah ini");
    }
    
    function _checkOnERC1155Received(address _from, address _to, uint256 _id, uint256 _value, bytes memory _data) internal returns (bool) {
        if (_to.code.length > 0) { 
            try IERC1155TokenReceiver(_to).onERC1155Received(msg.sender, _from, _id, _value, _data) returns (bytes4 retval) {
                return retval == IERC1155TokenReceiver.onERC1155Received.selector;
            } catch {
                return false;
            }
        }
        return true; 
    }
}
