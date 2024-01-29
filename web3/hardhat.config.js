require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */

/**
 https://support.thirdweb.com/troubleshooting-errors/7Y1BqKNvtLdBv5fZkRZZB3/error-unauthorized---you-dont-have-permission-to-use-this-service/nE1AW4K5FNVrxza6iFDy9t
 */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
   hardhat: {},
   sepolia:{ 
    url: 'https://rpc.ankr.com/eth_sepolia',
    account: [`0x${process.env.PRIVATE_KEY}`]   }
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    defaultNetwork: 'sepolia',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
