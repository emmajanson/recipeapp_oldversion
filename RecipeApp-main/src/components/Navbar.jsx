import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import '../style/Navbar.css';

function Navbar() {

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link className="icon" to={"/"}><GiKnifeFork /> Yummyyy </Link>
      </div>
      <div className='navbar_links'>
        <Link className='home' to={"/"}> Home </Link>
      </div>
    </div>
  )
}

export default Navbar;