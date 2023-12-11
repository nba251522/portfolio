import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <Navigation />

        <main>
          <Routes> 
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;