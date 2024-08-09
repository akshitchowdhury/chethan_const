import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import ExcavationServices from './components/Services/ExcavationServices/ExcavationServices';
import DemolitionDismantle from './components/Services/DemolitionDismantle/DemolitionDismantle';
import SitePreparations from './components/Services/SitePreparations/SitePreparations';
import Career from './components/Career/Career';
function App() {
  return (
    <div className="App overflow-clip">

<Router>
    <Nav/>
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About/>} />
  <Route path="/career" element={<Career/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/excavation" element={<ExcavationServices/>} />
  <Route path="/demolition" element={<DemolitionDismantle/>} />
  <Route path="/siteprep" element={<SitePreparations/>} />
  
  <Route path="/contact" element={<Contact/>} />
</Routes>
<Footer/>
    </Router>
    </div>
  );
}

export default App;
