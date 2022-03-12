// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0; // compiler directive. sets version

contract MyFirstContract {
    string private name;

    constructor(string memory _name) {
        name = _name;
    }

    function changeName(string memory _name) public {
        name = _name;
    }

    function getName() public view returns (string memory) { // view keyword marks this function as read-only
        return name;
    }
}
