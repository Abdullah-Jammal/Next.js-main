'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Video from './Video';

export default function TopSection() {
    const [newShowVideo, setNewShowvideo] = useState(false)
    function handelVideo() {
        setNewShowvideo(e => !e)
    }
    return (
        <>
            <div className="top-section">
                <div className="container">
                    <div className="top-section-container">
                        <div className="top-two">
                            <a target="_blank" href="https://www.instagram.com/eschooliraq/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"><FontAwesomeIcon icon={faInstagram} className='bar-icon-new '/></a>
                            <a target="_blank" href="https://www.facebook.com/people/%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D8%AD%D9%83%D9%88%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9/100093468469379/"><FontAwesomeIcon icon={faFacebook} className='bar-icon-new'/></a>
                            <a target="_blank" href="https://t.me/e_school_iq"><FontAwesomeIcon icon={faTelegram} className='bar-icon-new '/></a>
                        </div>
                        <div className="top-one">
                            <div className="first-section">
                                <div className="phone-icon">
                                <span>5020</span>    <FontAwesomeIcon icon={faPhoneAlt}/>
                                </div>
                            </div>
                            <div className="first-section">
                                <span className='newWatchVideo' onClick={() => handelVideo()}>شاهد</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {newShowVideo ? <Video handelVideo = {handelVideo}/> : ''}
        </>
    )
}

