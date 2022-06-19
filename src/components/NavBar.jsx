import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
       <Link to="/">Home</Link>
       <Link to="/Register">Register</Link>
    </div>
  )
}

export default NavBar