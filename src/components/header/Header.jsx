import React from 'react'
import lumino from "./assets/lumino-logo.png"
import "./header.css"

const Header = () => {
  return (
    <header>
        <img className='header-logo' src={lumino} alt="logo" />
    </header>
  )
}

export default Header