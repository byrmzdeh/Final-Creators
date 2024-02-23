import React, { useState } from 'react'
import './style.scss'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Full = () => {

  const [iframe, setIframe] = useState(false)

  function handleVideoToggle() {
    setIframe(!iframe)
  }
  useEffect(() => {
    const text = document.querySelector(".text");
    text.innerHTML = text.innerText
      .split("")
      .map(
        (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
      )
      .join("");
    AOS.init();
  }, []);

  return (
    <div className='full'>

      <img className='up' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/logo-white.svg" alt="" />

      <div className="big">
        <div className="service">
          <img width={75} className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-light-shape.svg" alt="err" />
          <h1 data-aos="fade-left" >FULL-SERVICE  <br /> CONTENT CREATION <br /> AGENCY</h1>
        </div>

        <div className="cat">

          <div className="circle">
            <div class="logo"></div>
            <div class="text">
              <p>
                Some text - Animated circle text -
              </p>

            </div>
            {/* <i className="fa-solid fa-play" onClick={() => handleVideoToggle()}>

              {iframe ? (
                <div className="video">
                  <iframe
                    width="1130"
                    height="760"
                    src="https://www.youtube.com/embed/SfMT4Agg8Xw"
                    title=""
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <button onClick={() => {
                    handleVideoToggle()
                  }}>X</button>
                </div>
              ) : null}
            </i> */}
          </div>

          <img src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/herodoggo.png" alt="" />
          <div className='icons'>
            <a href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram"></i></a>
            <a href="https://www.tiktok.com/"><i className="fa-brands fa-tiktok"></i></a>
            <a href="https://www.youtube.com/"><i className='fa-brands fa-youtube'></i></a>
            <a href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook"></i></a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Full
