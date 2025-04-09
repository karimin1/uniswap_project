'use client'
import React from 'react';
import { useEffect,useContext,useState } from 'react';
import {ethers} from 'ethers'; // Updated import
import Web3Modal from 'web3modal';
import {checkIfWalletConnected,
        connectWallet,
        connectingWithBooToken,
        connectingwithLifeToken,
        connectingwithSingleSwapToken, 
        connectingwithIWETHTOKEN,
        connectingwithDAITOKEN,
        connectingWithUserStorageContract,
}from '../Utils/appFeatures';
import {addliquidityExternal} from '../scripts/addliquidity'
import {getLiquidityData} from '../scripts/checkLiquidity'
import {connectingWithPoolContract} from '../scripts/deployPool'
import { IWETHAbi } from './Constant';
import ERC20 from './ERC20.json';
import Error from 'next/error';
import {Token,CurrencyAmount,TradeType,Percent} from "@uniswap/sdk-core"
import {getPrice}from "../Utils/FetchingPrice";
import {swapUpdatePrice} from "../Utils/SwapUpdatePrice"
import { solidity } from '@/hardhat.config';
import axios from 'axios';
export const SwapTokenContext=React.createContext();
export const SwapTokenContextProvider=({children})=>{
const swap='welcome to swap my token';
const {getAddress}=ethers.utils;


const [account,setAccount]=useState('');
const [ether,setEther]=useState('');
const [networkConnect,setNetworkConnect]=useState('')
const [Weth9,setWeth9]=useState();
const [DAI,setDAI]=useState();
const [tokenData,setTokenData]=useState([]);
const [getAllLiquidity,setgetAllLiquidity]=useState([]);
const [topTokensList,setTopTokenList]=useState([]);
const addToken=['0x99cFFb50aaD37D17955253F3a4070556b5127a0b',
        '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
        '0x949bEd886c739f1A3273629b3320db0C5024c719',
        '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
        '0x582d872A1B094FC48F5DE31D3B73F2D9bE47def1',
        '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        '0x21c2c96Dbfa137E23946143c71AC8330F9B44001'

      ];
        const fetchingData=async()=>{
                                  //GET USER ACCOUNT
                        const userAccount=await checkIfWalletConnected();
                        setAccount(userAccount);
                        //CREATE PROVIDER
                        const web3modal=new Web3Modal();
                        const connection=await web3modal.connect();
                        const provider=new ethers.providers.Web3Provider(connection);
                      
                                //CHECK BALANCE
               
                const network=await provider.getNetwork();
                const networkName=network.name;
                setNetworkConnect(networkName);
               // console.log('networkName',networkName);
                for (const el of addToken) {

                      
                          // Create a contract instance with a signer
                          const signer = provider.getSigner();
                          console.log('signer in looooop is',signer);
                          const contract = new Contract(el, ERC20.abi, signer);
                          // Fetch token balance
                          //console.log("contract of symbols  is",contract)
                          const userBalance = await contract.balanceOf(userAccount);
                          const tokenBalance = formatEther(userBalance);
                          const name=await contract.name();
                          const symbol=await contract.symbol();
                      //console.log('name',name,symbol,tokenBalance);
                          
                       setTokenData((prevData)=>([...prevData,{name,symbol,tokenBalance,el}]));
                      

                      }
                      //GET LIQUIDITY
                      const userStorageData=await connectingWithUserStorageContract();
                     const userLiquity=await userStorageData.getAllTransaction();
                     console.log(userLiquity);
                     userLiquidity.map(async (el,i)=>{
                      const liquidityData=await getLiquidityData(
                        el.poolAdress.poolAdreess,
                        el.tokenAddress,
                        tokenAddrss1,
                      )
                      getAllLiquidity.push(liquidityData)
                      console.log(getAllLiquidity);
         } )
               const URL="https://gateway.thegraph.com/api/<YOUR_API_KEY_HERE>/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV";  
        const query=`
        {
        tokens(orderBy:volimneUSD,orderDirection:desc,first:20){
        id
        name
        symbol
        decimal
        volume
        volumeUSD
        totalSupply
        feeUSD
        txCount
        totalValueLockedUSD
        totalValueLocked
        deriveETH
        }}`;
        const axiosData=await axios.post(URL,{query:query});
        console.log(axiosData.data.Data.tokens);
        setTopTokenList(axiosData.data.data.tokens);
              }catch(error){
                console.log(error);
              }
}

        useEffect(()=>{
                 fetchingData();
               },[])
       //CREATE AND ADD LIQUIDITY
       const createLiquidityAndPool=async({
        tokenAddress0,
        tokenAddress1,
        fee,
        tokenPrice1,
        tokenPrice2,
        slippage,
        deadLine,
        tokenAmmount0,
        tokenAmmount1,
       })=>{
        try{
          //CREATE POOL
          const  createPool=await connectingWithPoolContract(
            tokenAddress0,
            tokenAddress1,
            fee,
            tokenPrice1,
            tokenPrice2,
            {gasLimit:50000,}
          )
          const poolAddress=createPool;
        
          //CREATE LIQUIDITY
          const info=await addliquidityExternal(
            tokenAddress0,
            tokenAddress1,
            poolAddress,
            fee,
            tokenAmmount0,
            tokenAmmount1

          );

        console.log(info);
        //ADD DATA
        const userStorageData=await connectingWithUserStorageContract();
        const userLiquidity=await userStorageData.addToBlockchain(
          poolAddress,
          tokenAddress0,
          tokenAddress1
        );
        }catch(error){
          console.log(error);
        }
       };
//SINGL SWAP TOKEN
 const singleSwapToken=async({token1,token2,swapAmount})=>{
  //console.log(token1.tokenAddress.tokenAddress,token2.address.tokenAddress,swapAmount,swapAmount);
        try{
                let weth=await connectingwithIWETHTOKEN();
                let dai=await connectingwithDAITOKEN();
                let {contract:singleSwapToken,account,provider}=await connectingwithSingleSwapToken();
                const decimals0=18;
                const inputAmount=swapAmount;
                const amountIn = ethers.utils.parseEther(inputAmount.toString(),decimals0); // 1 ETH
               // console.log(amountIn)
                try {
                  const tx = await weth.deposit({
                      value: amount,
                      gasLimit: 5000000,
                  });
                  await tx.wait();
              } catch (error) {
                  console.error('Transaction Error:', error);
              }
                    const balanceWeth = await weth.balanceOf(account);
                    const balanceEth = await provider.getBalance(account);
                      if (balanceWeth.gte(amount)) {
                        console.log('Balance is sufficient');
                        
                        // Approve the full amount for the swap
                        const amountToAllow = amount; // Approve the full amount
                        const tx = await weth.approve(singleSwapToken.address, amountToAllow);
                        await tx.wait(); // Wait for the approval to complete
                    
                        // Check allowance
                        const allowance = await weth.allowance(account, singleSwapToken.address);
                        console.log('Allowance to String:', formatEther(allowance));
                    
                        // Proceed with swap if allowance is sufficient
                        if (allowance.gte(amount)) {
                          console.log('Allowance is sufficient');
                          try {
                            const txSwap = await singleSwapToken.swapExactInputString( token1.tokenAddress.tokenAddress,token2.address.tokenAddress,swapAmount,amountIn, // Amount to swap
                            { // Sending ETH
                                gasLimit: ethers.utils.hexlify(500000),
                            });
                            const receipt =await txSwap.wait(); // Wait for the swap to complete
                            console.log('Swap completed successfully');
                            console.log('sender',receipt.from);
                            console.log('receiver',receipt.to);
                            // Get the updated balances after swap
                    
                            // Fetch DAI balance after swap

                    
                            // Update DAI state
                            //setDAI(transfAmount);
                    
                          } catch (error) {
                            console.error('Swap failed:', error);
                          }
                        } else {
                          console.log('Allowance not sufficient');
                        }
                      } else {
                        console.log('Balance not sufficient');
                      }
                    
                   

      console.log('dai address  is ',dai);
     const balance=await dai.balanceOf(account);
      const transfAount=formatEther(balance);
      console.log('balanceOfDAI',transfAount);
     setDAI(transfAount);

                         const balanceWETH=await weth.balanceOf(account);
                         const balanceWeiformat=formatEther(balanceWETH);
                         console.log('balanceofWeth9',balanceWeiformat)
                         setWeth9(balanceWeiformat);
                        } catch (error) {
                          console.log('Error:', error);
                        }
            
         }
 

 console.log('DAI balance',DAI);
 console.log('WETH balance',Weth9);

      

return(
<SwapTokenContext.Provider value={{DAI,Weth9,createLiquidityAndPool,getAllLiquidity,account,networkConnect,getPrice,connectWallet,tokenData,singleSwapToken,topTokensList}}>{children}</SwapTokenContext.Provider>
)
}
