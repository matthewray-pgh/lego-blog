import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Topic } from "./pages/Topic";
import { Builds } from "./pages/Builds";
import { Sets } from "./pages/Sets";
import { Set } from "./pages/Set";
import { Topics } from "./pages/Topics";

import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builds" element={<Builds />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/set/:id" element={<Set />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topic/:id" element={<Topic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
