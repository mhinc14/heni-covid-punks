import { Grid, Typography } from "@mui/material";

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        py: 2,
      }}
    >
      <Typography variant="h4">{title}</Typography>
    </Grid>
  );
}
