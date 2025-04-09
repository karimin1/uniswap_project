import React from 'react';
import images from '../../images'
import Image from 'next/image'
import Style from './PoolConnect.module.css'
const PoolConnect=({getAllLiquidity,setclosePool}) =>{
  console.log(getAllLiquidity)
  let tokenList=[];
  for(let i=0;getAllLiquidity.length>i;i++){
    if(i%2==1){tokenList.push(getAllLiquidity[i])}
    return (
        <div class={Style.PoolConnect}>
          <div class={Style.PoolConnect_box}>
              <div class={Style.PoolConnect_box_header}>
                <h2>Pool</h2>
                <p onClick={()=>setclosePool(true)}>+ New Position</p>
              </div>
              {!account?  (
                <div className={Style.PoolConnect_box_Middle}>
                <Image src={images.wallet} alt='wallet' 
                heigh={80} width={80}/>
                <p>Your active V3 position well appear here</p>
                <button>Connect Wallet</button>
              </div>
              ):(
                <div className={Style.PoolConnect_box_liquidity}>
                <div className={Style.PoolConnect_box_liquidity_header}>
                <p>ur Position{tokenList.length}</p>
                </div>
                {tokenList.map((el,i)=>{
                  <div className={Style.PoolConnect_box_liquidity_box}>
                  <div className={Style.PoolConnect_box_liquidity_list}>
                  <p>
                  <small className={Style.mark}>
                  {el.poolExample.token0.name}
                  </small>{""}
                  <small className={Style.mark}>
                  {el.poolExample.token1.name}
                  </small>{""}
                  <span className={Style.paragraph,Style.hide}>
                  {el.poolExample.token0.name}/{el.poolExample.token1.name}
                  </span>{''}
                  <span className={Style.paragraph}>
                  {el.fee}
                  </span>{""}
                  </p>
                  <p className={Style.highlight}>In Range</p>
                   
                    <div className={Style.PoolConnect_box_liquidity_list_info}>
                    <p><small>Min:0.999</small> 
                    <span>
                    {el.poolExample.token0.name}per{""} {el.poolExample.token1.name}
                    </span> 
                   {""} <span>---------------------</span>
                   <small>Max:1.000</small>{""}
                   <span className={Style.hide}>
                   {el.poolExample.token0.name}hide{""} {el.poolExample.token1.name}

                   </span>
                    </p>
                    </div> 
                  </div>
                })}
                 </div>
              )}
            
            <div className={Style.PoolConnect_box_info}>
              <div className={Style.PoolConnect_box_info_left}>
                <h5> Learn about providing liquidity</h5>
                <p>Check put our v3 LP walkthrough and migrate wuide</p>
              </div>
              
                <div className={Style.PoolConnect_box_info_right}>
                  <h5>Too pools</h5>
                  <p>Explore Uniswap Analytics</p>
                </div>
              </div>
            </div>
          </div>
  
    );
}

export default PoolConnect; 