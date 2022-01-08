import React from 'react';
import Header  from './Header';
import Hero  from './Hero';
import Services from './Services';
import Arrivals from './Arrivals';
import Products  from './Products';
import Footer from './Footer';

// mongodb+srv://Abaniwo:MeduLLa1@cluster0.o58ll.mongodb.net/mytable?retryWrites=true&w=majority

const Shop = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Services />
      <Arrivals />
      <Products />
      <Footer />
    </div>
)};

export default Shop;
