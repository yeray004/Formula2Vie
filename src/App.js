import React from 'react';
import {Router, Switch, Routes, Route, Link} from 'react-router-dom'
/* import {Router, Switch, Route, Link} from 'react-router' */
//-----------------------------------------COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import NavBarMobile from './components/NavBarMobile';
//-----------------------------------------PAGES
import Inicio from './pages/inicio/Inicio'

function App() {
  return (
    <>
      <Inicio/>
    </>
  );
}

export default App;
