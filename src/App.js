import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Main } from "./pages/main";
import { CoinFlip } from "./pages/coinFlip";
import { Team } from "./pages/team";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  exact element={<Main />} />
        <Route path="/coin" element={<CoinFlip />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
