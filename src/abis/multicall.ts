// Multicall aggregates results from multiple contract constant function calls.
// This reduces the number of separate JSON RPC requests that need to be sent
export const MULTICALL_ADDRESS = "0xeefba1e63905ef1d7acba5a8513c70307c1ce441";
export const MULTICALL_ABI = [
  {
    constant: false,
    inputs: [
      {
        components: [
          { name: "target", type: "address" },
          { name: "callData", type: "bytes" },
        ],
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      { name: "blockNumber", type: "uint256" },
      { name: "returnData", type: "bytes[]" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];