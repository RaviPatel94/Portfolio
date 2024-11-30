import React, { useEffect, useRef } from 'react'
import {NavLink, Link} from "react-router-dom";

function Navbar() {
  const catimgref =useRef(null)
  const eyeref =useRef([])
    const eyetrack=(event)=>{
      eyeref.current.forEach((eye)=>{
        if (eye) { 
          const rect = eye.getBoundingClientRect();
          const eyeCenterX = rect.left + rect.width / 2;
          const eyeCenterY = rect.top + rect.height / 2;
          const deltaX = event.clientX - eyeCenterX;
          const deltaY = event.clientY - eyeCenterY;
          const angle = Math.atan2(deltaY, deltaX);
          const moveDistance = 2; //
          const xMove = Math.cos(angle) * moveDistance;
          const yMove = Math.sin(angle) * moveDistance;
          eye.style.transform = `translate(${xMove}px, ${yMove}px)`;
        }
      })
    }

    const handleCatClick = () => {
      if (catimgref.current) {
        catimgref.current.style.cursor = 'grabbing';
        setTimeout(() => {
          catimgref.current.style.cursor = 'grab';
        }, 200);
      }
    };

    useEffect(()=>{
      document.addEventListener("mousemove",eyetrack)

      if (catimgref.current) {
        catimgref.current.addEventListener('click', handleCatClick);
      }
    })

  return (
    <div>
        <nav className='flex justify-between fixed w-screen z-50'>
        <div className='text-3xl cursor-pointer w-[88px] pl-1'>Ravi</div>
        <ul className="flex gap-4 p-1 text-xl h-max">
            <li className='navlist'>
              Home
            </li>
            <li className='navlist'>Projects</li>
            <li className='navlist'><a href="https://github.com/RaviPatel94" target='blank'>GitHub</a></li>
            <li className='navlist'><a href="/ravi patel resume.pdf" target='blank'>Resume</a></li>
        </ul>
        <div>
            <img ref={catimgref} src="/images/cat.png" alt="Cat" width="90px" className=" cursor-grab peer"/>
            <div ref={(el) => (eyeref.current[0] = el)} className=" h-2 w-2 bg-black rounded-full absolute z-50 top-51 right-53 overflow-hidden " id="left-eye"><div className=" bg-white h-0.6 w-0.6"></div></div>
            <div ref={(el) => (eyeref.current[1] = el)} className=" h-2 w-2 bg-black rounded-full absolute z-50 top-51 right-29 overflow-hidden " id="right-eye"> <div className=" bg-white h-0.6 w-0.6"></div></div>
            <div className=' p-0.5 bg-primary border border-secondary opacity-0 peer-hover:opacity-100 cursor-default transition-opacity duration-700'>Hello visitor!</div>
          </div>
    </nav>
    </div>
  )
}

export default Navbar