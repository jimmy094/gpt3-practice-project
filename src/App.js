import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Brand from './components/Brand'
import Cta from './components/Cta'
import Feature from './components/Feature'
import Header from './components/Header';
import WhatGPT3 from './components/WhatGPT3';
import Features from './components/Features';
import Possibility from './components/Possibility';
import Blog from './components/Blog';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
