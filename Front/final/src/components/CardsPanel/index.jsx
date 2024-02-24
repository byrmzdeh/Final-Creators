import React, { useContext, useEffect, useRef, useState } from 'react'
import './style.scss'
import { Helmet } from 'react-helmet'
import { UserContext } from '../../context/UserContext'

const CardsPanel = () => {
    const [data, setData] = useState([])

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const myFileInput = useRef()

    const [input, setInput] = useState('')
    const [sortBy, setSortBy] = useState(null)
    const {token} = useContext(UserContext)




    useEffect(() => {
        getAll()
    }, [])


    function mysubmit(e) {
        e.preventDefault();

        const formData = new FormData()
        formData.append('image', image)
        formData.append('name', name)
        formData.append('price', price)
        formData.append('discount', discount)

        fetch('http://localhost:3600/cards', {
            method: 'post',
            body: formData
        });
        setName("")
        getAll()
    }


    function getAll() {
        fetch('http://localhost:3600/cards')
            .then((res) => res.json())
            .then((api) => setData(api))
    }


    function handleDelete(id) {
        fetch("http://localhost:3600/cards/" + id, { method: "DELETE" })
            .then((res) => res.json())
            .then((api) => {
                getAll()
            })
    }

    function lower(data) {
        if (typeof data === 'string') {
            return data.toLowerCase()
        }
        return data
    }




    return (
        <div className='add'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Admin Panel</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="nav"></div>
            <h1> ADMIN PANEL</h1>

            <form onSubmit={mysubmit}>
                <input style={{ display: "none" }}
                    type="file"
                    placeholder='Image'
                    onChange={(e) => setImage(e.target.files[0])}
                    ref={myFileInput} />

                <div onClick={() => { myFileInput.current.click() }}>
                    <i className='fa-solid fa-upload'></i>
                    <span>AdminPanel Image</span>
                </div>
                <br />
                <input
                    id='name'
                    type="text"
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)} />
                <br />
                <input
                    type="text"
                    placeholder='Price'
                    onChange={(e) => setPrice(e.target.value)} />
                <br />
                <input
                    type="text"
                    placeholder='Discount'
                    onChange={(e) => setDiscount(e.target.value)} />

                <button>Send</button>
            </form>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search Products...' />
            <div className="buttons">
                <button onClick={() => setSortBy({ preporty: 'name', asc: true })}>A-Z</button>
                <button onClick={() => setSortBy({ preporty: 'name', asc: false })}>Z-A</button>
                <button onClick={() => setSortBy({ preporty: 'price', asc: true })}>INCREASE</button>
                <button onClick={() => setSortBy({ preporty: 'price', asc: false })}>DECREASE</button>
                <button onClick={() => setSortBy(null)}>DEFAULT</button>
            </div>



            <table border={1}>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Delete</th>
                </tr>

                {data
                    .filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
                    .sort((a, b) => {
                        if (!sortBy) {
                            return 0
                        } else if (sortBy.asc) {
                            return (lower(a[sortBy.preporty]) > lower(b[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty]) > lower(a[sortBy.preporty])) ? -1 : 0)
                        } else if (sortBy.asc === false) {
                            return (lower(a[sortBy.preporty]) < lower(b[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty]) < lower(a[sortBy.preporty])) ? -1 : 0)
                        }
                    })
                    .map(item => (
                        <tr>
                            <td>
                                {item.image.toLowerCase().endsWith('.mp4') ? (
                                    <video width={200} height={230} src={item.image}></video>
                                ) : (
                                    <img width={200} height={230} src={item.image} alt="" />
                                )}
                            </td>
                            <td>{item.name}</td>
                            <td>$ {item.price}</td>
                            <td>$ {item.discount}</td>
                            <td><i className="fa-solid fa-trash-can" onClick={() => handleDelete(item._id)} ></i></td>
                        </tr>
                    ))}
            </table>




        </div>
    )
}

export default CardsPanel
