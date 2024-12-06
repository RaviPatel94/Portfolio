import React from 'react'
import TypedText from './TypedText'

function Hero() {
  return (
    <div className='h-screen flex flex-col justify-center items-center ' id='hero'>
        <h2 className='font-normal text-24 leading-tight' >Hello, i am</h2>
        <h1 className=' font-normal text-7xl sm:text-8xl leading-[1] h-max' >Ravi Patel</h1>
        <div className='w-[340px] flex justify-start items-start'>
        <h2  className='font-normal text-24 pt-1 flex gap-2 justify-start items-start '>
          a <TypedText
          strings={["Web developer and Designer","Student and Enthusiast"]}
          typeSpeed={70}
          backSpeed={30}
          backDelay={2000}
          />
        </h2>
        </div>
    </div>
  )
}

export default Hero