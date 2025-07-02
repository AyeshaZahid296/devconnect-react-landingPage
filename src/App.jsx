// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import LoginDeveloper from "./pages/auth/LoginDeveloper";
import LoginUser from "./pages/auth/LoginUser";
import RegisterUser from "./pages/auth/RegisterUser";
import RegisterDeveloper from "./pages/auth/RegisterDeveloper";
import ForgotPassword from "./pages/auth/ForgotPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/login/user" element={<LoginUser />} />
        <Route path="/login/developer" element={<LoginDeveloper />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/developer" element={<RegisterDeveloper />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
