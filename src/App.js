import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbar/Navbars";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/blogs/Blogs";
import MainOfferPage from "./components/MainOfferPage/MainOfferPage";
import Payment from "./components/payment/Payment";
import FAQ from "./components/FAQ/FAQ";
import UpperNavbar from "./components/Navbar/UpperNavbar";
import Nashik from "./components/blogs/city/Nashik";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUs from "./components/aboutUs/AboutUs";
import CabsSearch from "./components/cabs/CabsSearch";
import CabsPage from "./components/cabs/CabsPage";
import Transfer from "./components/cabs/Transfer";

function App() {
  return (
    <BrowserRouter>
      <UpperNavbar />
      <Navbars />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="offers" element={<MainOfferPage />} />
        <Route path="payment" element={<Payment />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="cabsSearch" element={<CabsSearch />} />
        <Route path="cabsPage" element={<CabsPage />} />
        <Route path="transfer-details" element={<Transfer />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/nashik" element={<Nashik />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
