import NFTCardList from "controls/nftCardList";
import useGetCovidPunks, { NFTCollections } from "hooks/useGetNFTCollection";
import PageLayout from "layouts/pageLayout";
import { useState } from "react";

export default function KingMakers() {
  const [offset, setOffset] = useState(0);
  // offset + 1 is needed due to number 0 of the kingmakers collection being an un-minted special token
  const kingMakers = useGetCovidPunks(NFTCollections.kingMakers, offset + 1);
  const { isLoading, nftTokensMetaData } = kingMakers;

  const handlePageChange: (page: number) => void = (page) => {
    setOffset(page);
  };

  return (
    <PageLayout
      title={"KingMakers"}
      description={
        "Kingmakers is an NFT puzzle collection created by Mehdad Hussain. Find out more at www.kingmakers.cc"
      }
    >
      <NFTCardList
        isLoading={isLoading}
        nftTokensMetaData={nftTokensMetaData}
        onPageChange={handlePageChange}
      />
    </PageLayout>
  );
}
