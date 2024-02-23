import React, { useEffect, useRef, useState } from 'react'
import './style.scss'

const Add = () => {
    const [data, setData] = useState([])

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [discount, setDiscount] = useState('')
    const myFileInput = useRef()

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



    return (
        <div className='add'>
            <div className="nav"></div>
            <h1>ADD PAGES</h1>

            <form onSubmit={mysubmit}>
                <input style={{ display: "none" }}
                    type="file"
                    placeholder='Image'
                    onChange={(e) => setImage(e.target.files[0])}
                    ref={myFileInput} />

                <div onClick={() => { myFileInput.current.click() }}>
                    <i className='fa-solid fa-upload'></i>
                    <span>Add Image</span>
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


            <table border={1}>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>

                {data
                    .map(item => (
                        <tr>
                            <td>
                                {item.image.toLowerCase().endsWith('.mp4') ? (
                                    <video width={200} height={230}  src={item.image}></video>
                                ) : (
                                    <img width={200} height={230} src={item.image} alt="" />
                                )}
                            </td>
                            <td>{item.name}</td>
                            <td>$ {item.price}</td>
                            <td>$ {item.discount}</td>
                            <td></td>
                            <td><i className="fa-solid fa-trash-can" onClick={()=> handleDelete(item._id)} ></i></td>
                        </tr>
                    ))}
            </table>




        </div>
    )
}

export default Add
