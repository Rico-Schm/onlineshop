import { useState } from 'react'
import React from 'react';
import Header from './components/Header';
// import Kategorien from './components/Kategorien';
import Recommendations from './components/Recommendations';
import Blog from './components/Blog';
import Footer from './components/Footer';
import FooterBottom from './components/FooterBottom';
import './App.css'

const App = () => {
  return (
    <>
    <section id='wrapper'>
      <Header />
      {/* <Kategorien /> */}
      <Recommendations />
      <Blog />
      <Footer />
    </section>
    {/* <FooterBottom /> */}
    </>
  )
}

export default App;