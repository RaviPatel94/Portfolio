import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import TypedText from './TypedText';

function About() {
  const images = ["/images/Ravi.jpg", "/images/ravi2.jpg", "/images/ravi3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 400 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [images.length]);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='sm:h-screen flex flex-col lg:flex-row justify-center items-center gap-5 transition-transform'>
      <div className='max-w-lg flex flex-col items-center'>
        <div className='text-3xl pb-5'>About Me</div>
        <div className='sm:w-[480px] h-[280px] sm:h-[166px] text-lg sm:text-xl px-5'>
          <TypedText
            strings={[
              "I am an enthusiastic developer from India, currently pursuing a B.Tech degree in my Fourth year at an engineering college. I have a passion for designing and developing visually appealing and highly functional websites. Additionally, I am keenly interested in data science and artificial intelligence and actively explore their implementation in real-world projects."
            ]}
            typeSpeed={20}
            backSpeed={0}
            loop={false}
          />
        </div>
      </div>
      <div>
        <img
          src={images[currentImageIndex]}
          alt="Ravi"
          className='h-80 sm:h-96 sm:min-w-80 rounded-xl cursor-pointer transition-opacity duration-500 object-cover'
          data-aos="fade-up"
          onClick={handleImageClick}
        />
      </div>
    </div>
  )
}

export default About
