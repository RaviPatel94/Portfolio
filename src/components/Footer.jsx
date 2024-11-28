import React from 'react'

function Footer() {
  return (
    <div>
        <div>
        <h1>Contact</h1>
        <div className='flex justify-center items-center gap-16'>
        <div className='mailbox'>
            <div className='flex flex-col justify-center items-center'>
            <h1>Mail Us</h1>
            <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col max-w-[250px]'>
            <input type="hidden" name="access_key" value="f452ef1d-ac63-4571-a65a-ba9e3eb41901"></input>
            <input type="text" placeholder='Name' name="name" className='inpbox' required />
            <input type="email" placeholder='Email' name="Email" className='inpbox' required />
            <input type="text" placeholder='Query/ Feedback' name="message" className='textbox' required/>
            <input type="submit" className='submit' />
            </form>
            </div>
        </div>
        <div>
            <h1>Socials</h1>
            <div className='socialbox'></div>
            <div className='socialbox'></div>
            <div className='socialbox'></div>
            <div className='socialbox'></div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer