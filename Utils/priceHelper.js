// const axios=require('axios');
// const ETHERSCAN_APY_KEY='W1QRCUZE66F3XYNWIJUHFUM7SV7J8Y2CT9';
// exports.getAbi=async(address)=>{
//     const url=`https://api.etherscan.io/api?
//      &module=contract
//      &action=getabi
//      &address=${address}
//     t&apikey=${ETHERSCAN_APY_KEY}`;
//     const res=await axios.get(url);
//     const abi=JSON.parse(res.data.result);
//     return abi;
// }
// exports.getPoolImmutables=async(poolContract)=>{
//     const[token0,token1,fee]=await Promise.all([
//         poolContract.token0(),
//         poolContract.token1(),
//         poolContract.fee()
//     ])
//     const immutables={
//         token0:token0,
//         token1:token1,
//         fee:fee,
//     }
//     return immutables;
// }
