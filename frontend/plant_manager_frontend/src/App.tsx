import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlantView from "./layout/PlantView/PlantView";
import { About } from "./layout/About";
import { HeaderNew } from "./layout/header/Header";
import { Container } from "@mui/material";
import { ContainerWrapper } from "./layout/Global.styles";

function App() {
  return (
    <BrowserRouter>
      <ContainerWrapper>
        <HeaderNew/>
        <Routes>
          <Route path="/" element={<PlantView />} />
          <Route path="about" element={<About />} />
        </Routes>
      </ContainerWrapper>
    </BrowserRouter>
  );
}

export default App;
