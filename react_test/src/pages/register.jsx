import { useState, useEffect } from 'react'
import './styles/register.css'


function Register() {
  const [email, setEmail] = useState()
  const [user, setUser] = useState()
  const [cont, setCont] = useState()
  const [vercont, setVercont] = useState()
  const [error, setError] = useState()
  const [test, setTest] = useState(1)
  
  const handleSubmit = async() => {
    setTest(test += 1)
    if (cont != vercont){
      setError("Las contraseñas no coincides")
      return
    }
    try{
      response = await axios.post('http://localhost:3000/users', {
        user,
        user,
        email,
        cont
      })
    }catch(err){
      if(err.response){
        setError(err.response)
      } else {
        setError("El servidor no responde, intente nuevamente")
      }
    }
  }
  return (
    <>
      <h1>{test}</h1>
      <h1>Registrate</h1>
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