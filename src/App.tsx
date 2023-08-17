import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HeroBanner from "./components/heroBanner/heroBanner";
import "./App.css";

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HeroBanner />} />
          </Routes>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
