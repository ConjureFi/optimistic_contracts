require("@nomiclabs/hardhat-waffle");
require('hardhat-contract-sizer');
require("@nomiclabs/hardhat-etherscan");
require('@eth-optimism/hardhat-ovm')
require("solidity-coverage");
require('dotenv').config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

  defaultNetwork: "hardhat",
  networks: {
      optimistic: {
          url: 'https://kovan.optimism.io', // this is the default port
          accounts: [''],
          //gasPrice: 15000000, // required
          ovm: true, // required,
          gasPrice: 15000000

      },
    hardhat: {
	}
  },
    etherscan: {
        apiKey: ''
  },
    ovm: {
        solcVersion: '0.7.6+commit.3b061308',
    },

  solidity: {
    compilers: [

        {
            version: "0.5.16",
            settings: { }
        },
        {
            version: "0.7.6",
            settings: { }
        },
        {
            version: "0.6.5",
            settings: { }
        },
    ]
  }
};
