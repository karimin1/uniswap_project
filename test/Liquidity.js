const  {expect}=require("chai");
const { formatEther, formatUnits } = require("ethers/lib/utils");
const {ethers}=require('hardhat');
const DAI='0x6B175474E89094C44Da98b954EedeAC495271d0F';
const USDC='0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const DAI_WHALE='0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';// theese are bnb holder of dai 
const USDC_WHALE='0xB8c77482e45F1F44dE1745F52C74426C631bDD52';
describe('LiquidityExample',()=>{
    let LiquidityExamples;
    let liquidityExamples;
    let accounts;
    let dai;
    let usdc;
before(async function(){
    this.timeout(60000);
   account=await ethers.getSigners();
   accounts=account[0];
     LiquidityExamples=await ethers.getContractFactory(
        'LiquidityExample'
    );
  liquidityExamples= await LiquidityExamples.deploy()
    await liquidityExamples.deployed();
     dai=await ethers.getContractAt('IERC20',DAI);
     usdc=await ethers.getContractAt('IERC20',USDC);
    //unlock the dai and usdc whale address
    console.log('hardhat dai whale impersonate...');
    await network.provider.request({
        method:'hardhat_impersonateAccount',
        params:[DAI_WHALE],
    })

    console.log('impersonate of dai completed');
    console.log('hardhat usdc whale impersonate...');
    await network.provider.request({
        method:'hardhat_impersonateAccount',
        params:[USDC_WHALE],
    })
    console.log('impersonate of usdc completed');
    const daiwhale=await ethers.getSigner(DAI_WHALE);
    const usdcwhale=await ethers.getSigner(USDC_WHALE);
    //sending DAI and USDC to account[0]
    const daiAmount=ethers.utils.parseEther('500');
    const usdcAmount=ethers.utils.parseUnits('100',6);
    const daiwhaleBal=await dai.balanceOf(daiwhale.address);
    const usdcBal=await usdc.balanceOf(usdcwhale.address);
    //console.log('daiwhale acount',daiwhale.address);

    console.log(formatEther(daiAmount),formatUnits(usdcAmount,6),formatUnits(usdcBal,6),formatEther(daiwhaleBal,18));
     expect(await dai.balanceOf(daiwhale.address)).to.be.gte(daiAmount);
     expect(await usdc.balanceOf(usdcwhale.address)).to.be.gte(usdcAmount);

    await dai.connect(daiwhale).transfer(accounts.address,daiAmount);
    await usdc.connect(usdcwhale).transfer(accounts.address,usdcAmount);
    console.log('balance of dai account hardhat',formatEther(await dai.balanceOf(accounts.address)));
    console.log('balance of usdc account usdtc',formatUnits(await usdc.balanceOf(accounts.address),6));
})
it('mintNewPosition',async()=>{
    const daiAmount=ethers.utils.parseEther('99');
    const usdcAmount=ethers.utils.parseUnits('49',6);
    await dai.connect(accounts).transfer(liquidityExamples.address, daiAmount.add(ethers.utils.parseEther('1')));
    await usdc.connect(accounts).transfer(liquidityExamples.address, usdcAmount.add(ethers.utils.parseUnits('1', 6)));

    console.log('dai balance before mint',formatEther(await dai.balanceOf(accounts.address)));
    console.log('usdc balance before mint',formatUnits(await usdc.balanceOf(accounts.address),6));
    await liquidityExamples.mintNewPosition();
    console.log('dai balance after mint',formatEther(await dai.balanceOf(accounts.address)));
    console.log('usdc balance after mint',formatUnits(await usdc.balanceOf(accounts.address),6));

})

})