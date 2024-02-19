import React from 'react'
import './style.scss'

const Media = () => {
    return (
        <div className='media'>

            <div className="car">
                <div data-aos="fade-up" className='girl'>
                    <img src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/preview.png"
                        alt="err" />
                </div>
                <div data-aos="fade-right" className='left'>
                    <img src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/dashboard.png" alt="" />
                </div>

                <div data-aos="fade-left" className='right'>
                    <img src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/post.png" alt="" />
                </div>
            </div>

            <div className="the" data-aos="fade-up">
                <img data-aos="fade-left" width={75} className='star-img' src="	https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-shape.svg" alt="err" />
                <h1 data-aos="fade-left">MEDIA PLAN</h1>
                <h2 data-aos="fade-left">FOR YOUR MARKETING CAMPAIGNT</h2>
                <p data-aos="fade-left">Maecenas blandit ante elit, eu convallis ligula condimentum ut. Orci varius natoque <br /> penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ante <br /> tortor, vulputate sit amet arcu</p>
                <button data-aos="fade-left" className='brand' ><a href="">Get Free Budget Calculation </a><i class="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
    )
}

export default Media
