// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "../interfaces/IDataOracle.sol";
import "../interfaces/IMetadataRenderer.sol";

/**
 * @title OneOfOneNFTs
 * @dev NFT contract that changes metadata based on external data sources
 */
contract OneOfOneNFTs is ERC721, ERC721URIStorage, Ownable {
    // Core interfaces
    IDataOracle public weatherOracle;
    IDataOracle public timeOracle;
    IMetadataRenderer public metadataRenderer;

    constructor(address _weatherOracle, address _timeOracle, address _metadataRenderer)
        ERC721("Dynamic Weather NFT", "DYNFT")
    {
        weatherOracle = IDataOracle(_weatherOracle);
        timeOracle = IDataOracle(_timeOracle);
        metadataRenderer = IMetadataRenderer(_metadataRenderer);
    }

    /**
     * @dev Override tokenURI to return dynamic metadata
     */
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        
        return metadataRenderer.renderMetadata(tokenId, nftStates[tokenId]);
    }
    
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
