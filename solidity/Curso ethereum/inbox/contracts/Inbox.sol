//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Inbox {
    string public message;

    function Inbox (string memory initialMessage) public {
        message = initialMessage;

    }

    function setMessage(string memory newMessage)public {
        message = newMessage;
    }
}
