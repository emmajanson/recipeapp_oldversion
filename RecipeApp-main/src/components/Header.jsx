import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <div className='logo'>
      <Link className="icon" to={"/"}><GiKnifeFork />Yummyyy</Link>
    </div>
  )
}

export default Header;