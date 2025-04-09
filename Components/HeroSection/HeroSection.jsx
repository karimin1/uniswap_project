'use client'
import React,{useState,useContext} from 'react';
import Image from 'next/image';
import images from '../../images'
import Style from './HeroSection.module.css'
import { Token,SearchToken } from '../ComponentIndex';
import { SwapTokenContext } from '../../Context/SwapContext';
//import { connectWallet } from '@/Utils/appFeatures';
const HeroSection=()=> {
    const {connectWallet,singleSwapToken,account,Weth9,DAI,tokenData,getPrice,swapUpdatePrice}=useContext(SwapTokenContext);
    const [openSetting,setOppenSetting]=useState(false)
    const [openToken,setOpenToken]=useState(false)
    const [openTokenTwo,setOpenTokenTwo]=useState(false) 
    const [tokenOne,setTokenOne]=useState({
        name:'',
        image:'',
        symbol:'',
        tokenBalance:'',
        tokenAddress:'',
    })
    const [tokenTwo,setTokenTwo]=useState({
        name:'',
        image:'',
        symbol:'',
        tokenBalance:'',
        tokenAddress:'',
    });
    const [tokenSwapOutPut,setokenSwapOutPut]=useState(0);
    const [poolMessage,setPoolMessage]=useState(``);
    const [search,setSearch]=useState(false);
    const [swapAmpunt,setswapAmpunt]=useState(0);
    const callOutPut=async(value)=>{
        const yourAccount='0xB8c77482e45F1F44dE1745F52C74426C631bDD52';
        const deadline=10;
        const slippageAmount=25;
        const data=await swapUpdatePrice(
        value,
        slippageAmount,
        deadline,
        yourAccount
    );
    console.log(data);
    setTokenSwapOutPut(data[1])
    setSearch(false);
    const poolAddress='0x60594a405d53811d3BC4766596EFD80fd545A270';
    const pooldata=await getPrice(value,poolAddress);
    const message    =`${value} ${poolData[2]}=${poolData[0]} ${poolData[1]}`;
    setPoolMessage(message);
} 
    return (
        <div className={Style.HeroSection}>
          <div className={Style.HeroSection_box}>
          <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>
          <div className={Style.HeroSection_box_heading_img}>
          <Image src={images.close} alt='image' 
            height={50}
            width={50}
            onClick={()=>setOppenSetting(true)}
          />
          
            <div className={Style.HeroSection_box_input} >
            <input placeholder='0' type='number'
                onChange={(e)=>(callOutPut(e.target.value),setswapAmpunt(e.target.value),setSearch(true))}
            />   
            <button onClick={()=>setOpenToken(true)}> 
            <Image src={images.image||images.etherlogo}
                height={20} width={20} alt='ether'
            />
            {tokenOne.symbol||'ETH'}
            <small>{tokenOne.tokenBalance.slice(0,7)}</small>
            </button>
            </div>
            <div className={Style.HeroSection_box_input} >
            {/* <input placeholder='0' type='text'/>  */}
            <p>
                {search?(
                    <Image src={images.loading||images.etherlogo}
                height={20} width={20} alt='ether'
            />):(tokenSwapOutPut)
                }
            </p>
            <button onClick={()=>setOpenTokenTwo(true)}> 
            <Image src={images.image||images.etherlogo}
                height={100} width={40} alt='ether'
            />
            {tokenTwo.symbol||'ETH'}
            <small>{tokenTwo.tokenBalance.slice(0,7)}</small>
            </button>
            </div>
            {search?(
                    <Image src={images.loading||images.etherlogo}
                height={20} width={40} alt='ether'
            />):({poolMessage})
                }
            </div>
            </div>
            {account?
                (
                <button 
                className={Style.HeroSection_box_btn} 
                onClick={()=>singleSwapToken({
                    token1:tokenOne,
                    token2:tokenOne,
                    swapAmpunt,
                })}>
            Swap </button>  
            ):(
                <button  onClick={()=>connectWallet()}
                className={Style.HeroSection_box_btn}>
            Connect Walle </button>  
            )}
            </div> 
             {openSetting && <Token setOppenSetting={setOppenSetting} setOpenToken={setOpenToken} tokenData={tokenData}/>}
             {openToken && <SearchToken setToken={setTokenOne}  setOpenToken={setOpenToken} tokenData={tokenData}/>}
             {openTokenTwo && <SearchToken  setToken={setTokenTwo} setOpenToken={setOpenTokenTwo} tokenData={tokenData}/>}

            
    
        </div>
    );
}

export default HeroSection;