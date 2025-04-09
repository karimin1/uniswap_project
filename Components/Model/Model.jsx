'use client'
import React,{useEffect,useContext} from 'react';
import Image from 'next/image';
import Style from './Model.module.css'
import images from '../../images'
import { ST } from 'next/dist/shared/lib/utils';
const Model=({setOpenModel,connectWalet}) =>{
    const walletMenu=['MetaMAsk','Coinbase','WalletConnect']
    
    return (
        
        <div className={Style.Model}>
        
            <div className={Style.Model_box}>
            
            <div className={Style.Model_box_heading}>
            <div>
            <p>Connect a wallet</p>
            </div>
            <div className={Style.Model_box_heading_img}>
            <Image src={images.close} alt='logo' width={50} heigh={50}
                onClick={()=>setOpenModel(false)}
            />
             
             </div>
             </div>
             <div className={Style.Model_box_wallet}>
            {walletMenu.map((el,i)=>(
                <p key={i+1} onClick={()=>connectWalet()}>{el}</p> 
            ))}

            </div>
            <p className={Style.Model_box_para}>
                By connecting a wallet you agree to uniswap labs<br/>  terms and consent to its privasy policy
            </p>
           
            </div>
        </div>
    );
}

export default Model;