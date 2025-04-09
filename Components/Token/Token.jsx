'use client'
import React,{useState,useContext} from 'react';
import Style from './Token.module.css'
import images from '../../images'
import Image from 'next/image'
import {Toggle } from '../ComponentIndex'
const  Token=({topTokensList,setOppenSetting,setOpenToken,setSlippage,slippage,deadline})=> {
    return (
        <div className={Style.Token}>
             <div className={Style.Token_box}>
             <div className={Style.Token_box_heading}>
             <h4>Setting</h4>
             <Image src={images.close}
             alt='close'
             width={50}
             height={50}
             onClick={()=>(setOppenSetting(false),setOpenToken(false))}/>
             </div>
        <p className={Style.Token_box_para}>
        Slippage tolerance{""}
        <Image src={images.lock} alt='img' width={20}
            height={20}
        />
         </p>
         <div className={Style.Token_box_input}>
         <button>Auto</button>
         <input type='text' placeholder={slippage}
          onChange={(e)=>setSlippage(e.target.value)}/>
          </div>
          <p className={Style.Token_box_para}>
       Deatline Time{""}
        <Image src={images.lock} alt='img' width={20}
            height={20}
        /> </p>     
        <div className={Style.Token_box_input}>
         <input type='text' placeholder={deadline}
            onChange={(e)=>setDeadline(e.target.value)}
         />
         <button>minutes</button>
          </div>

          <div className={Style.Token_box_toggle}>
          <p className={Style.Token_box_para}>
            Transaction deadline
          </p>
          <Toggle label='NO'/>
          </div>
             </div>
        </div>
    );
}

export default Token;