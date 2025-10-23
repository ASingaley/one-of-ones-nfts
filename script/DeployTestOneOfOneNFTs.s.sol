// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Script} from "forge-std/Script.sol";
import {TestOneOfOneNFTs} from "../src/Onchain/TestOneOfOneNFTs.sol";

contract DeployTestOneOfOneNFTs is Script {
    TestOneOfOneNFTs public testOneOfOneNFTs;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        testOneOfOneNFTs = new TestOneOfOneNFTs();

        vm.stopBroadcast();
    }
}
