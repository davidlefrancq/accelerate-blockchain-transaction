1) Duplicate `.env.sample` and rename to `.env`
2) Set `RPC` with JSON RPC Url
3) Set `WALLET_PRIVATE_KEY` with your wallet private key without `0x` characters
4) Set `HASH_TRANSACTION`
5) Set `MAX_FEE_PER_GAS_IN_GWEI`, very important value in gwei when you think your transaction will pass
6) Set `MAX_PRIORITY_FEE_PER_GAS_IN_GWEI`, generaly is the same of `MAX_FEE_PER_GAS_IN_GWEI`

You can use a gas station for estimate max fee per gas or max priotity fee per gas. Exemple from polygon : [polygon-gas-station](https://docs.polygon.technology/docs/develop/tools/polygon-gas-station/)