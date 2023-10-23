import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Navbar } from "./Components/Navbar/Navbar";
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
