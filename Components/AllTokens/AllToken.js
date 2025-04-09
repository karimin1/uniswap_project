import React from 'react';
import Image from 'next/image';
import Style from './AllToken.module.css';
import images from '../../images';
const AllToken=({allTokenList})=> {
    console.log('allTokenList',allTokenList);
        <div className={Style.AllToken}>
           <div className={Style.AllToken_box}>
           <div className={Style.AllToken_box_header}>
           <p className={Style.hide}>#</p>
           <p>Token name</p>
           <p>Price</p>
           <p className={Style.hide}>ValueLockedUSD</p>
           <p className={Style.hide}>
            Tx Count{""}
            <small>
            <Image src={images.question} alt='img' 
                width={15} height={15} />
            </small>{""}
           </p>
           <p className={Style.hide}>
           <small>
           <Image src={images.arrowPrice} alt='img' 
           width={15}  heigh={15} /></small>{''}
           TOTAL Supply{""}
           <small>
           <Image  src={images.question} alt='img' width={15} heigh={15} />
           </small>
           {""}</p>
            </div>
            {console.log('allTokenList is',allTokenList)} 
        {allTokenList.map((el,i)=>(
            <div key={i} className={Style.AllToken_box_list}>
             <p className={Style.hide}>{el.number}</p>
             <p className={Style.AllToken_box_list_para}>
             <small>
             <Image src={image.uniswap} alt='logo' width={25} height={25}/>
             </small>
             <small>{el.name}</small>
             <small>{el.symbol}</small>
             </p>
             <p>{el.volumeUSD.slice(0,9)}</p>
             <p className={Style.hide}>{el.totalValueLockedUSD.slice(0,9)} </p>
             <p className={Style.hide}>{el.txCount.slice(0,9)} </p>
             <p className={Style.hide}>{el.totalSupply.slice(0,9)} </p>
             </div>
        ))}
        </div> 
        </div>
    
}

export default AllToken;