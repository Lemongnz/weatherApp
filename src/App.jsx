import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import { CityContextProvider } from "./context/cityContext";

function App() {
  return (
    <CityContextProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </CityContextProvider>
  );
}

export default App;
