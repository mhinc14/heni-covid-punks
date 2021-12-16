export const KINGMAKERS_CONTRACT_ADDRESS = "0x5C45a46155D03A3421af470d990C1067420726EB"
export const KINGMAKERS_ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];