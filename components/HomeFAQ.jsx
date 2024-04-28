'use client'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';

const HomeFAQ = () => {

  const faqScoop = useRef()

  gsap.registerPlugin(ScrollTrigger) 

  useGSAP(() => {
    gsap.to('.faq .faq-box .two', {
      scrollTrigger : {
        trigger : '.faq .faq-box',
        start : 'top center'
      },
      opacity : 1,
      right : 0,
      duration : 1,
      stagger : 0.2
    })
  }, [])

  return (
    <>
      <div className="faq" ref={faqScoop}>
        <h2 className="special-title">شروط التقديم للامتحانات التمهيدية والتسجيل في المدرسة الحكومية الالكترونية للعام الدراسي 2024/2025</h2>
              <div className="faq-box flex-center-col">
                  <div className="one">
                      <h3>شروط التقديم للانتساب</h3>
                  </div>
                  <div className="two">
                      <p>1 -  يشمل نظام الانتساب الطلبة الذين يرغبون في الانتساب لاي سبب كان ضمن الفئات التالية</p>
                      <ol>
                          <li>المدارس الحكومية بكافة المراحل الدراسية ( صباحي و مسائي )</li>
                          <li>مدارس خارج العراق ( الحكومية و الاهلية ) لكافة المراحل الدراسية</li>
                      </ol>
                  </div>
                  <div className="two">
                      <p>2 -  يبدأ التسجيل لنظام الدوام بالانتساب للعام الدراسي 2025 / 2024 اعتبارا من 2024/04/01</p>
                  </div>
                  <div className="two">
                      <p>3 -  يكون دوام الطالب بالانتساب الكترونيا عبر بوابة المدرسة الحكومية الاكترونية , ويؤدي الامتحانات ( نصف السنة ونهاية السنة ) حضوريا في مدرسته</p>
                  </div>
                  <div className="two">
                      <p>4 -  لا يمكن الغاء الدوام بالانتساب وعلى ولي امر الطالب ان يقدم تعهدا خطيا بعدم الغاء الدوام بالانتساب</p>
                  </div>
                  <div className="two">
                      <p>5 -  يكون تقديم الدوام بالانتساب عبر المدرسة الحكومية الاكترونية حصرا</p>
                  </div>
                  <div className="two">
                      <p>6 -  استثناء ابناء الشهداء من القوات المسلحة ( جيش/شرطة/حشد شعبي ) من اجور التسجيل والاشتراك في المدرسة الحكومية الالكترونية وتكون مجانا</p>
                  </div>
              </div>
      </div>
    </>
  )
}

export default HomeFAQ

