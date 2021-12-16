import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Skeleton, Stack } from "@mui/material";

type NFTCardProps = {
  isLoading: boolean;
  imageUrl: string;
  address: string;
  name: string;
};

const styles = {
  card: {
    flexGrow: 1,
    maxWidth: 325,
    my: 2,
  },
};

export default function NFTCard({
  isLoading,
  imageUrl,
  address,
  name,
}: NFTCardProps) {
  if (isLoading) {
    return (
      <Stack sx={styles.card}>
        <Skeleton variant="rectangular" height={118} />
        <Skeleton variant="text" height={40} />
      </Stack>
    );
  }
  return (
    <Card sx={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="nft image"
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            Owners address: <Box sx={{ fontSize: 10 }}>{address}</Box>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
