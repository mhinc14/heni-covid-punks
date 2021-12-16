// This hook collects the addresses of token owners and the metadata for a given NFT avatar collection
// If you want to add another NFT avatar collection then update nftAbis, nftContracts and also NFTCollections
import { useEffect, useState } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { MULTICALL_ABI, MULTICALL_ADDRESS } from 'abis/multicall';
import { COVID_PUNKS_ABI, COVID_PUNKS_CONTRACT_ADDRESS } from 'abis/covidPunks';
import { KINGMAKERS_ABI, KINGMAKERS_CONTRACT_ADDRESS } from 'abis/kingMakers';
const Web3 = require("web3");

export type NFTTokensMeta = OwnerOf & URIResponse
export enum NFTCollections {
  covidPunks = "covidPunks",
  kingMakers = "kingMakers"
}
export enum ContractFunctions {
  ownerOf = "ownerOf",
  tokenURI = "tokenURI"
}
type MulticallArgument = {
  target: string,
  callData: string
}
type OwnerOf = {
  address: string,
  tokenId: number
}
type Attribute = {
  trait_type: string,
  value: string
}
type URIResponse = {
  attributes: Attribute[],
  description: string,
  external_url: string,
  image: string,
  name: string,
  tokenId: number,
}
type GetCovidPunksResponse = {
  nftTokensMetaData: NFTTokensMeta[],
  isLoading: boolean
}
type ServerResponse = {
  data: URIResponse
}
const nftAbis = {
  covidPunks: COVID_PUNKS_ABI,
  kingMakers: KINGMAKERS_ABI
}
const nftContracts = {
  covidPunks: COVID_PUNKS_CONTRACT_ADDRESS,
  kingMakers: KINGMAKERS_CONTRACT_ADDRESS
}

const web3 = new Web3(
  "https://mainnet.infura.io/v3/f28e787e358a448e9a3d5c082ef0a213"
);

// This variable can be used to change how many nfts we get data for on each call
const NUMBER_OF_TOKENS = 20

// The multicall contract we interact with to more efficiently get the NFT data
const multicallContract = new web3.eth.Contract(
  MULTICALL_ABI,
  MULTICALL_ADDRESS
);

// This function provide the arguments we need use when calling the multicall contract
const getMulticallArgs: (methodName: string, nftCollection: NFTCollections, offset: number) => MulticallArgument[] = (methodName, nftCollection, offset) => {
  const nftContract = new web3.eth.Contract(nftAbis[nftCollection], nftContracts[nftCollection]);
  const multicallArgs = Array.from(Array(NUMBER_OF_TOKENS)).map((_, index) => {
    const tokenId = index + offset
    const argument: MulticallArgument = {
      target: nftContracts[nftCollection],
      callData: nftContract.methods[methodName](tokenId).encodeABI(),
    }
    return argument
  });
  return multicallArgs
}

const useGetCovidPunks: (nftCollection: NFTCollections, offset?: number) => GetCovidPunksResponse = (nftCollection = NFTCollections.covidPunks, offset = 20) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [addresses, setAddresses] = useState<OwnerOf[] | undefined>(undefined)
  const [metaData, setMetaData] = useState<URIResponse[] | undefined>(undefined)
  const merged = _.merge(_.keyBy(addresses, 'tokenId'), _.keyBy(metaData, 'tokenId'));
  const nftTokensMetaData = _.values(merged);

  useEffect(() => {
    setAddresses(undefined)
    setMetaData(undefined)
    setIsLoading(true)
    const ownerOfMultiCallArgs = getMulticallArgs(ContractFunctions.ownerOf, nftCollection, offset)
    const tokenURIMultiCallArgs = getMulticallArgs(ContractFunctions.tokenURI, nftCollection, offset)
    const getTokenOwnerAddresses = async () => {
      const result = await multicallContract.methods["aggregate"](
        ownerOfMultiCallArgs
      ).call();
      const addresses: OwnerOf[] = result.returnData.map((encodedAddress: string, index: number) => {
        const address = web3.eth.abi.decodeParameters(
          ["address"],
          encodedAddress
        )[0]
        const tokenId = index + offset
        const ownerOf: OwnerOf = {
          address,
          tokenId
        }
        return ownerOf
      })
      setAddresses(addresses);
    }
    const getTokenMetaData = async () => {
      const tokenURIs = await multicallContract.methods["aggregate"](
        tokenURIMultiCallArgs
      ).call();
      const tokensMetaData: URIResponse[] = await tokenURIs.returnData.map(async (address: string) => {
        const metaDataURL: string = await web3.eth.abi.decodeParameters(
          ["string"],
          address
        )[0]
        const metaData = await axios.request<string>({
          url: metaDataURL,
          transformResponse: (response: ServerResponse) => response
        }).then((response) => {
          const { data } = response
          return JSON.parse(data) as URIResponse
        })
        return metaData
      })
      const results = await Promise.all(tokensMetaData);
      setMetaData(results)
    }
    // Get token owner addresses and set them to state
    getTokenOwnerAddresses()
    // Get token metaData and set them to state
    getTokenMetaData()
  }, [offset, nftCollection]);

  useEffect(() => {
    if (addresses) {
      setIsLoading(false)
    }
  }, [addresses])

  return {
    nftTokensMetaData,
    isLoading
  }
}

export default useGetCovidPunks
