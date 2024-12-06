import React from 'react'
import { GoArrowRight } from "react-icons/go";
function Projects() {
  return (
    <div className='flex justify-center flex-col gap-7 sm:h-screen pt-16 sm:pt-0' id='project'>
      <div className='flex items-center gap-1 mx-auto sm:mx-0'>
        <div className='text-3xl pb-1 sm:pl-16 sm:ml-6'>Projects</div>
        <GoArrowRight size={40} />
      </div>
        <div className=' h-[500px] sm:h-[470px] relative flex gap-8 sm:gap-20 px-4 sm:px-16 overflow-x-scroll scroll-smooth '>
            <div className=' projcontainer'>
              <div className='text-2xl pt-3 text-primary'>UrStore</div>
              <div><img src="/images/urstore.png" className='w-12/12 object-contain rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary break-words '>An ecommerece website for smooth transaction and common currency (ReactJS, HTML, CSS)</div>
              <div className=' flex gap-4 whitespace-nowrap'>
                <button className='projbtn'> <a href="https://urstorepbl.netlify.app/" target='blank'>Live</a></button>
                <button className='projbtn'> <a href="https://github.com/RaviPatel94/UrStore" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className='projcontainer'>
              <div className='text-2xl pt-3 text-primary'>NewsVerifier</div>
              <div><img src="/images/news.png" className='w-12/12 rounded-md object-contain' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary' >An Ml model that tells if a new is true or false. (Flask, HTML, CSS, JS)</div>
              <div className=' flex gap-4'>
                <button className='projbtn'> <a href="https://newsverifier.pythonanywhere.com/" target='blank'>Live</a></button>
                <button className='projbtn'> <a href="https://github.com/RaviPatel94/NewsVerifier" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className='projcontainer'>
              <div className='text-2xl pt-3 text-primary'>Random Password Generator</div>
              <div><img src="/images/news.png" className='w-12/12 rounded-md object-contain' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary' >Generates and customizes random password according to users need (ReactJS, TailwindCSS)</div>
              <div className=' flex gap-4'>
                <button className='projbtn'> <a href="https://randompasswordgen1.netlify.app" target='blank'>Live</a></button>
                <button className='projbtn'> <a href="https://github.com/RaviPatel94/Random-password-generator" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className=' projcontainer'>
              <div className='text-2xl pt-3 text-primary'>WearLoop</div>
              <div><img src="/images/wearloop.png" className='w-12/12 object-contain rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary' >An Ecommerce cloth renting website (HTML, CSS, JavaScript)</div>
              <div className=' flex gap-4'>
                <button className='projbtn'> <a href="https://wearloop.netlify.app/" target='blank'>Live</a></button>
                <button className='projbtn'> <a href="https://github.com/RaviPatel94/wearloop" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className=' projcontainer'>
              <div className='text-2xl pt-3 text-primary'>WebGames</div>
              <div><img src="/images/webgames.png" className='w-12/12 object-contain rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary '>A website featuring multiple mini-games (HTML, CSS, JavaScript)</div>
              <div className=' flex gap-4'>
                <button className='projbtn'> <a href="https://webgames404.netlify.app/" target='blank'>Live</a></button>
                <button className='projbtn'> <a href="https://github.com/RaviPatel94/Web-games" target='blank'>Repo</a></button>
              </div>
            </div>
            <div className=' projcontainer'>
              <div className='text-2xl pt-3 text-primary'>Attendence Keeper</div>
              <div><img src="/images/attendence.png" className='w-12/12 object-contain rounded-md' alt="" /></div>
              <div className='text-lg pl-3 pb-1 text-primary '> A responsive web application, Attendance Keeper, that calculates and analyzes your attendence. (HTML, CSS, JavaScript)
              </div>
              <div className=' flex gap-4'>
                <button className='projbtn'> <a href="https://attendence-keeper.netlify.app/" target='blank'>Live</a></button>
                <button className='projbtn'> <a href="https://github.com/RaviPatel94/Attendence-Keeper" target='blank'>Repo</a></button>
              </div>  
            </div>

        </div>
    </div>
  )
}

export default Projects