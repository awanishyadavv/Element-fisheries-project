import React from "react";
import { 
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// import Components
import Navbar from "./components/Assets/NavBar/Navbar";
import Devices from "./components/Devices";
import MarketPlace from "./components/MarketPlace";
import Learning from "./components/Learning";
import Buletten from "./components/Buletten";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import WaterLevel from "./components/Assets/WaterLevel/Level";
import Control from "./components/Control";



const App = () => {
    return (
        <>
        <div className="navigation">
        <Navbar />
        </div>
        <Routes>
           <Route path="/" element={<Control />}/>
           <Route path="/Devices" element={<Devices/>}/>
           <Route path="/marketplace" element={<MarketPlace />}/>
           <Route path="/learning" element={<Learning />}/>
           <Route path="/buletten" element={<Buletten />}/>
           <Route path="/contactus" element={<ContactUs />}/>
           <Route path="/aboutus" element={<AboutUs />}/>
        </Routes>
        </>
    );
}
export default App;