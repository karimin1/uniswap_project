'use client'
import React,{useState,useEffect} from 'react';
import Style from './SearchToken.module.css'
import images from '../../images'
import Image from 'next/image'
import { BooTokenAddress } from '@/Context/Constant';
const SearchToken=({setOpenToken,setToken,tokenData})=>{ 
const [active,setActive]=useState()
// const coin=[{img:images.ether,
//             name:'FTH',
//             },
//             {img:images.ether,
//              name:'UNI',
//             },
//             {img:images.ether,
//              name:'SHIBA',
//             },
//             {img:images.ether,
//                 name:'BTC',
//             },
//             {img:images.ether,
//             name:'USDT',
//             },
//             {img:images.ether,
//             name:'LTC',
//             },
//         ]
let tokenList=[];
    for(let i=0;tokenData.length>i;i++){
      if(i%2==1){tokenList.push(tokenData[i])}
    }
return (
        <div className={Style.SearchToken}>
        <div className={Style.SearchToken_box}>
        <div className={Style.SearchToken_box_heading}>
        <h4>Select a token </h4> 
        <Image src={images.close} alt='close' width={50}
            height={50} onClick={()=>setOpenToken(false)}
        /> 
        </div> 
          <div className={Style.SearchToken_box_search}> 
          <div className={Style.SearchToken_box_search_img}>
          <Image src={images.search} alt='img' width={50}
            height={50}
          />
          </div> 
          <input placeholder='Search name and past the address' type='text'/> 
            </div> 
            <div className={Style.SearchToken_box_token}>
            {tokenList.map((el,i)=>(
                
                <span key={i+1} className={active==i+1?`${Style.active}`:''} onClick={()=>(setActive(i+1),setToken({
                    img:el.img,
                    name:el.name,
                    symbol:el.symbol,
                    tokenBalance:el.tokenBalance,
                    tokenAddress:el,

                    }))}>
                <Image src={el.img||images.ether} alt='image' width={30} height={30}/>    
                {el.symbol}
                </span> 
               
                
            ))}

            </div>  
        </div>
        </div>
        
    );

}
export default SearchToken;