
shoaibAddress='0x302a52608a11a580ec723ed53418ca5783eb0c1cc8c9493886468337f7b8fdc8';
rayyanAddress='0x974CaA59e49682CdA0AD2bbe82983419A2ECC400';
popUpAddress='0x56e09a79d862e0a454043672Cc5A772F0dd1df1f';
wetAddress='0x56e09a79d862e0a454043672Cc5A772F0dd1df1f';
factoryAddress='0x9b96058cae11b6c55c7ca04932889647da426074f69e39111e3b3918e7aec7ee';
swapRouterAddress='0xeB2629a2734e272Bcc07BDA959863f316F4bD4Cf';
nftDescriptorAddress='0x56e09a79d862e0a454043672Cc5A772F0dd1df1f';
positionManagerAddress='0x15a4bde81eda64d24ee1f417f133f75c9ed3038d4c124c796efbe22753059b75';
const artifact={
//     UniswapV3Factory:require('@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json'),
//     NonfungiblePositionManager:require('@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json'),
// };
// const {Contract,BigNumber}=require("ethers");
// const bn=require("bignumber.js");
// const { NonfungiblePositionManager } = require('@uniswap/v3-sdk');
// bn.config({EXPONENTIAL_AT:99999,DECIMAL_PLACES:40});
// const MAINNET_URL="https://eth-mainnet.g.alchemy.com/v2/Ig9Oj2DL0RWEZRqf1mB3Bq0OLyNABiwJ";
// const provider=new ethers.providers.JsonRpcProvider(MAINNET_URL);
// //const provider=waffle.provider;
// function encodePriceSqrt(reverse1,reverse0){
//     return bn(reserve1.toString())
//     .div(reserve0.toString())
//     .sqrt()
//     .multipliedBy(new bn(2).pow(96))
//     .integerValue(3)
//     .toString()
// }
// const nobfungiblePositionManager=new Contract(
//     positionManagerAddress,
//     artifacts.NonfungiblePositionManager.abi,
//     provider
// );
// const factory=new Contract(
//     factoryAddress,
//     artifacts.UniswapV3Factory.abi,
//     provider
// );
// async function deployPool(token0,token1,fee,price){
//     const [owner]=await ethers.getSigner();
//     await  NonfungiblePositionManager.connect(owner).createAndInitializePoolIfNecessary(token,token,fee,price,{
//         gasLimit:50000000,
//     });
//     const poolAddress=await factory.connect(owner).getPool(token0,token1,)
//     return poolAddress;
// }
// async function main(){
//     const shoRay=await deployPool(
//         shoaibAddress,
//         rayyanAddress,
//         500,
//         encodePriceSqrt(1,1)
//     );
//     console.log("SHO_RAY=",`'${shoRay}'`);
// }
// main().then(()=>process.exit(0))
// .catch((error)=>{
// console.error(error);
// process.exit(1);
// })
import {ethers} from 'ethers';
import {axios} from 'axios';
import Web3Modal from 'web3modal';
const bn=require('bignumber.js');
bn.config({EXPONENTIAL_AT:999999,DECIMAL_PLACES:40});
const UNISWAP_V3_FFACTORY_ADDRESS='0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f ';
const artifacts={
    uniswapV3Factory:require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
    NonfungiblePositionManager:require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
};
export const fetchPoolContract=(signOrProvider)=>
    new ethers.Contract(
NON_FUNGIBLE_MANAGER, 
artifacts.NonfungiblePositionManager.abi,
signOrProvider   );
const encodePriceSqrt=(reserve1,reserve0)=>{
    return BigNumber.from(
        new bn(reserve1.toSrting())
        .sqrt()
        .multipledBy(new bn(2).pow(96))
        .integerValue(3)
        .toString()
    )
}
export const connectingWithPoolContract=async(
    address1,
    address2,
    fee,
    tokenFee1,
    tokenFee2
)=>{
    const web3modal=new Web3Modal();
    const connection=await web3modal.connect();
    const provider=new ethers.providers.Web3Provider(connection);
    const signer=provider.getSigner();
    console.log(signer);
    const createPoolContract=await fetchPositionContract(signer);
    const price=encodePriceSqrt(tokenFee1,tokenFee2);
    console.log(price);
    const transaction=await createPoolContract
    .connect(signer)
    .creatAndInitilizePoolIfNecessary(address1,address2,fee,price,{gasLimit:3000000,});
    await transaction.wait();
    const factory=await fetchPoolContract(signer);
    const poolAddress=await factory.getPool(address1,address2,fee);
    return poolAddress;}