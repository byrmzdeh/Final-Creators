import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Counter = () => {
  const [countOn, setCountOn] = useState(false)
  return (
    <div>
      <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)} >
        <h1>
          {countOn && <CountUp start={0} end={840000} delay={0.2} duration={2} />}
          +
        </h1>
      </ScrollTrigger>


    </div>
  )
}

export default Counter
