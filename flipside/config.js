const CONFIG = {
  OPTIMISM: {
    NAME: "Optimism",
    IDENTIFIER: "CHAIN",
    ADDRESS: "0x4200000000000000000000000000000000000042",
    DECIMAL: 18,
    SYMBOL: "OP",
    CHAIN: "optimism",
    CHAIN_ID: 10,
    CMC_ID: 11840,
  },
  ARBITRUM: {
    NAME: "Arbitrum",
    IDENTIFIER: "CHAIN",
    ADDRESS: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    DECIMAL: 18,
    SYMBOL: "ARB",
    CHAIN: "arbitrum",
    CHAIN_ID: 42162,
    CMC_ID: 11841,
  },
  POLYGON: {
    NAME: "Polygon",
    IDENTIFIER: "CHAIN",
    ADDRESS: "0x0000000000000000000000000000000000001010",
    DECIMAL: 18,
    SYMBOL: "MATIC",
    CHAIN: "polygon",
    CHAIN_ID: 137,
    CMC_ID: 3890,
  },
  ETHEREUM: {
    NAME: "Ethereum",
    IDENTIFIER: "CHAIN",
    ADDRESS: "",
    DECIMAL: 18,
    SYMBOL: "ETH",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 1027,
  },
  LIDO: {
    NAME: "Lido",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
    DECIMAL: 18,
    SYMBOL: "LDO",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 8000,
  },
  UNISWAP: {
    NAME: "Uniswap",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    DECIMAL: 18,
    SYMBOL: "UNI",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 7083,
  },
  MAKER: {
    NAME: "Maker",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    DECIMAL: 18,
    SYMBOL: "MKR",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 1518,
  },
  AAVE: {
    NAME: "Aave",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    DECIMAL: 18,
    SYMBOL: "AAVE",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 7278,
  },
  CURVE: {
    NAME: "curve-dex",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    DECIMAL: 18,
    SYMBOL: "CRV",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 6538,
  },
  COMPOUND: {
    NAME: "Compound",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0xc00e94cb662c3520282e6f5717214004a7f26888",
    DECIMAL: 18,
    SYMBOL: "COMP",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 5692,
  },
  GRAVITY: {
    NAME: "Gravivty-Finance",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x874e178A2f3f3F9d34db862453Cd756E7eAb0381",
    DECIMAL: 18,
    SYMBOL: "GFI",
    CHAIN: "polygon",
    CHAIN_ID: 137,
    CMC_ID: 10324,
  },
  SYNTHETIX: {
    NAME: "Synthetix",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    DECIMAL: 18,
    SYMBOL: "SNX",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 2586,
  },
  LIQUITY: {
    NAME: "Liquity",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
    DECIMAL: 18,
    SYMBOL: "LQTY",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 7429,
  },
  KYBER: {
    NAME: "Kyberswap-Elastic",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
    DECIMAL: 18,
    SYMBOL: "KNC",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 9444,
  },
  BANCOR: {
    NAME: "Bancor",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    DECIMAL: 18,
    SYMBOL: "BNT",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 1727,
  },
  GRAPH: {
    NAME: "The Graph",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
    DECIMAL: 18,
    SYMBOL: "GRT",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 6719,
  },
  CHAINLINK: {
    NAME: "Chainlink",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x514910771af9ca656af840dff83e8264ecf986ca",
    DECIMAL: 18,
    SYMBOL: "LINK",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 1975,
  },
  TRUFI: {
    NAME: "TruFi",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x4c19596f5aaff459fa38b0f7ed92f11ae6543784",
    DECIMAL: 18,
    SYMBOL: "TRU",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 7725,
  },
  CENTRIFUGE: {
    NAME: "Centrifuge",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0xc221b7e65ffc80de234bbb6667abdd46593d34f0",
    DECIMAL: 18,
    SYMBOL: "CFG",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 6748,
  },
  ANKR: {
    NAME: "Ankr",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x8290333cef9e6d528dd5618fb97a76f268f3edd4",
    DECIMAL: 18,
    SYMBOL: "ANKR",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 3783,
  },
  LOOPRING: {
    NAME: "Loopring",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
    DECIMAL: 18,
    SYMBOL: "LRC",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 1934,
  },
  RENDER: {
    NAME: "Render",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
    DECIMAL: 18,
    SYMBOL: "RNDR",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 5690,
  },
  ROCKET: {
    NAME: "Rocket-Pool",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0xd33526068d116ce69f19a9ee46f0bd304f21a51f",
    DECIMAL: 18,
    SYMBOL: "RPL",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 2943,
  },
  FRAXSHARE: {
    NAME: "Frax",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
    DECIMAL: 18,
    SYMBOL: "FXS",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 6953,
  },
  ROLLBIT: {
    NAME: "Rollbit",
    IDENTIFIER: "PROTOCOL",
    ADDRESS: "0x046eee2cc3188071c02bfc1745a6b17c656e3f3d",
    DECIMAL: 18,
    SYMBOL: "RLB",
    CHAIN: "ethereum",
    CHAIN_ID: 1,
    CMC_ID: 15271,
  },
};

module.exports = CONFIG;