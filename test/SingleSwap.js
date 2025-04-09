const { expect } = require('chai');
const { ethers } = require('hardhat');

// Replace these addresses with your mock token addresses after deployment
const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // Replace with mock DAI address after deployment
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"; // Replace with mock USDC address if needed
const WETH9 = "0xC02aaa39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // Replace with mock WETH address after deployment

describe("SingleSwapToken",  ()=> {
    let singleSwapToken;
    let accounts;
    let weth;
    let dai;
    let usdc;
        before(async  ()=> {
        accounts = await ethers.getSigners(1);

        // Deploy Mock WETH
    

        // Deploy SingleSwapToken with the MockSwapRouter address
        const SingleSwapToken = await ethers.getContractFactory("SingleSwapToken");
        singleSwapToken = await SingleSwapToken.deploy("0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45");
        await singleSwapToken.deployed();
        weth=await ethers.getContractAt('IWETH',WETH9)
        dai=await ethers.getContractAt('IERC20',DAI)
        usdc=await ethers.getContractAt('IERC20',USDC)
        console.log("SingleSwapToken deployed at:", singleSwapToken.address);
    
    });

    it("swapExactInputString", async  ()=> {
        const amountIn = ethers.utils.parseEther('1');

        // Step 1: Deposit Mock WETH (simulate deposit function)
        await weth.deposit({ value: amountIn });
        await weth.approve(singleSwapToken.address, amountIn);
   

        // Step 3: Call swapExactInput
            await singleSwapToken.swapExactInputString(amountIn);
       
   
        // Check the balance of Mock DAI for the user after the swap
        console.log("DAI balance:", await dai.balanceOfalance(accounts[0].address));
    });
    it('swapExactOutputSigle',async()=>{
      const wethAmountInMax=ethers.utils.parseEther('1');
      const daiAmountOut=ethers.utils.parseEther('100');
      await weth.deposit({value:daiAmountOut});
      await weth.approve(singleSwapToken.address,wethAmountInMax);
      await singleSwapToken.swapExactOutputString(daiAmountOut,wethAmountInMax);
      console.log(accounts[0].address);
      console.log(accounts[1].address);
      console.log('dai balance', await dai.balanceOf(accounts[0].address))
        })
});