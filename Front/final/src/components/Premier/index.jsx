import React from 'react'
import './style.scss'

const Premier = () => {
    return (
        <div className='premier'>

            <div className="car">
                <div data-aos="fade-up" className='girl'>
                    <img src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/stories.png"
                        alt="err" />
                </div>
                <div data-aos="fade-right" className='left'>
                    <img  src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/youtube.png" alt="" />
                </div>

                <div data-aos="fade-left" className='right'>
                    <img  src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/post.png" alt="" />
                </div>
            </div>

            <div className="the" data-aos="fade-up">
                <img data-aos="fade-left" width={75} className='star-img' src="	https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-shape.svg" alt="err" />
                <h1 data-aos="fade-left">THE PREMIER</h1>
                <h2 data-aos="fade-left">INFLUENCER MARKETING CONTENT</h2>
                <p data-aos="fade-left">Maecenas blandit ante elit, eu convallis ligula condimentum ut. Orci varius natoque <br /> penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ante <br /> tortor, vulputate sit amet arcu</p>
                <div className='button' data-aos="fade-left">
                    <button className='brand' ><a href="">I'm a brand </a><i class="fa-solid fa-arrow-right"></i></button>
                    <button className='creator'><a href="">I'm a creator </a><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

        </div>
    )
}

export default Premier
