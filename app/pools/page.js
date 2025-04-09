import React, { useContext ,useState} from 'react';
//import Image from "next/image";
import Style from '../../styles/Pool.module.css'
import { PoolAdd,PoolConnect } from "../../Components/ComponentIndex";
import  {SwapTokenContext} from '../../Context/SwapContext'
import images from "../../images";
const Pool =()=>{
    const {account,createLiquidityAndPool,tokenData,getAllLiquidity}=useContext(SwapTokenContext);
    const [closePool,seClosePool]=useState(false);
    return(
<div className={Style.Pool}>
{closePool?(<PoolAdd  
 account={account}  
 setclosePool={seClosePool}
 tokenData={tokenData}
 />

):( <PoolConnect  
setclosePool={seClosePool}
    getAllLiquidity={getAllLiquidity}
    account={account}
/>)
 }
</div>
    )
}
export default Pool;