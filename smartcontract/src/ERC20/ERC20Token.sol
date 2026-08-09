// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./IERC20.sol";

contract ERC20Token is IERC20 {
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner, address indexed spender, uint256 value
    );

    uint256 public totalSupply;
    
    // PERBAIKAN UTAMA: Mengubah nama mapping internal dari 'balanceOf' menjadi '_balancesERC20'
    // Ini dilakukan agar TIDAK TABRAKAN dengan fungsi ERC-1155 di kontrak utama
    mapping(address => uint256) private _balancesERC20;
    
    mapping(address => mapping(address => uint256)) public allowance;
    string public name;
    string public symbol;
    uint8 public decimals;
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Bukan owner");
        _;
    }

    constructor(string memory _name, string memory _symbol, uint8 _decimals) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        owner = msg.sender;
    }

    // FUNGSI BARU: Mengimplementasikan IERC20 balanceOf menggunakan fungsi manual, bukan mapping public
    function balanceOf(address account) external view override returns (uint256) {
        return _balancesERC20[account];
    }

    function transfer(address recipient, uint256 amount)
        external
        override
        returns (bool)
    {
        require(_balancesERC20[msg.sender] >= amount, "Saldo koin tidak cukup");
        _balancesERC20[msg.sender] -= amount;
        _balancesERC20[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint256 amount) external override returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount)
        external
        override
        returns (bool)
    {
        require(_balancesERC20[sender] >= amount, "Saldo asal tidak cukup");
        require(allowance[sender][msg.sender] >= amount, "Kuota allowance tidak cukup");

        allowance[sender][msg.sender] -= amount;
        _balancesERC20[sender] -= amount;
        _balancesERC20[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    function _mint(address to, uint256 amount) internal {
        _balancesERC20[to] += amount;
        totalSupply += amount;
        emit Transfer(address(0), to, amount);
    }

    function _burn(address from, uint256 amount) internal {
        require(_balancesERC20[from] >= amount, "Saldo burn tidak cukup");
        _balancesERC20[from] -= amount;
        totalSupply -= amount;
        emit Transfer(from, address(0), amount);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyOwner {
        _burn(from, amount);
    }
}
