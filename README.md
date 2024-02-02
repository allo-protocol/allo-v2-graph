# Allo-V2 Graph

https://thegraph.com/docs/en/deploying/deploying-a-subgraph-to-hosted/#using-graph-cli

**Supported Networks**

| Network         | Playground | API Endpoint |
|-----------------|------------|--------------|
| mainnet         | [🔗](https://thegraph.com/explorer/subgraph/allo-protocol/allo-v2-mainnet) | [🔗](https://api.thegraph.com/subgraphs/name/allo-protocol/allo-v2-mainnet) |
| goerli          | [🔗](https://thegraph.com/explorer/subgraph/allo-protocol/allo-v2-goerli) | [🔗](https://api.thegraph.com/subgraphs/name/allo-protocol/allo-v2-goerli) |
| optimism        | [🔗](https://thegraph.com/explorer/subgraph/allo-protocol/allo-v2-optimism) | [🔗](https://api.thegraph.com/subgraphs/name/allo-protocol/allo-v2-optimism) |
| base            | [🔗](https://thegraph.com/explorer/subgraph/allo-protocol/allo-v2-base) | [🔗](https://api.thegraph.com/subgraphs/name/allo-protocol/allo-v2-base) |
| arbitrum        | [🔗](https://thegraph.com/explorer/subgraph/allo-protocol/allo-v2-arbitrum) | [🔗](https://api.thegraph.com/subgraphs/name/allo-protocol/allo-v2-arbitrum) |
| pgn             | [🔗](todo) | [🔗](todo) |
| polygon         | [🔗](https://thegraph.com/explorer/subgraph/allo-protocol/allo-v2-polygon) | [🔗](https://api.thegraph.com/subgraphs/name/allo-protocol/allo-v2-polygon) |
| celo            | [🔗](https://thegraph.com/explorer/subgraph/allo-protocol/allo-v2-celo) | [🔗](https://api.thegraph.com/subgraphs/name/allo-protocol/allo-v2-celo) |
| zksync-era      | [🔗](https://thegraph.com/explorer/subgraph/allo-protocol/allo-v2-zksync-era) | [🔗](https://api.thegraph.com/subgraphs/name/allo-protocol/allo-v2-zksync-era) |
| sepolia        | [🔗](https://thegraph.com/explorer/subgraph/allo-protocol/allo-v2-sepolia) | [🔗](https://api.thegraph.com/subgraphs/name/allo-protocol/allo-v2-sepolia) |

**Supported Test Networks**

| Network         | Playground | API Endpoint |
|-----------------|------------|--------------|
| arbitrum-sepolia| [🔗](https://thegraph.com/explorer/subgraph/allo-protocol/allo-v2-arbitrum-sepolia) | [🔗](https://api.thegraph.com/subgraphs/name/allo-protocol/allo-v2-arbitrum-sepolia) |


## Deploy

> Run codegen
```shell
graph codegen
```

> Authenticate - incase of hosted service
```shell
graph auth --product hosted-service <YOUR_API_KEY>
```

> Authenticate - incase of studio
```shell
graph auth --studio <YOUR_API_KEY>
```

> Local or Custom Node Deployment
```shell
# Create the subgraph
# graph create allo-protocol/allo --node http://localhost:8020/
graph graph create <GITHUB_USER>/<SUBGRAPH_NAME> --node <NODE_URL>

# Deploy the subgraph
# graph deploy  --node http://localhost:8020/ --ipfs http://localhost:5001/  gitcoin/allo ./subgraph.yaml
graph deploy  --node <NODE_URL> --ipfs <IPFS_URL>  <GITHUB_USER>/<SUBGRAPH_NAME> ./subgraph.yaml
```

> Deploy Subgraph - incase of hosted service
```shell
graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME>
```

> Deploy Subgraph - incase of studio
```shell
graph deploy --studio <SUBGRAPH_NAME>
```

Note: If you find yourself wanting to run the entire flow in one command.
Use this example where we deploy the subgraph on goerli

```shell
# Hosted Service
rm -rf generated && rm -rf build && rm -rf subgraph.yaml &&
    yarn run prepare:goerli &&
    graph codegen &&
    graph auth --product hosted-service <YOUR_API_KEY> &&
    graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME>

# Studio
rm -rf generated && rm -rf build && rm -rf subgraph.yaml &&
    yarn run prepare:goerli &&
    graph codegen &&
    graph auth --product studio <YOUR_API_KEY> &&
    graph deploy --product studio <SUBGRAPH_NAME>
```