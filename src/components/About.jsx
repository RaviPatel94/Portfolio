import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import TypedText from './TypedText';

function About() {
  useEffect(()=>{
    Aos.init({duration:400});
  },[])
  return (
    <div className=' sm:h-screen flex flex-col sm:flex-row justify-center items-center gap-5 transition-transform'>
      <div className=' max-w-lg flex flex-col items-center'> 
      <div className=' text-3xl pb-5'>About Me</div> 
      <div className=' sm:w-[480px] h-[194px] sm:h-[166px] text-lg sm:text-xl px-5 '> 
        <TypedText
        strings={["I am an enthusiastic developer from India, currently pursuing a B.Tech degree in my third year at an engineering college. I have a passion for designing and developing visually appealing and highly functional websites. Additionally, I am keenly interested in data science and artificial intelligence and actively explore their implementation in real-world projects."]}
        typeSpeed={20}
        backSpeed={0}
        loop={false}
        />
      </div>
      </div>
      <div><img src="/images/Ravi.jpg" alt="" className=' h-80 sm:h-96 sm:min-w-80 rounded-xl' data-aos="fade-up" /></div>
    </div>
  )
}

export default About