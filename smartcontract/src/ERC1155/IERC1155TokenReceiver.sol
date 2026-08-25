// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/// @title ERC-1155 Token Receiver Interface
/// @notice Interface for accepting ERC1155 token transfers.
interface IERC1155TokenReceiver {
    /// @notice Handles the receipt of a single ERC1155 token type.
    /// @param _operator The address which initiated the transfer.
    /// @param _from The address which previously owned the token.
    /// @param _id The ID of the token being transferred.
    /// @param _value The amount of tokens being transferred.
    /// @param _data Additional data with no specified format.
    /// @return `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))` if transfer is allowed.
    function onERC1155Received(address _operator, address _from, uint256 _id, uint256 _value, bytes calldata _data)
        external
        returns (bytes4);

    /// @notice Handles the receipt of multiple ERC1155 token types.
    /// @param _operator The address which initiated the batch transfer.
    /// @param _from The address which previously owned the token.
    /// @param _ids An array containing ids of each token being transferred (order and length must match _values array).
    /// @param _values An array containing amounts of each token being transferred (order and length must match _ids array).
    /// @param _data Additional data with no specified format.
    /// @return `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))` if transfer is allowed.
    function onERC1155BatchReceived(
        address _operator,
        address _from,
        uint256[] calldata _ids,
        uint256[] calldata _values,
        bytes calldata _data
    ) external returns (bytes4);
}
