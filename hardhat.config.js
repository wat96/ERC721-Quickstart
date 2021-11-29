/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-ethers");

 const SOL_VERSION = "0.8.3"

 // Setup hardhat network config
 const MAIN_NET_NODE_URL = null
 let HARDHAT_NET_CONFIG = {}
 if (MAIN_NET_NODE_URL) {
     HARDHAT_NET_CONFIG = {
         chainId: 1,
         forking: {
             url: MAIN_NET_NODE_URL
         }
     }
 }

 module.exports = {
    solidity: SOL_VERSION,
    networks: {
        hardhat: HARDHAT_NET_CONFIG
    }
 };
