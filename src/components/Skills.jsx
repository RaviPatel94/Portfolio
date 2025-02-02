import React from 'react';

function Skills() {
  return (
    <div className='overflow-hidden w-screen'>
      <h1 className='text-3xl text-center pb-1 sm:pl-16'>My skills</h1>
      <div className='marquee-container flex items-center justify-center'>
        <div className='marquee'>
          <img src="https://skillicons.dev/icons?i=react,tailwind,js,html,css,bootstrap" alt="Skills" className="inline-block mr-2" />
          <img src="https://skillicons.dev/icons?i=figma,git,firebase,vite,c,cpp,py" alt="Skills" className="inline-block mr-2" />
        </div>
      </div>
    </div>
  );
}

export default Skills;