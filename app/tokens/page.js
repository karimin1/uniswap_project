'use client'
import React,{ useEffect, useState,useContext } from "react";
import Image from "next/image";
import images from '../../images';
import Style from '../../styles/Tokens.module.css';
import AllToken from "../../Components/AllTokens/AllToken";
import { SwapTokenContext } from "../../Context/SwapContext"
 const Tokens=()=>{
const [AllTokenList,setAllTokenList]=useState([
{number:1,
image:images.etherlogo,
name:'ether',
symbol:'eth',
price:"$12,35",
change:'+234,5',
tv:'$7894.5M',
volume:'$716.5 M'
},{number:2,
    image:images.etherlogo,
    name:'USDC Coin',
    symbol:'USDC ',
    price:"$12,35",
    change:'+234,5',
    tv:'$7894.5M',
    volume:'$716.5 M'
    },
    {number:3,
        image:images.etherlogo,
        name:'Wrapped BTC',
        symbol:'WBTC ',
        price:"$12,35",
        change:'+234,5',
        tv:'$7894.5M',
        volume:'$716.5 M'
        },
        {number:4,
            image:images.etherlogo,
            name:'Uniswap',
            symbol:'UNI ',
            price:"$12,35",
            change:'+234,5',
            tv:'$7894.5M',
            volume:'$716.5 M'
            },
]);
const {topTokensList}=useContext(SwapTokenContext);
const [copyAllTokenList,setCopyAllTokenList]=useState(AllTokenList);
const [search,setSearch]=useState('');
const [searchItem,setSearchItem]=useState(search);
const onHandleSearch=(value)=>{
const filteredTokens =AllTokenList.filter(({name})=>
name.toLowerCase().includes(value.toLowerCase())
);
if (filteredTokens.length===0){
    setAllTokenList(copyAllTokenList);
}else{
    setAllTokenList(filteredTokens);
}
}
const onClearSearch=()=>{
    if (AllTokenList.length && copyAllTokenList.length){
    setAllTokenList(copyAllTokenList);
}
};
useEffect(()=>{
    const timer=setTimeout(()=>setSearch(searchItem),1000);
    return ()=>clearTimeout(timer);
},[searchItem]);
useEffect(()=>{
    if(search){
        onHandleSearch(search);
    }else{
        onClearSearch();
    }
},[search])
return(
    <div className={Style.Token}>
        <div className={Style.Token_box}>
            <h2>Top tokens on Uniswap</h2>
            <div className={Style.Token_box_header}>
                <div className={Style.Token_box_eth}>
                    <p>
                        <Image src={images.ether} 
                        alt='ether'
                        width={20} heigh={50} />
                    </p>
                    <p>ethereum</p>
                </div>
                <div className={Style.Token_box_search}>
                  <p>
                    <Image src={images.search} alt='image' width={20} heigh={20}/>
                    </p>
                    <input type='text'
                    polaceholder='Filter tokens' 
                    onChange={(e)=>setSearchItem(e.target.value)}
                        value={searchItem}
                    />
              
            
                </div>
               
            </div>
            <AllToken topTokensList={topTokensList} allTokenList={AllTokenList} /> 
         
        </div>
    </div>
);
};
export default Tokens;