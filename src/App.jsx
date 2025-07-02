import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Support from "./pages/Support";
import HeroPage from "./pages/HeroPage";

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HeroPage />} />

        {/* <Route path="/" element={<Support />} /> */}
      </Routes>
    </Router>
  )
}

export default App