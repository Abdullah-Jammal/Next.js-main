'use client'
import imageOne from '../images/Logos/ESchool_logo_white_holo.png'
import imageTwo from '../images/Application/app-store-logo.png'
import imageThree from '../images/Application/google_play.png'
import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram  } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <>
      <footer id='footer'>
          <div className="container">
              <div className="footer-container flex-between">
                  <div className="one footer-boxes">
                      <Image src={imageOne} width={100} height={100} priority = {false} alt='Image Not Found'/>
                  </div>
                  <div className="two footer-boxes">
                      <h4 className="footer-title">مواقع التواصل الاجتماعي</h4>
                      <div className="social-media">
                          <a target="_blank" href="https://www.instagram.com/eschooliraq/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"><FontAwesomeIcon icon={faInstagram} className='bar-icon special'/></a>
                          <a target="_blank" href="https://www.facebook.com/people/%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D8%AD%D9%83%D9%88%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9/100093468469379/"><FontAwesomeIcon icon={faFacebook} className='bar-icon special'/></a>
                          <a target="_blank" href="https://t.me/e_school_iq"><FontAwesomeIcon icon={faTelegram} className='bar-icon special'/></a>
                      </div>
                  </div>
                  <div className="three footer-boxes">
                      <h4 className="footer-title">الروابط المفيدة</h4>
                      <div className="links">
                          <p><Link href={'/instruction'}>أرشادات التسجيل</Link></p>
                          <p><Link href={'/ruls'}>ألانتساب</Link></p>
                      </div>
                  </div>
                  <div className="four footer-boxes">
                      <h4 className="footer-title">تطبيق المدرسة الاكترونية</h4>
                      <div className="app">
                          <div><a target="_blank" href="https://apps.apple.com/us/app/%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9/id6447380744"><Image src={imageTwo} width={150} height={45} alt='Image Not Found'/></a></div>
                          <div><a target="_blank" href="https://play.google.com/store/apps/details?id=com.creative.eschool"><Image src={imageThree} width={150} height={45} alt='Image Not Found'/></a></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="copyRight">
              © Copyright <span style={{fontWeight : 'bold'}}>Eschool</span>. All Rights Reserved 2024
          </div>
      </footer>
    </>
  )
}

export default Footer
