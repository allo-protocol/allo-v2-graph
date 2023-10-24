# Allo Graph v2 Deployment Checklist

### 🔗 Supported chains to deploy 🔗
#### Run through the deploy checklist for each supported network.
- [ ] Ethereum Mainnet
- [ ] Optimism
- [ ] Base
- [ ] Arbitrum
- [ ] PGN
- [ ] Polygon
- [ ] ZKSync Era
- [ ] Celo

### 📝 Deployment Checklist 📝

#### 💎 Pre-Deploy Hard Requirements 💎

- [ ] All tests must pass.
- [ ] Make sure all the ABI files have been updated from the latest deployed contracts on respected network. 
- [ ] Make sure the `subgraph.template.yaml` has been updated with the latest event signatures from the latest contracts.
- [ ] Update all configs in `config/` folder with the latest contract addresses and block numbers for respective network.

🚨 The deployment will not work if the above requirements are not met. 🚨


#### Deploy Checklist
- [ ] Remove any old files that may interfere with the generation of the subgraph
```shell
rm -rf generated && rm -rf build && rm -rf subgraph.yaml
```
- [ ] Generate the `subgraph.yaml` for the network against which you'd like to deploy the subgraph. If you are deploying to a network that is not on our Supported Networks list, you would have to add the network configuration in `config/<NETWORK_TO_DEPLOY_SUBGRAPH>.json`. Refer to the existing config files for the structure. Once you have added the config file, add the script to the `package.json` file like the other networks. Once you have added the script, generate the `subgraph.yaml` using the following command (also see Deploying subgraph to a new network below). 

```shell
pnpm prepare:<NETWORK_TO_DEPLOY_SUBGRAPH>
```

- [ ] Run codegen
```shell
graph codegen
```

- [ ] Authenticate - hosted service
```shell
graph auth --product hosted-service <YOUR_API_KEY>
```

- [ ] Deploy Subgraph - hosted service
```shell
graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME>
```

- [ ] Local or Custom Node Deployment - 🚨 This will be used for PGN
- [ ] Create the subgraph **only for the first time**
```shell
# Local deployment
graph create allo-protocol/allo-v2 --node http://localhost:8020/

# Custom node deployment
graph graph create <GITHUB_USER>/<SUBGRAPH_NAME> --node <NODE_URL>
```

- [ ] Deploy the subgraph
```shell
# Local deployment
graph deploy  --node http://localhost:8020/ --ipfs http://localhost:5001/  gitcoin/allo ./subgraph.yaml

# Custom node deployment
graph deploy  --node <NODE_URL> --ipfs <IPFS_URL>  <GITHUB_USER>/<SUBGRAPH_NAME> ./subgraph.yaml
```

