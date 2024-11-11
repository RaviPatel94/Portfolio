import React from 'react'

function About() {
  return (
    <div className=' h-screen flex justify-center items-center flex-row grid-rows-2 gap-5'>
      <div className=' max-w-lg'> <div className=' text-3xl pb-5'>About Me</div> 
      <div className='text-lg'> Hi, i am a ethusiaistic developer from india currently in third year B.Tech in an engineering college. i like designing and developing and bringing beutiful and functional websites to life!. 
        Also intrested and implementing in Data science and Artificial intelligence.
      </div>
      </div>
      <div><img src="/images/Ravi.jpg" alt="" className='h-96 rounded-xl' /></div>
    </div>
  )
}

export default About