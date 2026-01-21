import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DarkCollection from './components/DarkCollection';
import GridBinder from './components/GridBinder';
import Testimonials from './components/Testimonials';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <DarkCollection />
      <GridBinder />
      <Testimonials />
      <BrandStory />
      <Footer />
    </div>
  );
}

export default App;
