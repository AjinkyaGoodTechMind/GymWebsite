import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landingpage/LandingPage';
import FeaturesPage from './Components/Features/FeaturesPage';
import Gallery from './Components/Gallery/Gallery';
import Facility from './Components/Facilities/Facility';
import Footer from './Components/Footer/Footer';
import CoppyWrite from './Components/CoppyWrite/CoppyWrite';
import AllRoutes from './Components/Routes/AllRoutes';



function App() {
  return (
    <div className="App">
{/* <Navbar />
<LandingPage />
<FeaturesPage />
<Gallery />
<Facility />
<Footer />
<CoppyWrite /> */}
<AllRoutes />
    </div>
  );
}

export default App;
