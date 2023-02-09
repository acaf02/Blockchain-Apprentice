const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 =require('web3');
const { abi,evm} = require ('./compile');

const provider = new HDWalletProvider(
    'zebra lazy bind need burger glad result broccoli blast raccoon scale silly',
    'https://goerli.infura.io/v3/bc899563d2164c388cc500a45be843db'

);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts =await web3.eth.getAccounts();

    console.log('attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(abi)
    .deploy({data: evm.bytecode.object, arguments: ['Hi there!']})
    .send({gas: '1000000', from: accounts[0]});
    
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
}
deploy();