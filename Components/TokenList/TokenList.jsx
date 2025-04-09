import React from 'react';
import images from '../../images'
import Image from 'next/image';
import Styles from './TokenList.module.css'
const TokenList=( {tokenData,setOpenTokenBox})=> {
  const data=[1,2,3,4,5,6,7];
    let tokenList=[];
    for(let i=0;tokenData.length>i;i++){
      if(i%2==1){tokenList.push(tokenData[i])}
    }
    return (
        <div className={Styles.TokenList}>
           <p className={Styles.TokenList_close}
           onClick={()=>setOpenTokenBox(false)}>
              <Image src={images.close} alt="close" width={50}
                height={50}
              /> 
              
           </p>
           {tokenList.map((el,i)=>(
            <div key={i+1} className={Styles.TokenList_box}>
            <div className={Styles.TokenList_box_info}>
            <p className={Styles.TokenList_box_info_symbol}>
            {el.name}
            </p>
            <p>
            <span>   {el.symbol}</span>{el.tokenBalance}
            </p>
            </div>
            </div>
           ))} 
           <div className={Styles.TokenList_title}> 
           <h2> Your Token List</h2>
           </div> 
        </div>
    );
}

export default TokenList;