import React, { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import './style.scss'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const { addToken } = useContext(UserContext)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3600/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email
      })
    })
      .then((res) => res.json())
      .then((data) =>
        addToken(data))
    navigate('/')

  }



  return (
    <div className='register'>
      <div className="form">
        <img width={200} src="https://www.iconarchive.com/download/i60710/double-j-design/origami-colored-pencil/red-user.ico" alt="" />
        <h1>WELCOME </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
          <br />
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          <br />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
          <button>Sign Up</button>
        </form>
      </div>
      <img className='cat' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/herodoggo.png" alt="" />


    </div>
  )
}

export default Register
