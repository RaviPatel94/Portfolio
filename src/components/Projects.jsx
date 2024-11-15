import React from 'react'

function Projects() {
  return (
    <div className='flex justify-center flex-col gap-7 min-h-screen'>
        <div className='text-3xl pb-5 pl-16'>Projects</div>
        <div className=' grid grid-cols-2 gap-20 pl-16 pr-16'>

            <div className=' bg-secondary rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-secondarylight'>
              <div className='text-2xl pt-3 text-primary'>UrStore</div>
              <div><img src="/images/urstore.png" className='h-60 rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary'>An ecommerece website for smooth transaction and common currency</div>
              <div className=' flex gap-4'>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://urstorepbl.netlify.app/" target='blank'>Live</a></button>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://github.com/RaviPatel94/UrStore" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className=' bg-secondary rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-secondarylight'>
              <div className='text-2xl pt-3 text-primary'>NewsVerifier</div>
              <div><img src="/images/news.png" className='h-60 rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary'>An Ml model that tells if a new is true or false.</div>
              <div className=' flex gap-4'>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://newsverifier.pythonanywhere.com/" target='blank'>Live</a></button>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://github.com/RaviPatel94/NewsVerifier" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className=' bg-secondary rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-secondarylight'>
              <div className='text-2xl pt-3 text-primary'>WearLoop</div>
              <div><img src="/images/wearloop.png" className='h-60 rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary'>a modern cloth renting website using HTML, CSS, and JavaScript</div>
              <div className=' flex gap-4'>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://wearloop.netlify.app/" target='blank'>Live</a></button>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://github.com/RaviPatel94/wearloop" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className=' bg-secondary rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-secondarylight'>
              <div className='text-2xl pt-3 text-primary'>WebGames</div>
              <div><img src="/images/webgames.png" className='h-60 rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary'>A website featuring multiple mini-games, tackling various logical challenges, and improving problem-solving skills</div>
              <div className=' flex gap-4'>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://webgames404.netlify.app/" target='blank'>Live</a></button>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://github.com/RaviPatel94/Web-games" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className=' bg-secondary rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-secondarylight'>
              <div className='text-2xl pt-3 text-primary'>Attendence Keeper</div>
              <div><img src="/images/attendence.png" className='h-60 rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary'> A responsive web application, Attendance Keeper, that calculates and analyzes user attendance, providing insights on required or
              optional lecture attendance based on current records.
              </div>
              <div className=' flex gap-4'>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://attendence-keeper.netlify.app/" target='blank'>Live</a></button>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://github.com/RaviPatel94/Attendence-Keeper" target='blank'>Repo</a></button>
              </div>  
            </div>

        </div>
    </div>
  )
}

export default Projects