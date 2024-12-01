import React from 'react'

function Footer() {
  return (
    <div>
        <div className='py-9'>
        <h1 className='text-3xl pl-16 pb-10'>Contact</h1>
        <div className='flex justify-center items-center gap-28'>
        <div className='mailbox'>
            <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-2xl'>Mail me</h1>
            <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col justify-center items-center max-w-[250px] gap-4'>
            <input type="hidden" name="access_key" value="f452ef1d-ac63-4571-a65a-ba9e3eb41901"></input>
            <input type="text" placeholder='Name' name="name" className=' w-64 h-9 rounded-md bg-secondarylight text-white outline-none px-3 placeholder-primary mt-3 ' required />
            <input type="email" placeholder='Email' name="Email" className=' w-64 h-9 rounded-md bg-secondarylight text-white outline-none px-3 placeholder-primary' required />
            <input type="text" placeholder='Query/ Feedback' name="message" className=' w-64 h-9 rounded-md bg-secondarylight text-white outline-none px-3 placeholder-primary mb-3' required/>
            <input type="submit" className='text-lg border border-secondarylight px-3 py-[2px] rounded-xl w-max cursor-pointer hover:bg-secondarylight  hover:text-primary' />
            </form>
            </div>
        </div>
        <div>
            <h1 className='text-2xl mb-6' >Socials</h1>
            <div className=' flex flex-col gap-4'>
            <div className='socialbox'>
              <img src="/images/github.png" alt="github logo" className='h-[75px] mx-3 my-[7px]' />
              <div className='text-primary flex flex-col justify-center'>
                <div className='text-2xl'>Github</div>
                <div className='text-lg'>RaviPatel94</div>
              </div>
            </div>
            <div className='socialbox'></div>
            </div>
        </div>
        <div>
          <img src="images\catcode.gif" alt="cat on code gif" className='h-80 opacity-75 rounded-lg' />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer