// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./IERC20.sol";

/// @title Custom ERC20 Token Implementation
/// @notice A basic ERC20 token implementation with mint and burn functionalities.
contract ERC20Token is IERC20 {
    /// @notice Emitted when tokens are transferred.
    /// @param from The address tokens are transferred from.
    /// @param to The address tokens are transferred to.
    /// @param value The amount of tokens transferred.
    event Transfer(address indexed from, address indexed to, uint256 value);

    /// @notice Emitted when an allowance is approved.
    /// @param owner The address of the token owner.
    /// @param spender The address of the approved spender.
    /// @param value The amount of tokens approved.
    event Approval(address indexed owner, address indexed spender, uint256 value);

    /// @notice Total supply of the token.
    uint256 public totalSupply;

    /// @dev Internal mapping of balances. Named `_balancesERC20` to avoid collision with ERC1155.
    mapping(address => uint256) private _balancesERC20;

    /// @notice Mapping of allowances.
    mapping(address => mapping(address => uint256)) public allowance;

    /// @notice Name of the token.
    string public name;

    /// @notice Symbol of the token.
    string public symbol;

    /// @notice Number of decimals the token uses.
    uint8 public decimals;

    /// @notice Address of the contract owner.
    address public owner;

    /// @notice Modifier to restrict access to the owner only.
    modifier onlyOwner() {
        require(msg.sender == owner, "Bukan owner");
        _;
    }

    /// @notice Initializes the token with name, symbol, and decimals.
    /// @param _name The name of the token.
    /// @param _symbol The symbol of the token.
    /// @param _decimals The number of decimals for the token.
    constructor(string memory _name, string memory _symbol, uint8 _decimals) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        owner = msg.sender;
    }

    /// @notice Gets the balance of the specified address.
    /// @dev Implementing IERC20 balanceOf using manual function, not a public mapping.
    /// @param account The address to query the balance of.
    /// @return The token balance of the specified address.
    function balanceOf(address account) external view override returns (uint256) {
        return _balancesERC20[account];
    }

    /// @notice Transfers tokens to a specified address.
    /// @param recipient The address to transfer tokens to.
    /// @param amount The amount of tokens to transfer.
    /// @return A boolean indicating whether the operation succeeded.
    function transfer(address recipient, uint256 amount) external override returns (bool) {
        require(_balancesERC20[msg.sender] >= amount, "Saldo koin tidak cukup");
        _balancesERC20[msg.sender] -= amount;
        _balancesERC20[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    /// @notice Approves a spender to transfer tokens on behalf of the caller.
    /// @param spender The address which will spend the funds.
    /// @param amount The amount of tokens to be spent.
    /// @return A boolean indicating whether the operation succeeded.
    function approve(address spender, uint256 amount) external override returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    /// @notice Transfers tokens from one address to another using an allowance.
    /// @param sender The address which you want to send tokens from.
    /// @param recipient The address which you want to transfer to.
    /// @param amount The amount of tokens to be transferred.
    /// @return A boolean indicating whether the operation succeeded.
    function transferFrom(address sender, address recipient, uint256 amount) external override returns (bool) {
        require(_balancesERC20[sender] >= amount, "Saldo asal tidak cukup");
        require(allowance[sender][msg.sender] >= amount, "Kuota allowance tidak cukup");

        allowance[sender][msg.sender] -= amount;
        _balancesERC20[sender] -= amount;
        _balancesERC20[recipient] += amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    /// @notice Internal function to mint tokens and increase total supply.
    /// @param to The address that will receive the minted tokens.
    /// @param amount The amount of tokens to mint.
    function _mint(address to, uint256 amount) internal {
        _balancesERC20[to] += amount;
        totalSupply += amount;
        emit Transfer(address(0), to, amount);
    }

    /// @notice Internal function to burn tokens and decrease total supply.
    /// @param from The address from which tokens will be burned.
    /// @param amount The amount of tokens to burn.
    function _burn(address from, uint256 amount) internal {
        require(_balancesERC20[from] >= amount, "Saldo burn tidak cukup");
        _balancesERC20[from] -= amount;
        totalSupply -= amount;
        emit Transfer(from, address(0), amount);
    }

    /// @notice Mints tokens to a specified address. Only the owner can call this.
    /// @param to The address that will receive the minted tokens.
    /// @param amount The amount of tokens to mint.
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    /// @notice Burns tokens from a specified address. Only the owner can call this.
    /// @param from The address from which tokens will be burned.
    /// @param amount The amount of tokens to burn.
    function burn(address from, uint256 amount) external onlyOwner {
        _burn(from, amount);
    }
}
