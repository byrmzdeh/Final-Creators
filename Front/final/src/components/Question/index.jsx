import { useEffect, useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

import React from 'react'

const Question = ({ showAll = false }) => {
    const [faqData, setFaqData] = useState([]);
    const [show, setShow] = useState(null);



    useEffect(() => {
        fetch("http://localhost:3600/faq")
            .then((res) => res.json())
            .then((data) => setFaqData(data));
    }, []);

    return (
        <section id="faqs">
            <div className="all">
                <img width={75} className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-shape-1.svg" alt="err" />
                <h1  >FAQ</h1>
                <h2 >ALL THE QUESTIONS YOU OFTEN ASK</h2>
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
                {/* <button className="faq_button">
            <NavLink className={"active"} to={"/faq"}>
              Daha Cox
            </NavLink>
          </button> */}
                {/* <TitleButton text={"daha cox"}></TitleButton> */}
            </div>

        </section>



    );
}

export default Question


