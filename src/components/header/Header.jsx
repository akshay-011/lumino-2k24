import React from 'react'
import lumino from "./assets/lumino-logo.svg"
import "./header.css"

const Header = () => {
  return (
    <header className='header' >
        <img className='header-logo' src={lumino} alt="logo" />
    </header>
  )
}

export default Header