import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Navbar from './pages/navbar'
import Profile from './pages/profile'
import Login from './pages/login'
import Register from './pages/register'

const [user, setUser] = useState();

useEffect(async () => {
  const storedToken = localStorage.getItem("TOKEN")
  if(!storedToken) return

  try{
    loggedUser = await axios.get('http//localhost:3000/me', {
      headers: {Authorization: storedToken}      
    })

    
  }catch{

  }
},[])

function App() {
  return (
    <>
      <Navbar />
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
