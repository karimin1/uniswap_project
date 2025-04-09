'use client'
import React,{useState,useEffect} from 'react';
import Image from "next/image";
//INTERNAL IMPORT
import images from '../../images';
import Style from './PoolAdd.module.css';
import {Token,SearchToken} from '../ComponentIndex'

const PoolAdd=({setclosePool,tokenData,createLiquidityAndPool}) =>{
    const [openModel,setOpenModel]=useState(false);
    const [openTokenModelOne,setOpenTokenModelOne]=useState(false);
    const [openTokenModelTwo,setOpenTokenModelTwo]=useState(false);

    const [active,setActive]=useState(1);
    const [openFee,setOpenFee]=useState(false);
    const [minPrice,setMinPrice]=useState(0);
    const [maxPrice,setMaxPrice]=useState(0)
    const [fee,setFee]=useState(0);
    const [slippage,setSlippage]=useState(25);
    const [dealine,setDealine]=useState(10);
    const [AmountOne,settokenAmountOne]=useState(0);
    const [tokenAmountTwo,setTokenAmountTwo]=useState(0);
    const feePairs=[
        {
            fee:'0.05%',
            info:'Best for stable pair',
            number:'0% Select',
            feeSystem:500
        },
        {
            fee:'0.3%',
            info:'Best for stable pairs',
            number:'0% Select',
            feeSystem:3000
        },
        {
           fee:'1%',
            info:'0%',
            number:'0% Select', 
            feeSystem:1000
        },
    ];
    // const minPriceRange=(text)=>{
    //     if(text=='+'){
    //         setMinPrice(minPrice+1);
    //     }else if(text=='-'){
    //         setMinPrice(minPrice-1);
    //     }
    // }
    // const maxPriceRange=(text)=>{
    //     if (text=='+'){
    //         setMaxPrice(maxPrice+1)
    //     }else if (text=='-'){
    //         setMaxPrice(maxPrice-1);
    //     }
    // }
    return (
        <div className={Style.PoolAdd}>
         <div className={Style.PoolAdd_box}>
                <div className={Style.PoolAdd_box_header}>
                    <div className={Style.PoolAdd_box_header_left}>
                    <Image onClick={()=>setClosePool(false)}src={images.arrowLeft} alt='image' width={30} height={30}/>
                    </div>
                    <div className={Style.PoolAdd_box_header_middle}>
                    <p>Add Liquidity</p>
                    </div>
                    <div className={Style.PoolAdd_box_header_right}>
                    <p>{ TokenOne.name||""}{tokenOne.tokenBalance.slice(0,9)||""}</p>
                    {''}
                    {""}
                    <p>{ TokenTwo.name||""}{tokenOne.tokenBalance.slice(0,9)||""}</p>
                    <Image src={images.close} alt="image" width={50} height={50}
                    onClick={()=>setOpenModel(true)}/>
                    </div>
                </div>
            {/* /*SELECT PRICE RANGE*/}
            <div className={Style.PoolAdd_box_price}>
                    <div className={Style.PoolAdd_box_price_left}>
                        <h4>Select Pair</h4>
                        <div className={Style.PoolAdd_box_price_left_token}>
                        
                            <div className={Style.PoolAdd_box_price_left_info}>
                                <div className={Style.PoolAdd_box_price_left_token_info } onClick={()=>setOpenTokenModelOne(true)}>
                                    <p>
                                    <Image src={images.etherlogo} alt='image' width={20} height={20}/>
                                    </p>
                                    <p> {tokenOne.name||'ETH'}</p>
                                    <p> ? </p>
                                </div>
                            </div>
                            <div className={Style.PoolAdd_box_price_left_token_info}
                               >
                                <p>
                                <Image src={images.etherlogo} alt='image' width={20}
                                    height={20}
                                />  
                                </p>
                                <p>{tokenTwo.name||'SELECT'}</p>
                                <p>?</p>
                            </div>
                        </div>
                        
                        <div className={Style.PoolAdd_box_price_left}>
                            <div className={Style.PoolAdd_box_price_left_fee} >
                                <h4>Fee teir</h4>
                                <p>the % you will earn in fees</p>
                           
                            {openFee ?(
                                <button onClick={()=>setOpenFee(false)}>Hide</button>
                            ):(
                                <button onClick={()=>setOpenFee(true)}>Show</button>
                            )
                            }
                            </div>
                            {openFee && (
                            <div className={Style.PoolAdd_box_price_left_list}> 
                                {feePairs.map((el,i)=>(
                                    <div  className={Style.PoolAdd_box_price_left_list_item}
                                        key={i+1} onClick={()=>(setActive(i+1),setFee(el.feeSystem))}>
                                        <div className={Style.PoolAdd_box_price_left_list}>
                                            <p>{el.fee}</p>
                                            <p>{active==i+1?(
                                                <Image className={images.tick} alt='image'
                                                width={20} heigh={20}/>):('')}</p>
                                        </div>
                                        <small>{el.info}</small>
                                        <p className={Style.PoolAdd_box_price_left_list_item_para}>
                                            {el.number}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            )}
                        </div>
                    
                        
                {/* DEPOSIT AMOUNT */}
                        <div className={Style.PoolAdd_box_deposit}>
                            <h4> Deposit Amount</h4>
                            <div className={Style.PoolAdd_box_deposit_box}>
                                <input type="number" placeholder={tokenOne.tokenBalance.slice(0,9)}
                                onChange={(e)=>settokenAmountOne(e.target.value)}/>
                                <div className={Style.PoolAdd_box_deposit_box_input}>
                                        <p>
                                        <small>{TokenOne.name||'ETH'}</small>{''}{''}{tokenOne.symbol()||""}
                                     <small>{tokenOne.symbol|| 'select'}</small>{''}{''}  
                                        </p>
                                      
                                </div>
                            </div>
                            <div className={Style.PoolAdd_box_deposit_box}>
                                <input type="number" placeholder={tokentwo.tokenBalance.slice(0,9)}
                                onChange={(e)=>settokenAmountTwo(e.target.value)}/>/>

                                <div className={Style.PoolAdd_box_deposit_box_input}>
                                     <p>
                                        <small>{TokenTwo.name||'ETH'}</small>{''}{''}{tokenTwo.symbol()||""}
                                     <small>{tokenwo.symbol|| 'select'}</small>{''}{''}  
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className={Style.PoolAdd_box_price_right}>
                    <h4>Set Price Range</h4>
                    <div className={Style.PoolAdd_box_price_right_box}>
                    <p className={Style.PoolAdd_box_price_right_box_para}>
                        Current Price:41.1494 Testv4 {tokenOne.name||"ETH"}per {""}
                        {tokenTwo.name|| "select"}
                    </p>
                    <Image src={images.wallet} alt='wallet' height={88} width={88}/>
                    <h3>Your position will appear here</h3>
                    </div>
                <div className={Style.PoolAdd_box_price_right_range}>
                    <div className={Style.PoolAdd_box_price_right_range_box}>
                            <p>Min Price </p>
                            <input type='number' placeholder='0.0000' min='0.000'
                            step='0.001' classNAme={Style.PoolAdd_box_price_right_range_box_para}
                            onChange={(e)=>setMaxPrice( e.target.value)}/>

                            <p>{tokenOne.name||"ETH"}per {tokenOne.name||"select"}</p>
                    </div>
                {/*MAX*/}
                
                <div className={Style.PoolAdd_box_price_right_range_box}>
                        <p>Max PriceT</p>
                        <p className={Style.PoolAdd_box_price_right_range_box_para}
                        onClick={(e)=>{maxPriceRange(e.target.innerText)}}>
                            <small>-</small>{maxPrice}<small>+</small>
                            </p>
                           <p>{tokenTwo.name||"ETH"}per {tokenTwo.name||"select"}</p>
                    </div>
                </div>
                {/*Button*/} 
                
                <div className={Style.PoolAdd_box_price_right_button}>
                <button onClick={()=>createLiquidityAndPool(
                    {
                        tokenAmount0:tokenOne.tokenAddress.tokenAddress,
                        tokenAmount1:tokenTwo.tokenAddress.tokenAddress,
                        fee:fee,
                        tokenPrice1:minPrice,
                        tokenPrice2:maxrice,
                        slippage:slippage,
                        deadline:deadline,
                        tokenAmountOne:tokenAmountOne,
                        tokenAmountTwo:tokenAmountTwo
                    
                    }
                )}> Add liquidity</button>
                </div>
                <div className={Style.PoolAdd_box_price_right_amount}>
                <button>Enter a amount</button>
                    </div>
                </div>
            </div>
        

            {openModel && (
            <div className={Style.token}>
            <Token 
            setOppenSetting={setOpenModel}
            setSlippage={setSlippage} 
            slippage={slippage}
                deadline={deadline}
                setDeadline={setDeadline}
            />
            </div>
            )}
            {openTokenModelOne && (
                <div className={Style.token}>
                <SearchToken tokenData={tokenData} setOpenToken={setOpenTokenModelOne}
                    tokens={setTokenOne}
                />
            </div>
            )}
            {openTokenModelTwo && (
                <div className={Style.token}>
                <SearchToken tokenData={tokenData} setOpenToken={setOpenTokenModelTwo}
                    tokens={setTokenTwo}
                />
            </div>
            )}
         </div>
</div>
)}
export default PoolAdd;