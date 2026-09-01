import { useState, useEffect } from 'react'
import './styles/login.css'

function Login() {
  return (
    <>
        <form action="localhost:3000/users" method='POST'>

          <label htmlFor="email">Correo Electronico</label>
          <input type="email" id='email' name='email' />

          <label htmlFor="cont">Contraseña</label>
          <input type="password" id='cont' name='cont'/>

          <button type='submit'>Registrarse</button>
      </form>
    </>
  )
}

export default Login