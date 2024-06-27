import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './PortfolioBar';
import HomeImage from './components/HomeImage';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Message from './components/Message';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Message" element={<Message />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>React SPA Portfolio</h1>
      <br />
      <h4>Get to know me and my work</h4>
      <br />
      <HomeImage />
    </div>
  );
}

export default App;
