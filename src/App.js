import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './PortfolioBar';
import HomeImage from './components/HomeImage';
import About from './About';
import Projects from './Projects';
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
      <h3>Get to know me and my work</h3>
      <br />
      <HomeImage />
    </div>
  );
}

export default App;
