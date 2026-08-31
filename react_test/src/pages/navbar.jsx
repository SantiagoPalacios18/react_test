import { useState, useEffect } from 'react'
import './styles/navbar.css';

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>
    </>
  )
}

export default Navbar