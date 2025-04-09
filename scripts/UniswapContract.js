const {Contract,ContractFactory,utils,BigNumber}=require("ethers");
const WETH9=require("../Context/WETH9.json");
const { NonfungiblePositionManager, SwapRouter } = require("@uniswap/v3-sdk");

const artifacts={
    UniswapV3Factory:require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
    SwapRouter:require('@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json'),
    NFTDescriptor:require("@uniswap/v3-periphery/artifacts/contracts/libraries/NFTDescriptor.sol/NFTDescriptor.json"),
    NonfungibleTokenPositionDescriptor:require("@uniswap/v3-periphery/artifacts/contracts/NonfungibleTokenPositionDescriptor.sol/NonfungibleTokenPositionDescriptor.json"),
    NonfungiblePositionManager:require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
    WETH9,
}
const linkinLibraries=({bytecode,linkReference},libraries)=>{
    Object.keys(linkReference).forEach((fileName)=>{
        Object.keys(linkReference[fileName]).forEach((contractName)=>{
            if(!libraries.hasOwnProperty(contractName)){
                throw new Error(`Missing link library name ${contractName}`);
            }
            const address=utils.getAddress(libraries[contractName]).toLowerCase().slice(2);
            linkReference[fileName][contractName].forEach(({start,length})=>{
                const start2=2+start*2;
                const length2=length*2;
                bytecode=bytecode
                .slice(0,start2)
                .concat(address)
                .concat(bytecode.slice(start2+length2,bytecode.length));
            })

        })
    })
    return bytecode;
}
async function main(){
    const [owner]=await ethers.getSigner();
    weth=new ContractFactory(
        artifacts.WETH9.abi,
        artifacts.WETH9.bytecode,
        owner
    );
    weth=await Weth.deploy();
    Factory=new ContractFactory(
        artifacts.UniswapV3Factory.abi,
        artifacts.UniswapV3Factory.bytecode,
        owner
    );
    factory=await Factory.deploy();
    SwapRouter=new ContractFactory(
        artifacts.SwapRouter.abi,
        artifacts.SwapRouter.bytecode,
        owner
    );
    SwapRouter=await SwapRouter.deploy(factory.address,weth.address);
    NFTDescriptor=new ContractFactory(
        artifacts.NFTDescriptor.abi,
        artifacts.NFTDescriptor.bytecode,
        owner
    );
    nftDescriptor=await NFTDescriptor.deploy();
    const linkedBycode=linkinLibraries(
        {
            bytecode:artifacts.NonfungibleTokenPositionDescriptor.bytecode,
            linkReferences:{
                "NFTDescriptor.sol":{
                    NFTDescriptor:[
                        {
                            length:20,
                            start:1261,
                        },
                    ],
            },
        },
    },{
    NFTDescriptor:nftDescriptor.address,

    }
);

NonfungibleTokenPositionDescriptor=new ContractFactory(
    artifacts.NonfungibleTokenPositionDescriptor.abi,
    linkedBycode,
    owner
);
NonfungibleTokenPositionDescriptor=
await NonfungibleTokenPositionDescriptor.deploy(weth.address);
console.log(NonfungibleTokenPositionDescriptor);
NonfungiblePositionManager=new ContractFactory(
    artifacts.NonfungiblePositionManager.abi,
    artifacts.NonfungiblePositionManager.bytecode,
    owner
);
NonfungiblePositionManager=await NonfungiblePositionManager.deploy(
    factory.address,
    weth.address,
    NonfungibleTokenPositionDescriptor.address
);
console.log('wethAddress',`${weth.address}`);
console.log('factoryAddress',`${factory.address}`);
console.log('swapRouterAddress',`${swapRouter.address}`);
console.log('nftDescriptionAddress',`${nftDescriptor.address}`);
console.log('positionDesciptorAddress',`${nonfungibleTokenPositionDesciptor.address}`)
console.log('positionManagerAddress',`${nonfungiblePositionManager.address}`);
}
//npx hardhat run --network scripts/uniswapContract.js
main().then(()=>Exit(0)).catch((error)=>{
    console.log(error)
    process.exit(1);
})