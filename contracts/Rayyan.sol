//SPDX-License-Identifier:GPL-2.0-or-Later
pragma  solidity >=0.7.0 <0.9.0;
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
contract Rayyan is ERC20,Ownable{
       constructor()ERC20('Rayyan','RAY'){
    _mint(msg.sender,100000*10**decimals());
}   
    }
