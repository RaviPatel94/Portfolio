import React from 'react'

function Footer() {
  return (
        <div className='py-9 text-center overflow-hidden'>
        <h1 className='text-3xl sm:pl-16 pb-10'>Contact</h1>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-28'>
        <div data-aos="fade-up" data-aos-offset="100" >
            <h1 className='text-2xl mb-7' >Socials</h1>
            <div className=' flex flex-col gap-4'>
            <a href="https://github.com/RaviPatel94" target='_blank'>
            <div className='socialbox'>
              <img src="/images/github.png" alt="github logo" className='h-[75px] mx-3 my-[7px]' />
              <div className='text-primary flex flex-col justify-center'>
                <div className='text-2xl'>Github</div>
                <div className='text-lg'>RaviPatel94</div>
              </div>
            </div>
            </a>
            <a href="https://leetcode.com/u/ravipatel94/" target='_blank'>
            <div className='socialbox'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="github logo" className='h-[75px] mx-3 my-[7px]' />
              <div className='text-primary flex flex-col justify-center'>
                <div className='text-2xl'>Leetcode</div>
                <div className='text-lg'>RaviPatel94</div>
              </div>
            </div>
            </a>
            <a href="https://www.linkedin.com/in/ravi-patel94/" target='_blank'>
            <div className='socialbox'>
            <img src="/images/linkedin.png" alt="github logo" className='h-[75px] mx-3 my-[7px]' />
              <div className='text-primary flex flex-col justify-center'>
                <div className='text-2xl'>Linkedin</div>
                <div className='text-lg'>RaviPatel94</div>
              </div>
            </div>
            </a>
            
            </div>
        </div>
        <div className='mailbox' data-aos="fade-up" data-aos-offset="100">
            <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-2xl'>Mail me</h1>
            <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col justify-center items-center max-w-[250px] gap-4'>
            <input type="hidden" name="access_key" value="f452ef1d-ac63-4571-a65a-ba9e3eb41901"></input>
            <input type="text" placeholder='Name' name="name" className=' w-64 h-9 rounded-md bg-secondarylight text-primary outline-none px-3 placeholder-primary mt-3 ' required />
            <input type="email" placeholder='Email' name="Email" className=' w-64 h-9 rounded-md bg-secondarylight text-primary outline-none px-3 placeholder-primary' required />
            <input type="text" placeholder='Query/ Feedback' name="message" className=' w-64 h-9 rounded-md bg-secondarylight text-primary outline-none px-3 placeholder-primary mb-3' required/>
            <input type="submit" className='text-lg border border-secondarylight px-3 py-[2px] rounded-md w-max cursor-pointer hover:bg-secondarylight  hover:text-primary hover:rounded-xl transition-all duration-300 ' />
            </form>
            </div>
        </div>
        <div data-aos="fade-up" data-aos-offset="100">
          <img src="images\catcode.gif" alt="cat on code gif" className='h-80 opacity-75 rounded-lg' />
        </div>
        </div>
        </div>
  )
}

export default Footer