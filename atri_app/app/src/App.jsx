import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Features from "./pages/Features.jsx";
import Pricing from "./pages/Pricing.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/features" element={<Features />} />
<Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}
