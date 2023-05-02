import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Topic } from "./pages/Topic";
import { Builds } from "./pages/Builds";
import { Sets } from "./pages/Sets";
import { Topics } from "./pages/Topics";

import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:id" element={<Topic />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
