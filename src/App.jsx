import Home from "./pages/user/Home.jsx";
import About from "./pages/user/About.jsx";
import Signup from "./components/SignUpForm.jsx";
import AdminLogin from "./pages/admin/Admin_login.jsx";
import DoubleNavbar from "./components/DoubleNavbar.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <DoubleNavbar />

      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin_login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/analytics" element={<Home />} />
          <Route path="/releases" element={<Home />} />
          <Route path="/account" element={<Home />} />
          <Route path="/security" element={<Home />} />
          <Route path="/settings" element={<Home />} />
          <Route path="*" element={<Home />} /> {/* fallback */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
