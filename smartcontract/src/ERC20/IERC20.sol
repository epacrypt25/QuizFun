// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/// @title ERC-20 Token Standard Interface
/// @notice Interface for the ERC20 standard as defined in the EIP.
interface IERC20 {
    /// @notice Returns the amount of tokens in existence.
    /// @return The total supply of tokens.
    function totalSupply() external view returns (uint256);

    /// @notice Returns the amount of tokens owned by `account`.
    /// @param account The address to query the balance of.
    /// @return The token balance of the specified address.
    function balanceOf(address account) external view returns (uint256);

    /// @notice Moves `amount` tokens from the caller's account to `recipient`.
    /// @param recipient The address to transfer tokens to.
    /// @param amount The amount of tokens to transfer.
    /// @return A boolean value indicating whether the operation succeeded.
    function transfer(address recipient, uint256 amount) external returns (bool);

    /// @notice Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.
    /// @param owner The address of the token owner.
    /// @param spender The address of the approved spender.
    /// @return The amount of tokens the spender is allowed to spend.
    function allowance(address owner, address spender) external view returns (uint256);

    /// @notice Sets `amount` as the allowance of `spender` over the caller's tokens.
    /// @param spender The address which will spend the funds.
    /// @param amount The amount of tokens to be spent.
    /// @return A boolean value indicating whether the operation succeeded.
    function approve(address spender, uint256 amount) external returns (bool);

    /// @notice Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism.
    /// @param sender The address which you want to send tokens from.
    /// @param recipient The address which you want to transfer to.
    /// @param amount The amount of tokens to be transferred.
    /// @return A boolean value indicating whether the operation succeeded.
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}
