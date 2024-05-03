import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

function AppNavbar() {
  return (
   <div>  {/* Navbar Start */}
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">    
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <div className="navbar-nav mx-auto p-2 p-lg-0 border-3">
        <a href="/" className="nav-item nav-link">Home</a>
        <a href="/contact" className="nav-item nav-link">&nbsp;&nbsp;Contact Us</a>
      </div>
  </div>
  </div>
</nav>
      {/* Navbar End */}
      </div>
  )
}

export default AppNavbar