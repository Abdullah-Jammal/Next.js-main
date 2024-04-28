'use client'
import Title from "@/components/Title";
import image1 from '../images/Education Content Pic/first-01.png'
import image2 from '../images/Education Content Pic/second-01.png'
import image3 from '../images/Education Content Pic/third-01.png'
import image4 from '../images/Education Content Pic/fifth-01.png'
import image5 from '../images/Education Content Pic/seventh-01.png'
import image6 from '../images/Education Content Pic/twelve-01.png'
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

const HomeContent = () => {
  const contentScoop = useRef()
  gsap.registerPlugin(ScrollTrigger) 
  useGSAP(() => {
    gsap.to('.education-content .one', {
      scrollTrigger : {
        trigger : '.content-boxes',
        start : 'top center'
      },
      opacity : 1,
      duration : 1.8,
      scale : 1,
      ease: "elastic.out(1,0.5)",
      stagger : .2
    })
    gsap.to('.education-content .box-one', {
      scrollTrigger : {
        trigger : '.content-boxes',
        start : 'top center'
      },
      opacity : 1,
      duration : 1.8,
      stagger : .1
    })
    gsap.to('.education-content .one', {
      scrollTrigger : {
        trigger: ".education-content .one",
        start: "top center",
      },
      delay : 2,
      duration : .1,
      transition : .3
    })
  }, [])

  return (
    <>
          <div className="education-content" ref={contentScoop}>
            <Title>المحتوى التعليمي</Title>
            <div className="container">
                <div className="content-boxes flex-center">
                    <div className="box-one flex-center">
                        <div className="one flex-center-col">
                            <Image src={image1} alt="Image Not Found" width={150} height={100} priority={false}/>
                            <p>تفاعلي ومشوق لجعل عملية التعلم ممتعة وملهمة (مسابقات، تمارين تفاعلية، محاكاة واقعية)</p>
                        </div>
                    </div>
                    <div className="box-one flex-center">
                        <div className="one flex-center-col">
                            <Image src={image2} alt="Image Not Found" width={150} height={130} priority={false}/>
                            <p>متسلسل ومرن ومنظمًا بشكل جيد لتسهيل الوصول إليه وفهمه</p>
                        </div>
                    </div>
                    <div className="box-one flex-center">
                        <div className="one flex-center-col">
                            <Image src={image3} alt="Image Not Found" width={150} height={100} priority={false}/>
                            <p>شامل لمجميع المناهج المقررة من قبل وزارة التربية العراقية</p>
                        </div>
                    </div>
                    <div className="box-one flex-center">
                        <div className="one flex-center-col">
                            <Image src={image4} alt="Image Not Found" width={150} height={100} priority={false}/>
                            <p>مدقق من قبل مشرفين معتمدين من وزاة التربية</p>
                        </div>
                    </div>
                    <div className="box-one flex-center">
                        <div className="one flex-center-col">
                            <Image src={image5} alt="Image Not Found" width={150} height={130} priority={false}/>
                            <p>يتحدث باستمرار ليتوافق مع كافة المعايير</p>
                        </div>
                    </div>
                    <div className="box-one flex-center">
                        <div className="one flex-center-col">
                            <Image src={image6} alt="Image Not Found" width={150} height={100} priority={false}/>
                            <p>محتوى مقروء ومرئي ومسموع لضمان استيعاب الطلبة للمادة الدراسية</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeContent
