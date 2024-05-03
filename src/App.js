// App.js
import React from 'react';
import { BrowserRouter,Routes as Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AppNavbar from './components/AppNavbar';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container"> 
    <AppNavbar />        
      <BrowserRouter basename="/${process.env.PUBLIC_URL">   
        <Routes>
          <Route path="" element={<Home/> } /> 
          <Route path="/Contact" element={<Contact/>} />         
          <Route path="/signup" elment={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
       </BrowserRouter>
      </div>
     
  );
}

export default App;
