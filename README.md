# Allo-V2 Graph

https://thegraph.com/docs/en/deploying/deploying-a-subgraph-to-hosted/#using-graph-cli

**Supported Networks**

| network        |
|----------------|
| goerli         |


## Deploy

- Run codegen
```shell
graph codegen
```

- Authenticate - incase of hosted service
```shell
graph auth --product hosted-service <YOUR_API_KEY>
```

- Authenticate - incase of studio
```shell
graph auth --studio <YOUR_API_KEY>
```

- Deploy Subgraph - incase of hosted service
```shell
graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME>
```

- Deploy Subgraph - incase of studio
```shell
graph deploy --studio <SUBGRAPH_NAME>
```

Note: If you find yourself wanting to run the entire flow in one command.
Use this example where we deploy the subgraph on goerli

```shell
# Hosted Service
rm -rf generated && rm -rf build &&
    pnpm prepare:goerli &&
    graph codegen &&
    graph auth --product hosted-service <YOUR_API_KEY> &&
    graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME>

# Studio
rm -rf generated && rm -rf build &&
    pnpm prepare:goerli &&
    graph codegen &&
    graph auth --product studio <YOUR_API_KEY> &&
    graph deploy --product studio <SUBGRAPH_NAME>
```