const hre=require("hardhat");
async function main(){
    // const BooToken=await hre.ethers.getContractFactory('BooToken')
    // const booToken=await BooToken.deploy();
    // await booToken.deployed();
    // console.log(" bOOTOKEN deployed to", booToken.address)

    // const LifeToken=await hre.ethers.getContractFactory('LifeToken')
    // const lifeToken=await LifeToken.deploy();
    // await lifeToken.deployed();
    // console.log("lIFETOKEN deployed to", lifeToken.address)

  const UserStorageData = await hre.ethers.getContractFactory("UserStorageData");
const userStorageData = await UserStorageData.deploy("0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45");

console.log("Deploying SingleSwapToken...");

// Wait for the contract to be mined
await userStorageData.waitForDeployment();

// Correct way to get the deployed address
console.log(`userStorageData deployed to: ${await userStorageData.getAddress()}`);


    const SwapMultiHop=await hre.ethers.getContractFactory('SwapMultiHop');
    const swapMultiHop=await SwapMultiHop.deploy("0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45");
    // // await swapMultiHop.deployed();
    // // console.log('SwapMultiHop deployed on',swapMultiHop.address);
    // // const IWETHAddress = "0xC02aaa39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // Mainnet WETH address

    // // const IWETH = await hre.ethers.getContractAt('IWETH', IWETHAddress);
    // // console.log('IWETH is depoeyd at:',IWETH.address);
}
main().catch((error)=>{
    console.error(error);
    process.exitCode=1;
})