// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('Web3')
const {interface,bytecode} = require('./compile')

const provider = new HDWalletProvider(
    'trend draw sponsor shell slow caught sentence mechanic consider together spy gaze',
    'https://goerli.infura.io/v3/fd4cd7711532434f91fd4638a1764122'
)


const web3 = new Web3(provider)

const deploy = async() => {
    // fetching all accounts
    const fetchedAccounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy', fetchedAccounts[0])
    // deplyoying the contract
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode})
    .send({from: fetchedAccounts[0], gas:'1000000'})
    console.log(interface)
    console.log(result.options.address)
    provider.engine.stop()
}
deploy();