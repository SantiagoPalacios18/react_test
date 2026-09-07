import { useState, useEffect } from 'react'
import axios from 'axios'
import './styles/register.css'


function Register() {
  const [email, setEmail] = useState('')
  const [user, setUser] = useState('')
  const [cont, setCont] = useState('')
  const [vercont, setVercont] = useState('')
  const [error, setError] = useState('')
  const [test, setTest] = useState('test')
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    if (!email || !user || !cont || !vercont){
      setError("Campos incompletos")
      return
    }
    try {
      const {check} = await axios.get(`http://localhost:3000/users/check?username=${user}&email=${email}`)

      if(check){
        setTest(check.data)
        setError("Usuario o Email ya en uso")
        return
      }
    }catch(error){
      if(error.response){
        setError(err.response.data.message)
      } else {
        setError("El servidor no responde, intente nuevamente")
      }
    }
    if (cont != vercont){
      setError("Las contraseñas no coincides")
      return
    }
    try{
      const response = await axios.post('http://localhost:3000/users', {
        username: user,
        name: user,
        email: email,
        cont: cont
      })
      console.log({response})
    }catch(error){
      if(error.response){
        setError(error.response.data.message)
      } else {
        setError("El servidor no responde, intente nuevamente")
      }
    }
  }
  return (
    <>
      <h1>{test}</h1>
      <h1>Registrate</h1>
      {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>

        <label htmlFor="user">Nombre de usuario</label>
        <input type="text" id='user' name='username' onChange={(e) => setUser(e.target.value)}/>

        <label htmlFor="email">Correo Electronico</label>
        <input type="email" id='email' name='email' onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="cont">Contraseña</label>
        <input type="password" id='cont' name='cont' onChange={(e) => setCont(e.target.value)}/>

        <label htmlFor="verCont">Repetir Contraseña</label>
        <input type="password" id='verCont' name='verCont' onChange={(e) => setVercont(e.target.value)}/>

        <button type='submit'>Registrarse</button>
      </form>
    </>
  )
}

export default Register