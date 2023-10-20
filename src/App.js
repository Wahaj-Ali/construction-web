import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
