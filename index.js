import 'dotenv/config'
import { ethers, Wallet, providers } from 'ethers'

const {
  RPC,
  WALLET_PRIVATE_KEY,
  HASH_TRANSACTION,
  MAX_FEE_PER_GAS_IN_GWEI,
  MAX_PRIORITY_FEE_PER_GAS_IN_GWEI
} = process.env

const maxFeePerGas = ethers.utils.parseUnits(MAX_FEE_PER_GAS_IN_GWEI, 'gwei')
const maxPriorityFeePerGas = ethers.utils.parseUnits(MAX_PRIORITY_FEE_PER_GAS_IN_GWEI, 'gwei')
const provider = new providers.JsonRpcProvider(RPC)
const wallet = new Wallet(WALLET_PRIVATE_KEY, provider)

const txData = await provider.getTransaction(HASH_TRANSACTION)

const tx = {
  type: 2,
  maxFeePerGas,
  maxPriorityFeePerGas,
  from: txData.from,
  to: txData.to,
  value: txData.value,
  data: txData.data,
  chainId: txData.chainId,
  nonce: txData.nonce,
  gasLimit: txData.gasLimit,
}

try{
  const signedTx = await wallet.signTransaction(tx)
  const newTx = await provider.sendTransaction(signedTx)
  console.log(newTx)
} catch (e) {
  console.error(e)
}