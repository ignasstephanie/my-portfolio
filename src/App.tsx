import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About'; 
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { inject } from '@vercel/analytics';
import { Analytics } from '@vercel/analytics/react'; 

function App() {
  if (import.meta.env.PROD) {
    inject();
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
