// SPDX-License-Identifier:GPL-2.0-or-Later

pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
contract SwapMultiHop{
    ISwapRouter public immutable swapRouter;
    address public constant DAI = 0xc9d2680511097d98aE6883b465087E5BD4ce2840;
    address public constant WETH9 = 0xf531B8F309Be94191af87605CfBf600D71C2cFe0;
    address public constant  USDC=0xa9c0da0dA5cDB7947Fa124B14Beb1af63E75b6AF;
    constructor(ISwapRouter _swapRouter){
        swapRouter=_swapRouter;
    }
        function swapExactInputMultihop(uint amountIn) external returns (uint amountOut){ 
        TransferHelper.safeTransferFrom(WETH9,msg.sender,address(this),amountIn);
        TransferHelper.safeApprove(WETH9,address(swapRouter),amountIn);
        ISwapRouter.ExactInputParams memory params=ISwapRouter.ExactInputParams({
            path:abi.encodePacked(WETH9,uint24(3000),USDC,uint24(100),DAI),
            recipient:msg.sender,
            deadline:block.timestamp,
            amountIn:amountIn,
            amountOutMinimum:0
        });
        amountOut=swapRouter.exactInput(params);
        }

         function swapExactOutputMultihop(uint amountOut,uint amountInMaximum) external returns (uint amountIn){ 
        TransferHelper.safeTransferFrom(WETH9,msg.sender,address(this),amountInMaximum);
        TransferHelper.safeApprove(WETH9,address(swapRouter),amountInMaximum);
        ISwapRouter.ExactOutputParams memory params=ISwapRouter.ExactOutputParams({
            path:abi.encodePacked(DAI,uint24(100),USDC,uint24(3000),WETH9),
            recipient:msg.sender,
            deadline:block.timestamp,
            amountOut:amountOut,
            amountInMaximum:amountInMaximum
        });
        amountIn=swapRouter.exactOutput(params);
        if(amountIn<amountInMaximum){
            TransferHelper.safeApprove(WETH9,address(swapRouter),0);
            TransferHelper.safeTransferFrom(WETH9,address(this),msg.sender,amountInMaximum-amountIn);
        }
        }
}