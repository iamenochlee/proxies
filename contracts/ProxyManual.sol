// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./StorageSlot.sol";
import "hardhat/console.sol";

contract ProxyManual {
    //try commenting out x and see it fails
    // uint x;

    address implementation;

    function changeImplementaion(address _impl) external returns (bool) {
        implementation = _impl;
        console.log("CHANGED");
        return true;
    }

    fallback() external {
        (bool success, ) = address(implementation).delegatecall(msg.data);
        require(success);
    }
}

contract Logic1Manual {
    uint x;

    function changeX(uint _x) external {
        x = _x;
    }
}

contract Logic2Manual {
    uint x = 0;

    function changeX(uint _x) external {
        x = _x;
        console.log("HERE on CHANGE");
    }

    function tripleX() external {
        console.log("HERE");
        x *= 3;
    }
}
