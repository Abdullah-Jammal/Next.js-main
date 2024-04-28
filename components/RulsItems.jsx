'use client'
import Image from 'next/image'
import inst_image_one from '../images/Ruls/10.jpg'
import inst_image_two from '../images/Ruls/7-02.jpg'
import inst_image_three from '../images/Ruls/7-03.jpg'
import inst_image_four from '../images/Ruls/7-04.jpg'
import inst_image_five from '../images/Ruls/7-05.jpg'
import inst_image_six from '../images/Ruls/7-06.jpg'
import inst_image_seven from '../images/Ruls/7-07.jpg'
import inst_image_eight from '../images/Ruls/7-08.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';

const RulsItems = () => {
  const rulsScoop = useRef()
  gsap.registerPlugin(ScrollTrigger) 
  useGSAP(() => {
    gsap.to('.item-one', {
      scrollTrigger : {
        trigger : '.item-one img',
        start: "top center",
      },
      duration : 1.5,
      opacity : 1,
      scale : 1,
      ease: "elastic.out(1,0.6)",
      stagger : .2,
      markers : 1
    })
  }, [])
  return (
      <div className="container">
          <div className='items-container' id='item' ref={rulsScoop}>
              <div className="item-one">
                <Image src={inst_image_one} alt='Image Not Found' height = {370} width = {370}/>
              </div>
              <div className="item-one">
                <Image src={inst_image_two} alt='Image Not Found' height = {370} width = {370}/>
              </div>
              <div className="item-one">
                <Image src={inst_image_three} alt='Image Not Found' height = {370} width = {370}/>
              </div>
              <div className="item-one">
                <Image src={inst_image_four} alt='Image Not Found' height = {370} width = {370}/>
              </div>
              <div className="item-one">
                <Image src={inst_image_five} alt='Image Not Found' height = {370} width = {370}/>
              </div>
              <div className="item-one">
                <Image src={inst_image_six} alt='Image Not Found' height = {370} width = {370}/>
              </div>
              <div className="item-one">
                <Image src={inst_image_seven} alt='Image Not Found' height = {370} width = {370}/>
              </div>
              <div className="item-one">
                <Image src={inst_image_eight} alt='Image Not Found' height = {370} width = {370}/>
              </div>
          </div>
      </div>
  )
}

export default RulsItems
