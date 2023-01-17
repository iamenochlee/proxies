// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./StorageSlot.sol";

contract ProxyAssigned {
    //this works with or without x commented
    // uint x;

    function changeImplementaion(address _impl) external returns (bool) {
        StorageSlot.getAddressSlot(keccak256("impl")).value = _impl;
        return true;
    }

    fallback() external {
        (bool success, ) = StorageSlot
            .getAddressSlot(keccak256("impl"))
            .value
            .delegatecall(msg.data);
        require(success);
    }
}

contract Logic1Assigned {
    uint x;

    function changeX(uint _x) external {
        x = _x;
    }
}

contract Logic2Assigned {
    uint x = 0;

    function changeX(uint _x) external {
        x = _x;
    }

    function tripleX() public {
        x *= 3;
    }
}
