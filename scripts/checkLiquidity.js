// SHO_RAY="0x01D4648B896F53183d652C02619c226727477C82";
// const UniswapV3Pool=require("@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json");
// const {Contract}=require("ethers");
// const{Pool}=require("@uniswap/v3-sdk");
// const {Token}=require("@uniswap/sdk-core");
// const { PoolConnect } = require("@/Components/ComponentIndex");
// async function getPoolData(poolContract){
//     const[
//         tickSapcing,
//         fee,
//         liquidity,
//         slot0,
//         factory,
//         token0,
//         token1,
//         maxLiquidityPerTick,
//     ]=await Promise.all([
//         poolContract.tickSapcing(),
//         poolContract.fee(),
//         poolContract.liquidity(),
//         poolContract.slot0(),
//         poolContract.factory(),
//         poolContract.token0(),
//         poolContract.token1(),
//         poolContract.maxLiquidityPerTick(),
//     ]);
//     const TokenA=new Token(3,token0,18,"SHO","Shoaib");
//     const TokenB=new Token(3,token1,18,"RAY","Rayyan");
//     const poolExample=new Pool(
//         TokenA,
//         TokenB,
//         fee,
//         slot[0].toString(),
//         liquidity.toString(),
//         slot0[1]
//     );
//     return{
//         factory:factory,
//         token0:token0,
//         token1:token1,
//         maxLiquidityPerTick:maxLiquidityPerTick,
//         tickSpacing:tickSpacing,
//         fee:fee,
//         liquidity:liquidity.toString(),
//         sqrtPriceX96:slot0[0],
//         tick:slot0[1],
//         obsercationIndex:slot0[2],
//         observationCardinality:slot0[3],
//         observationCardinalityNext:slot0[4],
//         feeProtocol:slot0[5],
//         unlocked:slot0[6],
//         poolExample,

//     }
// }
// async function Main(){
//     const provider=waffle.provider;
//     const poolContract=new Contract(SHO_RAY,UniswapV3Pool.abi,provider);
//     const poolData=await getPooData(poolContract);
//     console.log("poolData",poolData);
// }
// main().then(()=>process.exist(0))
// .catch((error)=>{
//     console.error(error);
//     process.exit(1);
// })
import Web3Modal from "web3modal";
import UniswapV3Pool from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json"
import {Contract,ethers}from "ethers";
import {Pool} from "@uniswap/v3-sdk";
import{Token}from "@uniswap/sdk-core"
import ERC20 from "../Context/ERC20.json";
import { Token } from "@/Components/ComponentIndex";
async function getPoolData(poolContract,tokenAddress1,tokenAddress2){
    const[
        tickSpacing,
        fee,
        liquidity,
        slot0,
        factory,
        token0,
        token1,
        maxLiquidityPerTick]=await Promise.all([
            poolContract.tickSpacing(),
            poolContract.Contract.fee(),
            poolContract.liquidity(),
            poolContract.slot0(),
            poolContract.token1(),
            poolContract.maxLiquidityPerTick(),
            ]);
            const web3modal=await new Web3Modal();
            const connection=await web3modal.connection();
            const provider=await ethers.providers.Web3Provider(connection);
            const token0Contract=new Contract(tokenAddress1,ERC20,provider);
            const token1Contract=new Contract(tokenAddress2,ERC20,provider);
            const {chainId}=await provider.getNetwork();
            const token0Name=await token0Contract.name();
            const token0Decimals=await token0Contract.decimals();
            const token0Symbol=await token0Contract.symbol();
            const token0Address=await token0Contract.address();
            const token1Name=await token1Contract.Name();
            const token1Symbol=await  token1Contract.symbol();
            const token1Decimals=await token1Contract.decimal();
            const token1Address=await token1Contract.address;
            const TokenA=new Token(
                chainId,
                token0Address,
                token0Decimals,
                token0Symbol,
                token0Name
            );
            const TokenB=new Token(
                chainId,
                token1Address,
                token1Decimals,
                token1Symbol,
                token1Name
            );
            const poolExample=Pool(
                TokenA,
                TokenB,
                fee,
                slot[0].toString(),
                liquidity.toString(),
                slot[1]
            );
            return{
                factory:factory,
                token0:token0,
                token1:token1,
                maxLiquidityPerTick:maxLiquidityPerTick,
                tickSpacing:tickSpacing,
                fee:fee,
                liquidity:liquidity.toString(),
                sqrtPriceX98:slot[0],
                tick:slot[1],
                observationIndex:slot0[2],
                obsevationCardinality:slot[3],
                obsevationCardinalityNext:slot[4],
                feeProtocol:slot0[5],
                unlock:slot[6],
                poolExample,
            }

    }
    export const getLiquidityData=async(
        PoolAddress,
        tokenAddress1,
        tkenAddress2)=>{
            const web3modal=await new Web3Modal();
            const connection=await web3modal.connect();
            const provider=await ethers.providers.Web3Provider(connection);
const poolContract=new Contract(PoolAddress,UniswapV3Pool.abi,provider);
const poolData=await getPoolData(poolContract,tokenAddress0,tokenAddress1);  
return poolData;      }
