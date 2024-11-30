import React from 'react'

function Footer() {
  return (
    <div>
        <div className='py-12'>
        <h1 className='text-3xl pl-16 pb-10'>Contact</h1>
        <div className='flex justify-center items-center gap-16'>
        <div className='mailbox'>
            <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-2xl'>Mail Us</h1>
            <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col max-w-[250px] gap-4'>
            <input type="hidden" name="access_key" value="f452ef1d-ac63-4571-a65a-ba9e3eb41901"></input>
            <input type="text" placeholder='Name' name="name" className=' w-64 h-9 rounded-md bg-secondarylight text-white outline-none px-3 placeholder-white' required />
            <input type="email" placeholder='Email' name="Email" className=' w-64 h-9 rounded-md bg-secondarylight text-white outline-none px-3 placeholder-white' required />
            <input type="text" placeholder='Query/ Feedback' name="message" className=' w-64 h-9 rounded-md bg-secondarylight text-white outline-none px-3 placeholder-white' required/>
            <input type="submit" className='submit' />
            </form>
            </div>
        </div>
        <div>
            <h1>Socials</h1>
            <div className=' grid grid-cols-2 gap-3'>
            <div className='socialbox'></div>
            <div className='socialbox'></div>
            <div className='socialbox'></div>
            <div className='socialbox'></div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer