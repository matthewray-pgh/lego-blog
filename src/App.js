import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Topic } from "./pages/Topic";

import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:id" element={<Topic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
