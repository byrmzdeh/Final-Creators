import { useEffect, useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

import React from 'react'

const Question = ({ showAll = false }) => {
    const [faqData, setFaqData] = useState([]);
    const [show, setShow] = useState(null);

    const [mail, setmail] = useState('')
    const [pass, setpass] = useState('')
    const [mesage, setmesage] = useState('')
    const [alerttext, setalerttext] = useState('')
    const [border, setborder] = useState('')

    const submit = (e) => {
        e.preventDefault();
        if (mail === '' || pass === '') {
            setalerttext('One or more fields have an error. Please check and try again.');
            setborder('danger');
           
        } else {
            setalerttext('Thank you for your message. It has been sent.');
            setborder('success');
            
        }
    }

    useEffect(() => {
        fetch("http://localhost:3600/faq")
            .then((res) => res.json())
            .then((data) => setFaqData(data));
    }, []);

    return (
        <section id="faqs">
            <div className="all">
                <img width={75} className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-shape.svg" alt="err" />
                <h1  >FAQ</h1>
                <h2 >ALL THE QUESTIONS YOU OFTEN ASK</h2>

                <form onSubmit={submit} >
                    <div  className="input"  >
                        <input type="text"   placeholder='Your Name or Brand' onChange={e => { setpass(e.target.value) }} />
                        <input type="email"  placeholder='Your Contact E-mail' onChange={e => { setmail(e.target.value) }}  />
                    </div>
                    <div >
                        <textarea  placeholder='Your Question' cols={63} rows={10} onChange={e => { setmesage(e.target.value) }} />
                    </div>
                    <p className={`border border-${border}`}>{alerttext}</p>
                    <button type="submit">Send a Question </button>

                </form>
            </div>
            <div className="faqs">
                <div className="faqs_content">
                    {faqData.map((x, index) => (
                        <div className="faq_card" key={x.key}>
                            <div
                                className=" question"
                                onClick={() => setShow(show === index ? null : index)}
                            >
                                <span
                                    style={
                                        show === index
                                            ? { backgroundColor: "black", color: "white" }
                                            : {}
                                    }
                                >
                                    {index + 1}
                                </span>
                                <p style={{ color: `${show === index ? "gray" : ""}` }}>

                                    {x.question}
                                </p>
                                <i
                                    className={`fa-solid ${show === index ? " fa-chevron-down" : "fa-chevron-right"
                                        } `}
                                ></i>
                            </div>
                            {show === index && (
                                <p className="answer" > {x.answer} </p>
                            )}
                        </div>
                    ))}
                </div>
              
            </div>

        </section>



    );
}

export default Question


