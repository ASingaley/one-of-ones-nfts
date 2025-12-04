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

    // Special time periods
    mapping(string => bool) public specialPeriods;
    mapping(uint256 => string) public dateEvents; // timestamp => event name

    // Events
    event TimeZoneSet(string timezone, int256 offset);
    event SpecialPeriodSet(string period, bool isActive);
    event DateEventSet(uint256 timestamp, string eventName);

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

    /**
     * @dev Get current time of day for a specific timezone
     */
    function getCurrentTimeOfDay(string memory timezone) public view returns (string memory) {
        int256 offset = timeZones[timezone];
        uint256 adjustedTimestamp = uint256(int256(block.timestamp) + (offset * 3600));
        uint256 hour = (adjustedTimestamp / 3600) % 24;

        if (hour >= 6 && hour < 12) return "morning";
        if (hour >= 12 && hour < 18) return "afternoon";
        if (hour >= 18 && hour < 22) return "evening";
        return "night";
    }

    /**
     * @dev Get detailed time information
     */
    function getDetailedTime(string memory timezone)
        external
        view
        returns (uint256 hour, uint256 minute, uint256 dayOfWeek, string memory timeOfDay, bool isWeekend)
    {
        int256 offset = timeZones[timezone];
        uint256 adjustedTimestamp = uint256(int256(block.timestamp) + (offset * 3600));

        hour = (adjustedTimestamp / 3600) % 24;
        minute = (adjustedTimestamp / 60) % 60;
        dayOfWeek = ((adjustedTimestamp / 86400) + 4) % 7; // Thursday = 0
        isWeekend = (dayOfWeek == 5 || dayOfWeek == 6); // Friday or Saturday
        timeOfDay = getCurrentTimeOfDay(timezone);
    }

    /**
     * @dev Check if current time is within a special period
     */
    function isSpecialPeriod() external view returns (bool, string memory) {
        // Check for holidays/special dates
        uint256 dayOfYear = _getDayOfYear(block.timestamp);

        // New Year
        if (dayOfYear == 1) return (true, "New Year");

        // Christmas
        if (dayOfYear == 359) return (true, "Christmas");

        // Halloween
        if (dayOfYear == 304) return (true, "Halloween");

        // Check for set date events
        uint256 dayStart = (block.timestamp / 86400) * 86400;
        if (bytes(dateEvents[dayStart]).length > 0) {
            return (true, dateEvents[dayStart]);
        }

        return (false, "");
    }

    /**
     * @dev Get season based on timestamp
     */
    function getSeason() external view returns (string memory) {
        uint256 dayOfYear = _getDayOfYear(block.timestamp);

        // Northern hemisphere seasons (approximate)
        if (dayOfYear >= 80 && dayOfYear < 172) return "spring"; // Mar 21 - Jun 20
        if (dayOfYear >= 172 && dayOfYear < 266) return "summer"; // Jun 21 - Sep 22
        if (dayOfYear >= 266 && dayOfYear < 355) return "autumn"; // Sep 23 - Dec 20
        return "winter"; // Dec 21 - Mar 20
    }

    /**
     * @dev Get moon phase (simplified calculation)
     */
    function getMoonPhase() external view returns (string memory) {
        // Simplified moon phase calculation
        uint256 daysSinceNewMoon = (block.timestamp / 86400) % 29; // ~29.5 day cycle

        if (daysSinceNewMoon < 2) return "new";
        if (daysSinceNewMoon < 7) return "waxing_crescent";
        if (daysSinceNewMoon < 9) return "first_quarter";
        if (daysSinceNewMoon < 14) return "waxing_gibbous";
        if (daysSinceNewMoon < 16) return "full";
        if (daysSinceNewMoon < 21) return "waning_gibbous";
        if (daysSinceNewMoon < 23) return "third_quarter";
        return "waning_crescent";
    }

    /**
     * @dev Calculate day of year
     */
    function _getDayOfYear(uint256 timestamp) internal pure returns (uint256) {
        uint256 year = 1970 + (timestamp / 365.25 days);
        uint256 yearStart = ((year - 1970) * 365.25 days);
        return (timestamp - yearStart) / 1 days + 1;
    }

    /**
     * @dev Set timezone offset (only owner)
     */
    function setTimeZone(string calldata timezone, int256 offsetHours) external onlyOwner {
        require(offsetHours >= -12 && offsetHours <= 14, "Invalid timezone offset");
        timeZones[timezone] = offsetHours;
        emit TimeZoneSet(timezone, offsetHours);
    }

    /**
     * @dev Set default timezone (only owner)
     */
    function setDefaultTimeZone(string calldata timezone) external onlyOwner {
        require(
            timeZones[timezone] != 0 || keccak256(abi.encodePacked(timezone)) == keccak256(abi.encodePacked("UTC")),
            "Timezone not set"
        );
        defaultTimeZone = timezone;
    }

       /**
     * @dev Set special period (only owner)
     */
    function setSpecialPeriod(string calldata period, bool isActive) external onlyOwner {
        specialPeriods[period] = isActive;
        emit SpecialPeriodSet(period, isActive);
    }
}
