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
function App() {
  return (
    <div className="App">
  <Router>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />}  exact/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
