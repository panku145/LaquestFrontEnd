import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// IMPORT CUSTOM STYLE
import "./App.css";
import "./assets/fonts/font-awesome";

// IMPORT COMPONENTS & PAGES
import HOME from "./pages/Home/Home.js";
import ScrollToTop from "./components/ScrollToTop.js";
import ContactUs from "./pages/Contact-Us/ContactUs";
import Aboutus from "./pages/About-us/Aboutus.js";
import Eula from "./pages/EULA/Eula";
import BRMIS from "./pages/BRMIS/BRMIS.js";
import Support from "./pages/Google-support/support";
import Workspaces from "./pages/Google-workspaces/workspaces";
import PrivacyPolicy from "./pages/Privacy-policy/PrivacyPolicy.js";
import LaquestProfile from "./pages/LaquestProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/google-workspace" element={<Workspaces />} />
        <Route path="/google-workspace/support" element={<Support />} />
        <Route path="/barangay" element={<BRMIS />} />
        <Route path="/eula" element={<Eula />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Company-Profile" element={<LaquestProfile />} />
      </Routes>
    </>
  );
}

export default App;
