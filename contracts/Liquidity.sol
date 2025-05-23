// //SPDX-License-Identifier:GPL-2.0-or-Later
//  pragma solidity >=0.7.0 <0.9.0;
// import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
// import "@uniswap/v3-core/contracts/libraries/TickMath.sol";
// import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
// import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
// import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
// import "@uniswap/v3-periphery/contracts/base/LiquidityManagement.sol";
// import "hardhat/console.sol";
// pragma abicoder v2;
// contract LiquidityExample is IERC721Receiver{
//     address  public constant DAI=0x6B175474E89094C44Da98b954EedeAC495271d0F;
//     address  public constant USDC=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
//     uint24 public constant poolFee=100;
//     INonfungiblePositionManager public nonfungiblePositionManager=
//     INonfungiblePositionManager(0xC36442b4a4522E871399CD717aBDD847Ab11FE88);
// struct Deposit{
//     address owner;
//     uint128 liquidity;
//     address  token0;
//     address token1;
// }
// mapping(uint=>Deposit)public deposits;
// uint public tokenId;
// function onERC721Received(
//     address operator,
//     address,
//     uint _tokenId,
//     bytes calldata
// )external override returns(bytes4){
//     _createDeposit(operator,_tokenId);
//     return this.onERC721Received.selector;
// }

// function _createDeposit(address owner,uint _tokenId)internal{ 
//     (
//     ,
//     ,
//     address token0,
//     address token1,
//     ,
//     ,
//     ,
//     uint128 liquidity
//     ,
//     ,
//     ,
//     ,
    
// )=nonfungiblePositionManager.positions(_tokenId);
// deposits[_tokenId]=Deposit({
//     owner:owner,
//     liquidity:liquidity,
//     token0:token0,
//     token1:token1
// });
// console.log("Token id",_tokenId);
// console.log('liquidity',liquidity);
// }

// function mintNewPosition()external returns(
//     uint _tokenId,
//     uint128 liquidity,
//     uint amount0,
//     uint amount1
// )

// {
//     uint amount0ToMint=1000*1e18;
//     uint amount1ToMint=100*1e6;
//     TransferHelper.safeApprove(
//         DAI,
//         address(nonfungiblePositionManager),
//         amount0ToMint
//     );
//     TransferHelper.safeApprove(
//         USDC,
//         address(nonfungiblePositionManager),
//         amount1ToMint
//     );
//     INonfungiblePositionManager.MintParams
//     memory params=INonfungiblePositionManager.MintParams({
//         token0:DAI,
//         token1:USDC,
//         fee:poolFee,
//         tickLower:TickMath.MIN_TICK,
//         tickUpper:TickMath.MAX_TICK,
//         amount0Desired:amount0ToMint,
//         amount1Desired:amount1ToMint,
//         amount0Min:0,
//         amount1Min:0,
//         recipient:address(this),
//         deadline:block.timestamp
//     });
//     (_tokenId,liquidity,amount0,amount1)=nonfungiblePositionManager
//     .mint(params);
//     _createDeposit(msg.sender,_tokenId);
//     if(amount0<amount0ToMint){
//         TransferHelper.safeApprove(
//         DAI,
//         address(nonfungiblePositionManager),
//         0
//     );
//     uint refund0=amount0ToMint-amount0;
//     TransferHelper.safeTransfer(DAI,msg.sender,refund0);
// }
// if(amount1<amount1ToMint){
//        TransferHelper.safeApprove(
//         USDC,
//        address(nonfungiblePositionManager),
//        0);
//        uint refund1=amount1ToMint-amount1;
//        TransferHelper.safeTransfer(USDC,msg.sender,refund1);
// }
// return (_tokenId, liquidity, amount0, amount1);

// }
//    function collectAllFees(uint _tokenId)external returns (uint256 amount0,uint amount1){
//     INonfungiblePositionManager.CollectParams memory params=
//    INonfungiblePositionManager.CollectParams({
//     tokenId:_tokenId,
//     recipient:address(this),
//     amount0Max:type(uint128).max,
//     amount1Max:type(uint128).max
//    });
// (amount0,amount1)=nonfungiblePositionManager.collect(params);
// console.log('fee 0',amount0);
// console.log('fee 1',amount1);
// }

// function increaseLiquidityCurrentRange(
//     uint256 amountAdd0,
//     uint256 amountAdd1
// )external returns(
//     uint128 liquidity,
//     uint256 amount0,
//     uint256 amount1
// )
// {
//     TransferHelper.safeTransferFrom(DAI,msg.sender,address(this),amountAdd0);
//     TransferHelper.safeTransferFrom(USDC,msg.sender,address(this),amountAdd1);
//     TransferHelper.safeApprove(DAI,address(nonfungiblePositionManager),amountAdd0);
//     TransferHelper.safeApprove(USDC,address(nonfungiblePositionManager),amountAdd1);

//    INonfungiblePositionManager.IncreaseLiquidityParams memory params=
// INonfungiblePositionManager.IncreaseLiquidityParams({
//     tokenId:tokenId,
//     amount0Desired:amountAdd0,
//     amount1Desired:amountAdd1,
//     amount0Min:0,
//     amount1Min:0,
//     deadline:block.timestamp+300});
//     (liquidity,amount0,amount1)=nonfungiblePositionManager.increaseLiquidity(params);
//     console.log("liquidity",liquidity);
//     console.log("amount 0",amount0);
//     console.log("amount 1",amount1);
//     return(liquidity,amount0,amount1);
//     }

// function getLiquidty(uint _tokenId)external view  returns(uint128){
//     (
//         ,
//         ,
//         ,   
//         ,
//         ,
//         ,
//         ,
//         uint128 liquidity,
//         , 
//         ,
//         ,
        
//     )=nonfungiblePositionManager.positions(_tokenId);
//     return liquidity;

// }
// function decreaseLiquidity(uint128 liquidity)external returns(uint amount0,uint amount1){
//     INonfungiblePositionManager.DecreaseLiquidityParams memory params=
//     INonfungiblePositionManager.DecreaseLiquidityParams({
//         tokenId:tokenId,
//         liquidity:liquidity,
//         amount0Min:0,
//         amount1Min:0,
//         deadline:block.timestamp
//     });
//     (amount0,amount1)=nonfungiblePositionManager.decreaseLiquidity(params);
//     console.log("amount 0",amount0);
//     console.log("amount 1",amount1);
//     return(amount0,amount1);
// // }
// }
// }