import './App.css';
import Navbar from "./helpers/Navbar";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from './Components/About/About';
import Footer from "./helpers/Footer"
import Projects from './Components/Projects/Projects';
function App() {
  return (
    <div className="App">
  <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />}  exact/>
          <Route path="/about" element={<About />}  exact/>
          <Route path="/project" element={<Projects />}  exact/>
        </Routes>
    <Footer/>
  </Router>
    </div>
  );
}

export default App;
