const { expect } = require('chai');
const { ethers } = require('hardhat');

// Replace these addresses with your mock token addresses after deployment
const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // Replace with mock DAI address after deployment
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"; // Replace with mock USDC address if needed
const WETH9 = "0xf531B8F309Be94191af87605CfBf600D71C2cFe0"; // Replace with mock WETH address after deployment

describe("SwapMultiHop",  ()=> {
    let swapMultiHop;
    let accounts;
    let weth;
    let dai;
    let usdc;

    before(async  ()=> {
        accounts = await ethers.getSigners(1);

        // Deploy Mock WETH
    

        // Deploy SingleSwapToken with the MockSwapRouter address
        const SwapMultiHop = await ethers.getContractFactory("SwapMultiHop");
        swapMultiHop = await SwapMultiHop.deploy("0xb41b78Ce3D1BDEDE48A3d303eD2564F6d1F6fff0");
        await swapMultiHop.deployed();
        weth=await ethers.getContractAt('IWETH',WETH9)
        dai=await ethers.getContractAt('IERC20',DAI)
        usdc=await ethers.getContractAt('IERC20',USDC)
        console.log("SwapMultiHop deployed at:", swapMultiHop.address);
    
    });

    it("swapExactInputMultihop", async  ()=> {
       const amountIn = ethers.utils.parseEther('1');

         // Step 1: Deposit Mock WETH (simulate deposit function)
        await weth.deposit({ value: amountIn });
         await weth.approve(swapMultiHop.address, amountIn);
   

        // Step 3: Call swapExactInput
             await swapMultiHop.swapExactInputMultihop(amountIn);
       
   
         // Check the balance of Mock DAI for the user after the swap
         console.log("DAI balance:", await dai.balanceOfalance(accounts[0].address));
     });
    it('swapExactOutputMultihop',async()=>{
      const wethAmountInMax=ethers.utils.parseEther('1');
      const daiAmountOut=ethers.utils.parseEther('100');
      await weth.deposit({value:daiAmountOut});
      await weth.approve(singleSwapToken.address,wethAmountInMax);
      await swapMultiHop.swapExactOutputMultihop(daiAmountOut,wethAmountInMax);
      console.log(accounts[0].address);
      console.log(accounts[1].address);
      console.log('dai balance', await dai.balanceOf(accounts[0].address))
        })
});