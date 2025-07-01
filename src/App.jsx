import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />

      </Routes>
    </Router>
  )
}

export default App