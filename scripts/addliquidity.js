
// shoaibAddress='0x302a52608a11a580ec723ed53418ca5783eb0c1cc8c9493886468337f7b8fdc8';
// rayyanAddress='0x974CaA59e49682CdA0AD2bbe82983419A2ECC400';
// popUpAddress='0x56e09a79d862e0a454043672Cc5A772F0dd1df1f';
// wetAddress='0x56e09a79d862e0a454043672Cc5A772F0dd1df1f';
// factoryAddress='0x9b96058cae11b6c55c7ca04932889647da426074f69e39111e3b3918e7aec7ee';
// swapRouterAddress='0xeB2629a2734e272Bcc07BDA959863f316F4bD4Cf';
// nftDescriptorAddress='0x56e09a79d862e0a454043672Cc5A772F0dd1df1f';
// positionManagerAddress='0x15a4bde81eda64d24ee1f417f133f75c9ed3038d4c124c796efbe22753059b75';
// SHO_RAY="0x01D4648B896F53183d652C02619c226727477C82";
// const artifact={
//     NonfungiblePositionManager:require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
//     shoaib:require("../artifacts/contracts/Shoaib.sol/Shoaib.json"),
//     Rayyan:require("../artifacts/contracts/Rayyan.sol/Rayyan.json"),
//     UniswapV3Pool:require("@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json"),
// }
// const {Contract}=require('ethers');
// const {Token}=require("@uniswap/sdk-core");
// const {Pool,Position,nearestUsableTick, SqrtPriceMath}=require("@uniswap/v3-sdk");
// async function getPoolData(poolContract){
//     const [tickSapcing,fee,liquity,slot0]=await Promise.all([
//         poolContract.tickSapcing(),
//         poolContract.fee(),
//         poolContract.liquidity(),
//         poolContract.slot(),
//     ]);
//     return{
//         tickSpacing:tickSpacing,
//         fee:fee,
//         liquity:liquity,
//         SqrtPricex96:slot0[0],
//         tick:slot0[1],
//     }
//     async function main(){
//         const [owner,signer2]=await ethers.getSigners();
//         const provider=waffle.provider;
//     const ShoaibContract=new Contract(
//         shoaibAddress,
//         artifacts.Shoaib.abi,
//         provider
//     );
//     const RayyanContract=new Contract(
//         rayyanAddress,
//         artifacts.Rayyan.abi,
//         provider
//     );
//     await ShoaibContract.connect(signer2).approve(
//         positionManagerAddress,
//         ethers.utils.parseEther("1000")
//     );
//     await RayyanContract.connect(signer2).approve(
//         positionManagerAddress,
//         ethers.utils.parseEther('1000')
//     );
//     const poolContract=new Contract(
//         SHO_RAY,
//         artifacts.UniswapV3Pool.abi,
//         provider
//     );
//     const poolData=await getPoolData(poolContract);
//     const ShaoaibToken=new Token(31337,shoaibAddress,18,"Shoaib","Tether");
//     const RayyanToken=new Token(31337,rayyanAddress,18,"Rayyan","Rayyanoin")
//     const pool=new Pool(ShaoaibToken,
//         RayyanToken,poolData.fee,
//         poolData.SqrtPricex96.toString(),
//         poolData.liquidity.toString(),
//         poolData.tick
//     );
//     const position =new Position({
//         pool:pool,
//         liquidity:ethers.utils.parseEther('1'),
//         tickLower:
//         nearestUsableTick(poolData.tick,poolData.tickSpacing)-
//         poolData.tickSpacing*2,
//         tickUpper:nearestUsableTick(poolData.tick,poolData.tickSapcing)+
//         poolData.tickSpacing*2,
//     });
//     const{amount0:amount0Desired,amount1:amount1Desired}=position.mintAmounts;
//     params={
//         token0:shoaibAddress,
//         token1:rayyanAddress,
//         fee:poolData.fee,
//         tickLower:nearestUsableTick(poolData.tick,poolData.tickSpacing)-poolData.tickSpacing*2,
//         tickUppper:nearestUsableTick(poolData.tick,poolData.tickSapcing)+poolData.tickSpacing,
//         amount0Desired:amount0Desired.toString(),
//         amount1Desired:amount0Desired.toString(),
//         amount0Min:0,
//         amount1Min:0,
//         recipient:signer2.address,
//         deadline:Math.floor(Date.now()/1000)+60*10
//     };
//     const NonfungiblePositionManager=new Contract(
//         positionManagerAddress,
//         artifacts.NonfungiblePositionManager.abi,
//         provider
//     );
//     const tx=await NonfungiblePositionManager.connect(signer2)
//     .mint(params,{gasLimit:'1000000'});
//     const receipt=await tx.wait();
//     console.log(receipt);
//     }
//     main().then(()=>process.exit(0))
//     .catch((error)=>{
//         console.error(error);
//         process.exit(1);
//     })
// }
import WebModal from 'web3modal';
import {Contract} from "ethers";
import {Token} from "@uniswap/sdk-core";
import {Pool,Position,nearestUsableTick}from '@uniswap/v3/sdk';
// UNISWAP CONTRACT ADDRESS 

wetAddress='0x56e09a79d862e0a454043672Cc5A772F0dd1df1f';
factoryAddress='0x9b96058cae11b6c55c7ca04932889647da426074f69e39111e3b3918e7aec7ee';
swapRouterAddress='0xeB2629a2734e272Bcc07BDA959863f316F4bD4Cf';
 nftDescriptorAddress='0x56e09a79d862e0a454043672Cc5A772F0dd1df1f';
positionManagerAddress='0x15a4bde81eda64d24ee1f417f133f75c9ed3038d4c124c796efbe22753059b75';
const artifacts={
NonfungiblePositionManager:require('@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json'),
UniswapV3Pool:require("@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json"),
WETH9:require("../Context/IWETH/IWETH.json"),
}
async function getPoolData(poolContract){
    const [tickSpacing,fee,liquidity,slot0]=await Promise.all([
        poolContract.tickSpacing(),
        poolContract.fee(),
        poolContract.liquidity(),
        poolContract.slot(),
    ]);
    return {
        tickSpacing:tickSpacing,
        fee:fee,
        liquidity:liquidity,
        sqrtPriceX96:slot0[0],
        tick:slot0[1],
    };
}
export const addliquidityExternal=async(
tokenAddress1,
tokenAddresse2,
poolAddress,
poolFee,
tokenAmount1
)=>{
    const web3Modal=await new Web3Modal();
    const connection=await web3Modal.connect();
    const provider=await ethers.providers.Web3Provider(connection);
    const signer=await provider.getSigner();
    const accountAddress=await  signer.getAddress();
    const token1Contract=new  Contract(
        tokenAddress1,
        artifacts.WETH9.abi,
        provider
    );
    const  token2Contract=new Contract(
        tokenAddresse2,
        artifacts.WETH9.abi,
        provider,
    );
    await  token1Contract.connect(signer).approve(
        positionManagerAddress,
        ethers.utils.parseEther(tokenAmount1.toString())
    );
    const poolContract=new Contract(
        poolAddress,
        artifacts.UniswapV3Pool.abi,
        provider
    );
    const {chainId}=await provider.getNetwork();
    const token1Name=await token1Contract.name();
    const token1Symbol=await  token1Contract.symbol();
    const token1Decimals=await token1Contract.decimals();
    const token1Address=await token1Contract.address;

    const token2Name=await token2Contract.name();
    const token2Symbol=await  token2Contract.symbol();
    const token2Decimals=await token2Contract.decimals();
    const token2Address=await token2Contract.address;
}
const TokenA=new Token(
    chainId,
    token1Address,
    token1Decimals,
    token1Name,
    token1Symbol
);
const TokenB=new Token(
    chainId,
    token2Address,
    token2Decimals,
    token2Name,
    token2Symbol
);
const poolData=await getPoolData(poolContract);
console.log(poolData);
const pool=new Pool(
    TokenA,
    TokenB,
    poolData.fee,
    poolData.sqrtPriceX96.toString(),
    poolData.liquidity.toString(),
    poolData.tick
)
const position =new  Position({
    pool:pool,
    liquidity:ethers.utils.parseEther("1"),
    tickLower:
    nearestUsableTick(poolData.tick,poolData.tickSpacing)-poolData.tickSpacing*2,
    tickUpper:nearestUsableTick(poolData.tick,poolData.tickSapcing)+poolData.tickSpacing*2,
});
const {amount0:amount0Desired,amount1:amountDesired}=position.mintAmounts;
const params={
    token0:tokenAddress1,
    token1:tokenAddress2,
    fee:poolData.fee,
    tickLower:nearestUsableTick(poolData.tick,poolData.tickSpacing)-poolData.tickSpacing*2,
    tickUpper:nearestUsableTick(poolData.tick,poolData.tickSpacing)+poolData.tickSpacing*2,
    amount0Desired:amount0Desired.toString(),
    amountDesired:amountDesired.toString(),
    amount0Min:0,
    amount1Min:0,
    recipient:accountAddress,
    deadline:Math.floor(Date.now()/1000)+60*10,
}
const nonfungiblePositionManager=new Contract(
    positionManagerAddress,
    artifacts.NonfungiblePositionManager.abi,
    provider
)
const tx=await onfungiblePositionManagerams.connect(signer).mint(params,{
    gasLilimit:"100000",
})
const receip=await tx.wait();
return receip;