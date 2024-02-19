import React, { useEffect, useState } from 'react'
import './style.scss'

const Faq = () => {
  const [faq , setFaq] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/faq')
    .then((res)=>res.json())
    .then((api)=>setFaq(api))
  })
  return (
    <div className='faq'>
      {faq.map(item=>(
        <div className="faqs">
          <h1>{item.question}</h1>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default Faq
