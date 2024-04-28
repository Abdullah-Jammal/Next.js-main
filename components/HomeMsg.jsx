'use client'
import { useRef} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

const HomeMsg = () => {

  const msgScoop = useRef(null)

  useGSAP(() => {
    gsap.to('.msg', {
      scrollTrigger : {
        trigger : '.msg',
        start : 'top center'
      },
      duration : .5,
      opacity : 1,
      height : 290
    })
  }, [])

  return (
    <>
      <div className="msg" ref={msgScoop}>
          <div className="container">
              <div className="msg-container">
                  <h2 className="msg-title">الرسالة</h2>
                  <p>نلتزم بتقديم تعليم عالي الجودة ومبتكر، يتسم بالتفاعل والمرونة والتكنولوجيا المتقدمة. نعمل على توفير بيئة تعليمية تشجع على حب المعرفة والتعلم وتعزز التفكير النقدي وتنمية مهارات الطلاب، وذلك من خلال توفير منصات تعليمية شاملة ومحتوى متميز يلبي احتياجات وتطلعات الطلاب.</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default HomeMsg