import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import SectionSummary from './components/SectionSummary/SectionSummary';
import Footer from './components/Footer/Footer';
import Noticias from './components/Noticias/Noticias';
import Recursos from './components/Recursos/Recursos';

const Home = () => (
  <>
    <HeroSection />
    <SectionSummary />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path='/recursos' element={<Recursos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
