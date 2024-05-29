import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appliances from "./pages/Appliances";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Appliances />} />
          <Route path="/appliance/:serialNo" element={<Info />} />
        </Routes>
      </BrowserRouter>
      {/* <Info /> */}
    </>
  );
}

export default App;
