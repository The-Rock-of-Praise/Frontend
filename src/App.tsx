import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Features from './components/sections/Features';
// import NewReleases from './components/sections/NewReleases';
import Downloads from './components/sections/Downloads';
import Vision from './components/sections/Vision';
import ProVersion from './components/sections/ProVersion';
import PrivacyPolicy from './components/sections/PrivacyPolicy';
import TermsOfService from './components/sections/TermsOfService';
import FAQ from './components/sections/FAQ';

const LandingPage = () => {
  return (
    <div className="flex h-auto min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-background-dark font-display text-[#0d121b] dark:text-white transition-colors duration-300">
      <Header />
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="proVersion">
        <ProVersion />
      </div>

      {/* <div id="newReleases">
        <NewReleases />
      </div> */}

      <div id="vision">
        <Vision />
      </div>

      <div id="downloads">
        <Downloads />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/faq" element={<FAQ />} />
        {/* Redirect any other unknown routes to home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
