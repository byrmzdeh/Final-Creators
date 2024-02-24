import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const AdminPanel = () => {
  return (
    <div className='adminpanel'>
      <h1>Admin Panel</h1>
      <button><Link to={'/cardsPanel'}>Cards Panel</Link></button>
      <button><Link to={'/usersPanel'}>Users Panel</Link></button>
    </div>
  )
}

export default AdminPanel
