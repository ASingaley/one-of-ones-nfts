// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../interfaces/IDataOracle.sol";

/**
 * @title TimeOracle
 * @dev Oracle contract that provides time-based data for dynamic NFTs
 */
contract TimeOracle is IDataOracle, Ownable {
        // Time zones mapping (offset in hours from UTC)
    mapping(string => int256) public timeZones;
    string public defaultTimeZone = "UTC";

        constructor() {
        _initializeTimeZones();
    }

        /**
     * @dev Initialize common time zones
     */
    function _initializeTimeZones() internal {
        timeZones["UTC"] = 0;
        timeZones["EST"] = -5;
        timeZones["PST"] = -8;
        timeZones["GMT"] = 0;
        timeZones["JST"] = 9;
        timeZones["AEST"] = 10;
        timeZones["CET"] = 1;
    }

       /**
     * @dev Get current time data (implements IDataOracle)
     */
    function getData() external view override returns (string memory) {
        return getCurrentTimeOfDay(defaultTimeZone);
}
}