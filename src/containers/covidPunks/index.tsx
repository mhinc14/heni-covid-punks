import NFTCardList from "controls/nftCardList";
import useGetCovidPunks, { NFTCollections } from "hooks/useGetNFTCollection";
import PageLayout from "layouts/pageLayout";
import { useState } from "react";

export default function CovidPunks() {
  const [offset, setOffset] = useState(0);
  const covidPunks = useGetCovidPunks(NFTCollections.covidPunks, offset);
  const { isLoading, nftTokensMetaData } = covidPunks;

  const handlePageChange: (page: number) => void = (page) => {
    setOffset(page);
  };

  return (
    <PageLayout
      title={"Covid Punks"}
      description={
        "10,000 computer-generated punks who politely comply with local personal protective gear regulations. Way to go, champ!"
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
