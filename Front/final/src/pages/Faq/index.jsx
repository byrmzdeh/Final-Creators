import React from 'react'
import Question from '../../components/Question'
import {Helmet} from "react-helmet";


const Faq = () => {
  return (
    <div>
      <Helmet>
        <title> FAQ</title>
        <link
          rel="icon"
          href="https://toppng.com/uploads/preview/asked-questions-faq-11563545620aeqcvkksi0.png"
        />
      </Helmet>

      <Question />

    </div>
  )
}

export default Faq
