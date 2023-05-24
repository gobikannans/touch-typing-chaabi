import React from 'react'
import { UseTypeContext } from '../../context/TypeContext'
import "./index.css"

function Header() {
  const {minutes,seconds}=UseTypeContext()
  return (
    <nav className='header-container'>
      <h1 className='nav-heading'>
        Touch Typing
      </h1>
      <p className='time'>{minutes} : {seconds}</p>
    </nav>
  )
}

export default Header