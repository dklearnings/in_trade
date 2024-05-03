// App.js
import React from 'react';
import { BrowserRouter as Router,Routes as Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AppNavbar from './components/AppNavbar';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <AppNavbar />
    
      <div className="">
        <Routes>
          <Route path="/" exact element={<Home />} /> 
          <Route path="/Contact" element={<Contact/>} />         
          <Route path="/signup" elment={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
