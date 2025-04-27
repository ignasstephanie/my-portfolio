import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About'; 
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
