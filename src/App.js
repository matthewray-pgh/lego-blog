import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

import "./styles/App.scss";

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
