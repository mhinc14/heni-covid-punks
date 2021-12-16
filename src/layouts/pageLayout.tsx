import { Grid } from "@mui/material";
import PageTitle from "controls/pageTitle";
import Description from "controls/pageDescription";

type PageLayoutProps = {
  title: string;
  description: string;
  children: JSX.Element;
};
export default function PageLayout({
  title,
  description,
  children,
}: PageLayoutProps) {
  return (
    <Grid container>
      <PageTitle title={title} />
      <Description description={description} />
      {children}
    </Grid>
  );
}
