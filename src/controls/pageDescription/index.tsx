import { Box, Grid, Typography } from "@mui/material";

type PageDescriptionProps = {
  description: string;
};

export default function PageDescription({ description }: PageDescriptionProps) {
  return (
    <Grid
      container
      sx={{
        py: 2,
        px: 4,
      }}
    >
      <Typography variant="subtitle1">
        <Box fontWeight="fontWeightBold" display="inline">
          Description:{" "}
        </Box>
        {description}
      </Typography>
    </Grid>
  );
}
