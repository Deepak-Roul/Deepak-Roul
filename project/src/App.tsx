import React, { useState } from 'react';
import { Menu, X, Notebook as Robot, ChevronDown, ChevronRight, Calendar, ShoppingCart, Users, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <Products />
        <Services />
        <Features />
        <Pricing />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;