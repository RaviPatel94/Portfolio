import React from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
function Projects() {
  return (
    <div className='flex justify-center flex-col gap-7 h-screen ' id='project'>
        <div className='text-3xl pb-1 pl-16'>Projects</div>
        <div className=' h-[470px] relative flex gap-20 px-16 overflow-x-scroll scroll-smooth '>
            <div className=' shrink-0 w-[500px] h-[460px] p-3 bg-secondary rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-secondarylight duration-200'>
              <div className='text-2xl pt-3 text-primary'>UrStore</div>
              <div><img src="/images/urstore.png" className='h-60 rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary break-words '>An ecommerece website for smooth transaction and common currency</div>
              <div className=' flex gap-4 whitespace-nowrap'>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://urstorepbl.netlify.app/" target='blank'>Live</a></button>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://github.com/RaviPatel94/UrStore" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className=' shrink-0  w-[500px] h-[460px] p-3 bg-secondary rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-secondarylight duration-200'>
              <div className='text-2xl pt-3 text-primary'>NewsVerifier</div>
              <div><img src="/images/news.png" className='h-60 rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary' >An Ml model that tells if a new is true or false.</div>
              <div className=' flex gap-4'>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://newsverifier.pythonanywhere.com/" target='blank'>Live</a></button>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://github.com/RaviPatel94/NewsVerifier" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className=' shrink-0 w-[500px] h-[460px] p-3 bg-secondary rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-secondarylight duration-200'>
              <div className='text-2xl pt-3 text-primary'>WearLoop</div>
              <div><img src="/images/wearloop.png" className='h-60 rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary' >a modern cloth renting website using HTML, CSS, and JavaScript</div>
              <div className=' flex gap-4'>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://wearloop.netlify.app/" target='blank'>Live</a></button>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://github.com/RaviPatel94/wearloop" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className=' shrink-0 w-[500px] h-[460px] p-3 bg-secondary rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-secondarylight duration-200'>
              <div className='text-2xl pt-3 text-primary'>WebGames</div>
              <div><img src="/images/webgames.png" className='h-60 rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary '>A website featuring multiple mini-games, tackling various logical challenges, and improving problem-solving skills</div>
              <div className=' flex gap-4'>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://webgames404.netlify.app/" target='blank'>Live</a></button>
                <button className='bg-primary text-secondary px-6 py-1.5 mb-3 text-lg rounded-md hover:rounded-2xl transition-all duration-300'> <a href="https://github.com/RaviPatel94/Web-games" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className=' shrink-0 w-[500px] h-[460px] p-3 bg-secondary rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-secondarylight duration-200'>
              <div className='text-2xl pt-3 text-primary'>Attendence Keeper</div>
              <div><img src="/images/attendence.png" className='h-60 rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary '> A responsive web application, Attendance Keeper, that calculates and analyzes user attendance based on current records.
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