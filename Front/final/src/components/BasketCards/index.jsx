import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContex'
import './style.scss'

const BasketCards = () => {
    const { basket, addBasket, increaseCount, decreaseCount, remove } = useContext(BasketContext)

    return (
        <div className='basket'>

            <table border={1}>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Delete</th>
                </tr>

                {basket.map(item => (
                    <tr key={item.id}>
                        <td>
                            {item.image && (
                                <>
                                    {item.image.toLowerCase().endsWith('.mp4') ? (
                                        <video width={100} height={130} src={item.image}></video>
                                    ) : (
                                        <img width={100} height={130} src={item.image} alt="" />
                                    )}
                                </>
                            )}
                        </td>
                        <td>{item.name}</td>
                        <td>$ {item.discount ? item.discount * item.count : item.price * item.count}</td>
                        <td>
                            <i className="fa-solid fa-caret-up" onClick={() => increaseCount(item)}></i>
                            <h2>{item.count}</h2>
                            <i className="fa-solid fa-caret-down" onClick={() => decreaseCount(item)}></i>
                        </td>
                        <td><i className="fa-solid fa-trash-can" onClick={() => remove(item)} ></i></td>
                    </tr>
                ))}

            </table>

        </div>
    )
}

export default BasketCards
