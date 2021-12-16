import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "constants/routes";
import "containers/app/App.css";
import CovidPunks from "containers/covidPunks";
import KingMakers from "containers/kingMakers";
import AppBar from "controls/appBar";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "theme";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <AppBar />
          <Routes>
            <Route path={ROUTES.covidPunks} element={<CovidPunks />} />
            <Route path={ROUTES.kingMakers} element={<KingMakers />} />
            <Route path={ROUTES.myNFTs} element={<h1>My NFTs</h1>} />
            <Route path="*" element={<CovidPunks />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
