import React, { useState } from 'react'
import './style.scss'

const Video = () => {
    const [show, setShow] = useState(false);

    function playVideo() {
        setShow(true);
    }

    function closeVideo() {
        setShow(false);
    }
    return (
        <div className='Video'>
            <div className={`video ${show ? "video-show" : ""}`}>
                {!show && (
                    <div className="play" onClick={playVideo}>
                        <div className="border">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                )}

                {show && (
                    <>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/QQgXTLutn7s?si=4x5o4Qbbm7o3ORGA"
                            title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                        </iframe>
                        <div className="close" onClick={closeVideo}>
                            <i class="fa-solid fa-x"></i>
                        </div>
                    </>
                )}
            </div>
        </div>

    );
}

export default Video
