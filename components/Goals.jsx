'use client'
import Title from "@/components/Title";
import golasImage from '../images/57691.jpg'
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Goals = () => {
  const goalScoop = useRef()
  gsap.registerPlugin(ScrollTrigger) 
  useGSAP(() => {
    gsap.to('.goals .one', { 
      scrollTrigger: {
        trigger: ".one",
        start: "top center",
      },
      duration : 1.7,
      y : 0,
      stagger : .2,
      ease: "power4.out",
      opacity : 1
    })
    gsap.to('.goals .one', {
      scrollTrigger : {
        trigger: ".one",
        start: "top center",
      },
      delay : 2,
      duration : .1,
      transition : .3
    })
  }, goalScoop)

  return (
    <>
          <div className="goals" id="goals" ref={goalScoop}>
            <div className="container">
                <Title>أهداف المدرسة الالكترونية</Title>
                <div className="goals-container flex-between">
                    <div className="goal-right">
                        <div className="one flex-start">
                            <p className="numPara flex-center">1</p>
                            <p className="secPara">توفير حل جزئي لمشكلة الاكتظاظ في المدارس العراقية.</p>
                        </div>
                        <div className="one flex-start">
                            <p className="numPara flex-center">2</p>
                            <p className="secPara">وفير البديل لمواصلة الدراسة والتعليم للطلبة الذين يعانون من مشاكل صحية تمنعهم من الأستمرار بالدراسة في المدارس بشكل حضوري.</p>
                        </div>
                        <div className="one flex-start">
                            <p className="numPara flex-center">3</p>
                            <p className="secPara">توفير بديل لمواصلة الدراسة والتعليم للطلبة الساكنين في المناطق النائية جغرافيا التي لا يتوفر فيها مدارس قريبة او تشكو من صعوبة التنقل خلالها.</p>
                        </div>
                        <div className="one flex-start">
                            <p className="numPara flex-center">4</p>
                            <p className="secPara">تمكين الطلاب من استخدام التكنولوجيا بشكل فعال وإثراء تجربتهم التعليمية.</p>
                        </div>
                    </div>
                    <div className="goal-left">
                        <Image src={golasImage} alt="Image Not Found" width={500} height={500}  priority={true}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Goals