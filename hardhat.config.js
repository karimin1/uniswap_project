require("@nomicfoundation/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [

      { version: "0.7.6" }
    ]
  },
        settings: {
          optimizer: {
            enabled: true,
            runs: 5000,
          
        }
      },
  
  networks: {
  
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/Ig9Oj2DL0RWEZRqf1mB3Bq0OLyNABiwJ",  
        accounts:[
          `0x${"ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"}`,

        ],
      },
  },
},
};
