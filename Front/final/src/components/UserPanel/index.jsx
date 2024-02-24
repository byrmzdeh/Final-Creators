import React, { useContext, useEffect, useRef, useState } from 'react'
import './style.scss'
import { Helmet } from 'react-helmet'
import { UserContext } from '../../context/UserContext'
import './style.scss'

const UserPanel = () => {
  const [user, setUser] = useState([])
  const { token } = useContext(UserContext)

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    fetch('http://localhost:3600/user/', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((api) => setUser(api))
  }


  function handleDelete(id) {
    fetch(`http://localhost:3600/user/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    })
      .then((res) => res.json())
      .then((api) => {
        getAll();
      });
  }


  return (
    <div className='userpanel'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>User Panel</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>ADMIN PANEL</h1>
      <table border={1}>
        <tr>
          <th>id</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Role</th>
          <th>Delete</th>
        </tr>

        {user && user.map(item => (
          <tr>
            <td>{item._id}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <td><i className="fa-solid fa-trash-can" onClick={() => handleDelete(item._id)} ></i></td>

          </tr>
        ))}
      </table>




    </div>
  )
}

export default UserPanel
