import React from 'react'

function Hero() {
  return (
    <div className='h-screen flex flex-col justify-center items-center ' id='hero'>
        <h2 className='font-normal text-24 leading-tight' >Hello, i am</h2>
        <h1 className=' font-normal text-8xl leading-[1] h-max' >Ravi Patel</h1>
        <h2  className='font-normal text-24 pt-1'>a Web developer & Designer</h2>
    </div>
  )
}

export default Hero