// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title TestOneOfOneNFTs
 * @dev Simplified Test NFT contract for basic functionality testing
 */
contract TestOneOfOneNFTs is ERC721 {
    using Strings for uint256;

    uint256 private _tokenIdCounter;
    uint256 private version = 0;

    // Simplified NFT State
    struct NFTState {
        uint256 userActionCount;
        string currentWeather;
        string currentTimeOfDay;
        uint256 createdAt;
    }

    // Storage
    mapping(uint256 => NFTState) public nftStates;

    constructor() ERC721("Test OneOfOne NFTs", "TOOON") {}
}
