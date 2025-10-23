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

    // Events
    event NFTMinted(uint256 indexed tokenId, address indexed owner);
    event NFTUpdated(uint256 indexed tokenId, string updateType, string newValue);

    // Predefined weather and time options for testing
    string[] private weatherOptions = [
        "sunny",
        "rainy",
        "cloudy",
        "snowy",
        "foggy"
    ];

        string[] private timeOptions =
        ["morning", "afternoon", "evening", "night"];
        
    constructor() ERC721("Test OneOfOne NFTs", "TOOON") {}
}
