import {ethers}from "ethers";
import Web3Modal from 'web3modal';
import { BooTokenAddress,
    BooTokenAbi,
    LifeTokenAddress,
    LifeTokenAbi,
    SingleSwapTokenAbi,
    SingleSwapTokenAddress,
    SwapMultiHopAbi,
    SwapMultiHopAddress,
    IWETHAbi,
    IWETHAddress,
    userStorageDataAddress,
    userStorageDataABI
 } from "../Context/Constant";
 //checkifWalletConnected
 export const checkIfWalletConnected=async()=>{
    try{
        if(!window.ethereum)return console.log('installer MetaMask');
        const accounts=await window.ethereum.request({
            method:"eth_accounts"}) 
            const firstAccount=accounts[0];
            return firstAccount;
    }catch(error){
        console.log(' error',error)
    }
 }
 //connectWallet wallet
 export const connectWallet=async()=>{
    try{
        if(!window.ethereum)return console.log('installer MetaMask');
        const accounts=await window.ethereum.request({
            method:"eth_requestAccounts"}) 
            const firstAccount=accounts[0];
            return firstAccount;
    }catch(error){
        console.log(' error',error)
    }
 }
 //FETCHINK CONTRACT-----------------------------------------
//IDAITOKEN FETCHING 0xcF8d0c70c850859266f5C338b38F9D663181C314
const IDAIAdrress="0x6B175474E89094C44Da98b954EedeAC495271d0F";
export const fetshuserStorageContract=(signerOrProvider)=>{
    if (!signerOrProvider){
        throw new  Error('signerOrProvider is required');
    } 
    return new ethers.Contract( userStorageDataAddress,
        userStorageDataABI,signerOrProvider)}

export const  connectingWithUserStorageContract=async()=>{
try{
    const web3modal=new Web3Modal();
    const connection=await web3modal.connect();
    const provider=new ethers.providers.Web3Provider(connection);
    const signer=provider.getSigner();
    const contract=fetshuserStorageContract(signer);
    return contract;
}catch(error){
    console.log(error);
}    
}  

 //IWETH FETCHING
 export const fetchIWETH=(signerOrProvider)=>{
    if (!signerOrProvider){
        throw new  Error('signerOrProvider is required');
    } 
    const IWETHAddresssum=ethers.utils.getAddress(IWETHAddress);
       return new ethers.Contract(IWETHAddresssum,IWETHAbi,signerOrProvider);
 }
export const connectingwithIWETHTOKEN=async()=>{

   try{
   
     const web3modal=new Web3Modal();

     const connection=await web3modal.connect();
     const provider=new ethers.providers.Web3Provider(connection);
     const signer=provider.getSigner();

     const contract=fetchIWETH(signer);
          return contract;
 }catch(error){
     console.log(error);
}    
}  

  //SingleWapToken Fetching
  export const fetchSingleSwapContract=(signerOrProvider)=>{
    if (!signerOrProvider){
        throw new  Error('signerOrProvider is required');
      }
      return  new ethers.Contract(SingleSwapTokenAddress,SingleSwapTokenAbi,signerOrProvider)
    }
        export const connectingwithSingleSwapToken=async()=>{
  try{
      const web3modal=new Web3Modal();
      const connection=await web3modal.connect();
      const provider=new ethers.providers.Web3Provider(connection);
      const signer=provider.getSigner();
      const account=signer.getAddress();
      const contract=fetchSingleSwapContract(signer);
      return {contract,account,provider};
  }catch(error){
      console.log(error);
}    
}
 //LIFE tOKEN Fetching
 export const fetchLifeContract=(signerOrProvider)=>{
    if (!signerOrProvider){
        throw new  Error('signerOrProvider is required');
    } 
   return  new ethers.Contract(LifeTokenAddress,LifeTokenAbi,signerOrProvider);
 }
 export const connectingwithLifeToken=async()=>{
    try{
        const web3modal=new Web3Modal();
        const connection=await web3modal.connect();
        const provider=new ethers.providers.Web3Provider(connection);
        const signer=provider.getSigner();
        const contract=fetchLifeContract(signer);
        
    }catch(error){
        console.log(error);
}    
 }
 
 
 
 //BOO tOKEN Fetching
 export const fetchBooContract=(signerOrProvider)=>{
    if(!signerOrProvider){
        throw  new Error("signerORProvider is required");
    }
    return new ethers.Contract(BooTokenAddress,BooTokenAbi,signerOrProvider)
 
   };
      export const connectingWithBooToken=async()=>{
    try{
        const web3modal=new Web3Modal();
        const connection=await web3modal.connect();
        const provider=new ethers.providers.Web3Provider(connection);
        const signer=provider.getSigner();
        const contract=fetchBooContract(signer);
        return contract;
    }catch(error){
        console.log(error);
}    
      }
      //USER CONTRACT CONNECTION