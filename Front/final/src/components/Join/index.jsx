import React from 'react'
import Counter from '../../layouts/Counter'
import VideoFront from '../../png/ball.mp4'
import './style.scss'
const Join = () => {

    return (
        <div className='join'>

            <div className='countup'>
                <img width={75} className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-light-shape.svg" alt="err" />
                <div className='number' data-aos="fade-left">
                    <h1>JOIN</h1>
                    <Counter />
                </div>
                <h1 data-aos="fade-left">CREATORS</h1>
                <h1 data-aos="fade-left">AND</h1>
                <h1 data-aos="fade-left">BRANDS</h1>

                <div className='button' data-aos="fade-left">
                    <button className='brand' ><a href="">I'm a brand </a><i class="fa-solid fa-arrow-right"></i></button>
                    <button className='creator'><a href="">I'm a creator </a><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

            <video className='video' src={VideoFront} controls autoPlay></video>

        </div>
    )
}

export default Join
