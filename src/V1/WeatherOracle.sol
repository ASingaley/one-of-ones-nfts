// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "../interfaces/IDataOracle.sol";

/**
 * @title WeatherOracle
 * @dev Oracle contract that provides weather data for dynamic NFTs
 * This is a mock implementation - in production you'd integrate with real weather APIs
 */
contract WeatherOracle is IDataOracle, Ownable {
        constructor() Ownable(msg.sender) {
        // Initialize with default weather
        currentWeather = WeatherData({condition: "sunny", temperature: 22, timestamp: block.timestamp, isValid: true});

        // Authorize owner as updater
        authorizedUpdaters[msg.sender] = true;
    }
}