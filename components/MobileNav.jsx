'use client'
import Link from "next/link"

const MobileNav = ({specificStyle, newStyle, handelMobile}) => {
  return(
    <>
      <div className="mobile-nav flex-center" style={specificStyle ? newStyle : null}>
        <span className="closeBurger flex-center" onClick={() => handelMobile()}>X</span>
        <ul>
          <li className="flex-center"><Link href={'/'}>الصفحة الرئيسية</Link></li>
          <li className="flex-center"><Link href={'/ruls'}>الانتساب</Link></li>
          <li className="flex-center"><Link href={'#footer'}>أتصل بنا</Link></li>
          <li className="flex-center"><Link href={'/instruction'}>ضوابط وشروط التسجيل</Link></li>
          <li className="flex-center"><Link href={'/faq'}>الاسئلة الشائعة</Link></li>
        </ul>
      </div>
    </>
  )
}

export default MobileNav
