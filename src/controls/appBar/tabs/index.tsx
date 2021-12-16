import { Box, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ROUTES } from "constants/routes";

const styles = {
  tabs: {
    color: "white",
  },
};
export default function Tabs() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(pathname);
  useEffect(() => {
    switch (pathname) {
      case ROUTES.covidPunks:
        setTabValue(ROUTES.covidPunks);
        break;
      case ROUTES.kingMakers:
        setTabValue(ROUTES.kingMakers);
        break;
      default:
        setTabValue(ROUTES.covidPunks);
        break;
    }
  }, [pathname]);
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    switch (newValue) {
      case ROUTES.covidPunks:
        navigate(ROUTES.covidPunks);
        break;
      case ROUTES.kingMakers:
        navigate(ROUTES.kingMakers);
        break;
      default:
        break;
    }
  };
  return (
    <TabContext value={tabValue}>
      <Box>
        <TabList
          onChange={handleChange}
          aria-label="nav-tabs"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Covid Punks" value={ROUTES.covidPunks} sx={styles.tabs} />
          <Tab label="King Makers" value={ROUTES.kingMakers} sx={styles.tabs} />
        </TabList>
      </Box>
    </TabContext>
  );
}
