import { Grid } from "@mui/material";
import NFTCard from "controls/nftCardList/nftCard";
import Pagination from "controls/pagination";
import { NFTTokensMeta } from "hooks/useGetNFTCollection";
import { useEffect, useState } from "react";

type NFTCardListProps = {
  isLoading: boolean;
  nftTokensMetaData: NFTTokensMeta[];
  onPageChange: (offset: number) => void;
};

export default function NFTCardList({
  isLoading,
  nftTokensMetaData,
  onPageChange,
}: NFTCardListProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    onPageChange(offset);
  }, [offset, onPageChange]);

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    switch (page) {
      case 1:
        setOffset(0);
        break;
      case 2:
        setOffset(20);
        break;
      case 3:
        setOffset(40);
        break;
      case 4:
        setOffset(60);
        break;
      case 5:
        setOffset(80);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Pagination onPaginationChange={handlePaginationChange} />
      <Grid container>
        {nftTokensMetaData.map((nftToken) => {
          return (
            <Grid
              container
              justifyContent="center"
              item
              xs={6}
              sm={3}
              sx={{ px: 4 }}
            >
              <NFTCard
                key={nftToken.external_url}
                isLoading={isLoading}
                imageUrl={nftToken.image}
                address={nftToken.address}
                name={nftToken.name}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
