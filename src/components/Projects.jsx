import React from 'react'

function Projects() {
  return (
    <div className='flex justify-center flex-col gap-7 min-h-screen'>
        <div className='text-3xl pb-5 pl-16'>Projects</div>
        <div className=' grid grid-cols-2 gap-20 pl-16 pr-16'>

            <div className='bg-white rounded-lg flex flex-col justify-center items-center gap-4'>
              <div className='text-2xl pt-3'>UrStore</div>
              <div><img src="/images/urstore.png" className='h-60' alt="" /></div>
              <div className='text-lg pl-3 pb-3'>An ecommerece website for smooth transaction and common currency</div>
            </div>

        </div>
    </div>
  )
}

export default Projects