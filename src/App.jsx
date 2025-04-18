import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./businessLogic/sharedComponents/Header.jsx";
import HomePage from "./businessLogic/components/HomePage.jsx";
import CompanyProfile from "./businessLogic/components/CompanyProfile.jsx";
import Products from "./businessLogic/components/Products.jsx";
import ContactUs from "./businessLogic/components/ContactUs.jsx";
import Footer from "./businessLogic/sharedComponents/Footer.jsx";
import SiteMap from "./businessLogic/components/SiteMap.jsx";
import CategoriesProduct from "./businessLogic/components/CategoriesProduct.jsx";
import SpecificProduct from "./businessLogic/components/SpecificProduct.jsx";

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
        <Route path="/productsCatregory" element={<CategoriesProduct/>}/>
        <Route path="/:id" element={<SpecificProduct/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
