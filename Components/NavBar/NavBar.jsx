'use client'
import React,{useState,useEffect,useContext} from 'react';
import images from '../../images'
import Style from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link';
import {Model,TokenList}from '../../Components/ComponentIndex'
import { SwapTokenContext } from '@/Context/SwapContext';
const NavBar=() =>{
    const {ether,account,networkConnect,connectWallet,tokenData}=useContext(SwapTokenContext)
    const menuItem=[
        {name:'Swap',
            link:'/',
        },
        {name:'tokens',
            link:'/',
        },
        {name:'pools',
            link:'/',
        },
    ]
    const [openModel,setOpenModel]=useState(false)
   const [openTokenBox,setOpenTokenBox]=useState(false)
    return (
        <div className={Style.NavBar}>
             <div className={Style.NavBar_box}>
                <div className={Style.NavBar_box_left}>
                    <div className={Style.NavBar_box_left_img}>
                    <Image src={images.uniswap} alt='logo' width={50} height={50}/>
                    </div>
                    <div className={Style.NavBar_box_left_menu}>
                    {menuItem.map((el,i)=>(
                        <Link key={i+1} href={{pathname:el.name}}>
                       {console.log('name',el.name,'link',el.name)}

                         <p className={Style.NavBar_box_left_menu_item}>{el.name} </p>
                        </Link>
                        ))}
                    </div>
                </div>
                <div className={Style.NavBar_box_middle}>
                    <div className={Style.NavBar_box_middle_search}>
                    <div className={Style.NavBar_box_middle_search_img}>
                    <Image src={images.search} alt='search' width={20} height={50}/>
                    </div>
                    <input placeholder='search' type='text tokens' />
                    </div>
                 </div>
                <div className={Style.NavBar_box_right}>
                    <div className={Style.NavBar_box_right_box}>
                        <div className={Style.NavBar_box_right_box_img}>
                       <Image src={images.ether} alt='Network' wodth={50} height={50}/>
                       </div>
                       <div>
                       <p onClick={()=>{setOpenTokenBox(true)}}>{networkConnect}</p>
                       </div>
                       </div>
                       
                       {account?(<button onClick={()=>{setOpenTokenBox(true)}}>{account}</button>
                    ):(<button onClick={()=>{setOpenModel(true)}}>Connect</button> )
                    }
                        {openModel && (
                            <Model 
                            setOpenModel={setOpenModel} 
                            connectWalet={connectWallet}

                            />)
                        }
                       
            {openTokenBox &&(
                <TokenList
                 tokenData={tokenData}      setOpenTokenBox={setOpenTokenBox}/>
            )}
           
        </div>
        </div>
        </div>
      
    );

}

export default NavBar;