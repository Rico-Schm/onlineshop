import { useState } from 'react'
import React from 'react';
import Header from './components/Header';
// import Kategorien from './components/Kategorien';
import Empfehlungen from './components/Empfehlungen';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      {/* <Kategorien /> */}
      <Empfehlungen />
      <Footer />
    </>
  )
}

export default App;