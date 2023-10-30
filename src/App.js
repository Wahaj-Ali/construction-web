import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { Navbar } from "./Components/Navbar/Navbar";
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import ContactUs from './Pages/ContactUs/ContactUs';
import FAQs from './Pages/FAQs/FAQs';
import Services from './Pages/Services/Services';
import Service from './Components/Service/Service';
import { getServiceData } from './Data/Service/ServiceData';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path='contact_us' element={<ContactUs />} />
          <Route path='/FAQs' element={<FAQs />} />
          <Route path='/services' element={<Services />} />
          {/* <Route path='/services/kitchen-remodeling' /> */}
          {getServiceData().map((service, index) => (
            <Route
              key={index}
              path={`/services/${service.serviceName.replace(/\s+/g, '-').toLowerCase()}`}
              element={<Service {...service} />}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
