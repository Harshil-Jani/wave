// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;
import "hardhat/console.sol";

contract Wave {
    uint256 totalWaves;

    event NewWave (address indexed from, uint256 timestamp, string message);
    struct Waiver{
        address addr;
        string message;
        uint256 timestamp;
    }
    Waiver[] waivers;
    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave(string memory _message) public {
        totalWaves +=1;
        console.log("%s has waved!!",msg.sender);

        waivers.push(Waiver(msg.sender,_message,block.timestamp));
        emit NewWave(msg.sender, block.timestamp, _message);
    }
    function getAllWaves() public view returns (Waiver[] memory){
        return waivers;
    }
    function getTotalWaves() public view returns (uint256){
        console.log("We have %d total waves",totalWaves);
        return totalWaves;
    }
}
