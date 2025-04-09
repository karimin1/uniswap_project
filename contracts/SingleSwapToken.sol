//SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity  >=0.7.0 < 0.9.0 ;
pragma abicoder v2;

import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import './IWETH.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract SingleSwapToken {
    ISwapRouter public immutable swapRouter;
//     address public constant token2 = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
//  address public constant token1 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
//    address public constant  USDC=0xa9c0da0dA5cDB7947Fa124B14Beb1af63E75b6AF;
    uint24 public constant feeTier = 3000;

    constructor(ISwapRouter _swapRouter) {
        swapRouter = _swapRouter;
    }

     function swapExactInputString(address token1,address token2,uint256 amountIn) external 
     payable returns (uint256 amountOut) {
        require(msg.value > 0, "No ETH sent");
         require(msg.value == amountIn, "ETH amount mismatch");
 TransferHelper.safeTransferFrom(
    token1, msg.sender, address(this), amountIn);
   
   TransferHelper.safeApprove(token1, address(swapRouter), amountIn);
       uint256 minOut = /* Calculate min output */ 0;
       uint160 priceLimit = /* Calculate price limit */ 0;
      ISwapRouter.ExactInputSingleParams memory params =
        ISwapRouter.ExactInputSingleParams({
             tokenIn: token1,
               tokenOut: token2,
              fee: feeTier,
             recipient: msg.sender,
              deadline: block.timestamp,
            amountIn: amountIn,
            amountOutMinimum: minOut,
              sqrtPriceLimitX96: priceLimit
         });
      amountOut = swapRouter.exactInputSingle(params);
  }



 
function swapExactOutputString(address token1,address token2,uint256 amountOut, uint256 amountInMaximum) external payable returns (uint256 amountIn) {

 
        // Transfer the specified amount of token2 to this contract.
        TransferHelper.safeTransferFrom(token1, msg.sender, address(this), amountInMaximum);

        // Approve the router to spend the specified `amountInMaximum` of token2.
        // In production, you should choose the maximum amount to spend based on oracles or other data sources to achieve a better swap.
    TransferHelper.safeApprove(token1, address(swapRouter), amountInMaximum);

        ISwapRouter.ExactOutputSingleParams memory params =
            ISwapRouter.ExactOutputSingleParams({
                tokenIn: token1,
                tokenOut: token2,
                fee: 3000,
                recipient: msg.sender,
                deadline: block.timestamp,
                amountOut: amountOut,
                amountInMaximum: amountInMaximum,
                sqrtPriceLimitX96: 0
            });

        // Executes the swap returning the amountIn needed to spend to receive the desired amountOut.
        amountIn = swapRouter.exactOutputSingle(params);

        // For exact output swaps, the amountInMaximum may not have all been spent.
        // If the actual amount spent (amountIn) is less than the specified maximum amount, we must refund the msg.sender and approve the swapRouter to spend 0.
      
    }
}
