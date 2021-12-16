import { AppBar as MUIAppBar, Box, Grid, Toolbar } from "@mui/material";
import Tabs from "controls/appBar/tabs";

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar position="static">
        <Toolbar>
          <Grid container justifyContent="flex-end" alignContent="center">
            <Grid item>
              <Tabs />
            </Grid>
          </Grid>
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
}
