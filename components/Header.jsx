'use client'

import Image from 'next/image'
import MobileNav from './MobileNav'
import Nav from "./Nav"
import MistaryImage from '../images/Logos/ministry_of_education_logo.png'
import E_School_Logo from '../images/Logos/ESchool_logo_light.png'
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  // Start Gsap Animation
  const navScoop = useRef()
  useGSAP(() => {
    gsap.to('.e-school-logo', {
      duration : .5,
      opacity : 1,
      x : 0
    })
    gsap.to('.minstry-logo', {
      duration : .5,
      opacity : 1,
      x : 0
    })
  }, navScoop)
  // End Gsap Animation

  const [specificStyle, setspecificStyle] = useState(false)
  const newStyle = {
    width : '100%',
    right : '0'
  }

  function handelMobile() {
    setspecificStyle(e => !e)
  }

  return (
    <header className='flex-center' ref={navScoop}>
      <MobileNav specificStyle = {specificStyle} newStyle = {newStyle} handelMobile = {handelMobile}/>
      <div className="container">
        <div className="header-container flex-between">
          <div className="mobile-icon">
          <FontAwesomeIcon  onClick={() => handelMobile()} icon={faBars} className='bar-icon'/>
          </div>
          <div className="e-school-logo">
            <Image src={E_School_Logo} alt='Image Not Found' width={120} height={55} priority={true}/>
          </div>
          <Nav/>
          <div className="minstry-logo">
            <Image src={MistaryImage} alt='Image Not Found' width={60} height={60} priority={true}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
