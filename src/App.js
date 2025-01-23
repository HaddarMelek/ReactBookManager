import React from 'react';
import './App.css';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Livre from './components/livre';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/livres' Component={Livre} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
