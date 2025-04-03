import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./businessLogic/sharedComponents/header.jsx";
import HomePage from "./businessLogic/components/HomePage.jsx";
import CompanyProfile from "./businessLogic/components/CompanyProfile.jsx";
import Products from "./businessLogic/components/Products.jsx";
import ContactUs from "./businessLogic/components/ContactUs.jsx";
import Footer from "./businessLogic/sharedComponents/Footer.jsx";
import SiteMap from "./businessLogic/components/SiteMap.jsx";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<CompanyProfile/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<CompanyProfile/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/siteMap" element={<SiteMap/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
