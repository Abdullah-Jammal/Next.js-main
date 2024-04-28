'use client'

import Link from "next/link";
import { useRef, useEffect, createRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  const navScoop = useRef();
  // Create an array of refs
  const listItems = useRef([]);
  listItems.current = Array(5).fill().map((_, i) => listItems.current[i] ?? createRef());

  useGSAP(() => {
    gsap.to("nav ul li", {
      opacity: 1,
      stagger: 0.1,
      ease: "power4.out",
      y: 0,
      duration: 0.4
    });
  }, navScoop);

  function animate(index) {
    gsap.to(listItems.current[index].current, {
      ease: "power4.out",
      y: -3,
      duration: 0.3
    });
  }

  function endAnimation(index) {
    gsap.to(listItems.current[index].current, {
      ease: "power4.out",
      y: 0,
      duration: 0.3
    });
  }

  return (
    <nav ref={navScoop}>
      <ul className="flex-between nav-list">
        {['/', '/ruls', '#footer', '/instruction', '/faq'].map((path, index) => (
          <li key={index}
              ref={listItems.current[index]}
              onMouseEnter={() => animate(index)}
              onMouseLeave={() => endAnimation(index)}>
            {path === '/' ? <Link href={'/'}>الصفحة الرئيسية</Link> : <Link href={path}>{['الصفحة الرئيسية', 'الانتساب', 'تواصل معنا', 'ضوابط وشروط التسجيل', 'الاسئلة الشائعة'][index]}</Link>}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

{/* <a href={path}>الصفحة الرئيسية</a> */}