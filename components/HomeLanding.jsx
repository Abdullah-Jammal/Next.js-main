'use client'
import Image from "next/image"
import LandingPage from '../images/hero-img.png'
import AppStore from '../images/Application/app-store-logo.png'
import Google from '../images/Application/google_play.png'
import Video from "./Video"
import { useState } from "react"

const HomeLanding = () => {

  const [showVideo, setShowvideo] = useState(false)
  function handelShowVideo() {
    setShowvideo(e => !e)
  }

  return (
    <>
      <div className="landing-page">
        <div className="container">
          <div className="landing-container flex-between">
            <div className="landing-info">
                <h1 className="main-title">المدرسة الحكومية <span style={{color : '#00c3ff'}}>الالكترونية</span></h1>
                <p className="main-para">هي إحدى التطبيقات الحديثة للتعلم المبني على الإنترنت، وهي عبارة عن بيئة الكترونية تشتمل على اتصالات أو أماكن خاصة يتواجد فيها المتعلمون، ويرتبطون مع بعضهم بعضاً ومع المحاضر <span style={{color : '#00c3ff'}}>عن طريق الإنترنت</span>، حيث يتم تقديم برامج تعليم عن بُعد ذات جودة أكاديمية، ونوعية متميزة.</p>
                <div className="app">
                    <a className="appStore" href="https://apps.apple.com/us/app/%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9/id6447380744" target="blank"><Image className="app-google-image" src={AppStore} alt="Page Not Found" width={160} height={50}/></a>
                    <a href="https://play.google.com/store/apps/details?id=com.creative.eschool" target="blank"><Image className="app-google-image" src={Google} alt="Page Not Found" width={160} height={50}/></a>
                </div>
                <span className="watchViedo flex-center" onClick={() => handelShowVideo()}>شاهد</span>
            </div>
            <div className="landing-image">
              <Image src={LandingPage} alt="Page Not Found" width={500} height={400}  priority={true}/>
            </div>
            <a href="#goals" className="specialHrefTag"><span className="landing-span"></span></a>
          </div>
          </div>
      </div>
      {showVideo ? <Video handelShowVideo = {handelShowVideo}/> : ''}
    </>
  )
}

export default HomeLanding

