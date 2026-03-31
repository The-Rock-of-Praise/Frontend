import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Features from './components/sections/Features';
// import NewReleases from './components/sections/NewReleases';
import Downloads from './components/sections/Downloads';
import Vision from './components/sections/Vision';
import ProVersion from './components/sections/ProVersion';

function App() {
  return (
    <Router>
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

        <div id="reviews">
          <Downloads />
        </div>


        {/* <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main> */}

        <div id="contact">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
