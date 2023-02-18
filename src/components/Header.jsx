import React from 'react'
import "./HeaderStyles.css"
import logo from "../assets/logo4.png"

export const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="left-logo">
          <img src={logo} alt="Space-X" />
        </div>
        <div className="right">
         <h4>CAPSULES</h4>
        </div>
      </div>
    </div>
    
  )
}
