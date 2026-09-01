import { useState, useEffect } from 'react'
import './styles/navbar.css';

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar