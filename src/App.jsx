import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ServiceListings from "./pages/ServiceListing";
import Navbar from "./components/Navbar";
import ServicePageTemplate from "./pages/ServicePageTemplate";
import Home from './pages/Home';
import BackToTop from "./components/BacktoTop";
import Footer from "./components/footer";
import ContactForm from "./components/Home Page/ContactForm";
import BlogSection from "./components/Home Page/BlogSection";
import Booking from "./pages/Booking";
import PaymentsPage from "./pages/Payments";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutPage";

function App() {
  return (
    <>

    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={< ServiceListings/>} />
        <Route path="/service/:pageId" element={<ServicePageTemplate/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/blog" element={<BlogSection/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/booking/:pageId" element={<Booking/>} />
        <Route path="/payment" element={<PaymentsPage/>}/>
      </Routes>
    </Router>
    <Footer/>
    <BackToTop />
    </>
  );
}

export default App;
