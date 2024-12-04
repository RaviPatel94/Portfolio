import React from 'react'

function About() {
  return (
    <div className=' sm:h-screen flex flex-col sm:flex-row justify-center items-center gap-5'>
      <div className=' max-w-lg flex flex-col items-center'> 
      <div className=' text-3xl pb-5'>About Me</div> 
      <div className='text-lg text-justify px-5'> Hi, i am a ethusiaistic developer from india currently in third year B.Tech in an engineering college. i like designing and developing and bringing beutiful and functional websites to life!. 
        Also intrested and implementing in Data science and Artificial intelligence.
      </div>
      </div>
      <div><img src="/images/Ravi.jpg" alt="" className=' h-80 sm:h-96 sm:min-w-80 rounded-xl' /></div>
    </div>
  )
}

export default About