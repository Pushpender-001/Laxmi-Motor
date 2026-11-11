import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Navbar from "./Component/Navbar";
import Home from './Pages/Home.jsx';
import Contact from "./Pages/Contact.jsx"
import about from "./Pages/AboutUs.jsx"
import ScrollToTop from './Pages/ScrollToTop.jsx';
import Footer from './Component/Footer.jsx'
import AboutUs from './Pages/AboutUs.jsx';
// import Projects from './Pages/Projects.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
         <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/about" element={<AboutUs />} />
          {/*  <Route path="/Projects" element={<Projects />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
