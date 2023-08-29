import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import CostsSection from "./components/CostsSection/CostsSection";
import HoursSection from "./components/HoursSection/HoursSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <AboutSection />
      <ServicesSection />
      <CostsSection />
      <HoursSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
