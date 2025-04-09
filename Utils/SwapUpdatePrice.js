// // import { AlphaRouter } from "@uniswap/smart-order-router";
// import { ethers, BigNumber } from "ethers";
// import { Token, CurrencyAmount, TradeType, Percent } from "@uniswap/sdk-core";

// const V3_SWAP_ROUTER_ADDRESS = "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45";
// const chainId = 1;

// const provider = new ethers.providers.JsonRpcProvider(
//     'https://eth-mainnet.g.alchemy.com/v2/Ig9Oj2DL0RWEZRqf1mB3Bq0OLyNABiwJ'
// );

// const router = new AlphaRouter({ chainId: chainId, provider: provider });
// console.log('AlphaRouter initialization skipped');
// console.log('router',router);
// const name0 = "Wrapped Ether";
// const symbol0 = 'WETH';
// const decimals0 = 18;
// const address0 = '0xC02aaa39b223FE8D0A0e5C4F27eAD9083C756Cc2'; // Fixed
// const name1 = "DAI";
// const symbol1 = 'DAI';
// const decimals1 = 18;
// const address1 = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

// const WETH = new Token(chainId, address0, decimals0, symbol0);
// const DAI = new Token(chainId, address1, decimals1, symbol1);

// export const swapUpdatePrice = async (
//     inputAmount,
//     slippageAmount,
//     deadline,
//     walletAddress
// ) => {


//     console.log("Input Amount:", inputAmount);
//     console.log("Slippage Amount:", slippageAmount);
//     console.log("Deadline:", deadline);
//     console.log("Wallet Address:", walletAddress);

//     const percentSlippage = new Percent(slippageAmount, 100);
//     const wei = ethers.utils.parseUnits(inputAmount.toString(), decimals0);
//     const currencyAmount = CurrencyAmount.fromRawAmount(WETH, BigNumber.from(wei));

//     const route = await router.route(currencyAmount, DAI, TradeType.ExactInput, {
//         recipient: walletAddress,
//         slippageTolerance: percentSlippage,
//         deadline: deadline,
//     });



//     console.log("Route Found:", route);

//     const transaction = {
//         data: route.methodParameters.calldata,
//         to: V3_SWAP_ROUTER_ADDRESS,
//         value: route.methodParameters.value ? BigNumber.from(route.methodParameters.value) : BigNumber.from(0),
//         from: walletAddress,
//         gasPrice: route.gasPriceWei ? BigNumber.from(route.gasPriceWei) : BigNumber.from(0),
//         gasLimit: ethers.utils.hexlify(1000000),
//     };

//     const quoteAmountOut = route.quote.toFixed(6);
//     const ratio = (inputAmount / quoteAmountOut).toFixed(3);






//     console.log("Quote Amount Out:", quoteAmountOut);
//     console.log("Ratio:", ratio);

//     return [transaction, quoteAmountOut, ratio];
// };
