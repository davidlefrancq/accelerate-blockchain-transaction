import 'dotenv/config'
import { ethers, Wallet, Contract, providers } from 'ethers'
const {
  RPC,
  WALLET_PRIVATE_KEY,
} = process.env
const abi = JSON.parse(`[{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"add","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"simpleNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"substract","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]`)
const contractAddress = `0x4566dA27761361755B0f5e8D8541194B7a02D4ba`
const maxFeePerGas = ethers.utils.parseUnits('1', 'gwei')
const maxPriorityFeePerGas = ethers.utils.parseUnits('1', 'gwei')

const createTxPending = () => {
  const provider = new providers.JsonRpcProvider(RPC)
  const wallet = new Wallet(WALLET_PRIVATE_KEY, provider)
  const contract = new Contract(contractAddress,abi,wallet)
  contract.add(1,{
    maxFeePerGas,
    maxPriorityFeePerGas,
  }).then((tx)=>{
    console.log('hash : ', tx.hash)
  }).catch((error)=>{
    console.error(error)
  })
}

/**
 * Execute function create transaction in pending
 */
createTxPending()