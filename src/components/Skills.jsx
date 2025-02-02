import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <div className='overflow-hidden w-screen'>
      <h1 className='text-3xl text-center pb-8 sm:pl-16'>My skills</h1>
      <div className='marquee-container flex flex-col gap-2 items-center justify-center'>
        <motion.div
          className='marquee'
          variants={{
            loop: {
              x: ["-40%", "0%"],
              transition: {
                duration: 7,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
              },
            },
          }}
          animate="loop"
        >
          <img src="https://skillicons.dev/icons?i=react,tailwind,js,html,css,bootstrap" alt="Skills" className="inline-block mr-2" />
          {/* Duplicate the content to make it look infinite */}
          <img src="https://skillicons.dev/icons?i=react,tailwind,js,html,css,bootstrap" alt="Skills" className="inline-block mr-2" />
          <img src="https://skillicons.dev/icons?i=react,tailwind,js,html,css,bootstrap" alt="Skills" className="inline-block mr-2" />
          <img src="https://skillicons.dev/icons?i=react,tailwind,js,html,css,bootstrap" alt="Skills" className="inline-block mr-2" />
          <img src="https://skillicons.dev/icons?i=react,tailwind,js,html,css,bootstrap" alt="Skills" className="inline-block mr-2" />
          <img src="https://skillicons.dev/icons?i=react,tailwind,js,html,css,bootstrap" alt="Skills" className="inline-block mr-2" />
          
        </motion.div>
        <motion.div
          className='marquee'
          variants={{
            loop: {
              x: ["0%", "-40%"],
              transition: {
                duration: 7,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
              },
            },
          }}
          animate="loop"
        >
          <img src="https://skillicons.dev/icons?i=figma,git,firebase,vite,c,cpp,py" alt="Skills" className="inline-block mr-2" />
          <img src="https://skillicons.dev/icons?i=figma,git,firebase,vite,c,cpp,py" alt="Skills" className="inline-block mr-2" />
          <img src="https://skillicons.dev/icons?i=figma,git,firebase,vite,c,cpp,py" alt="Skills" className="inline-block mr-2" />
          <img src="https://skillicons.dev/icons?i=figma,git,firebase,vite,c,cpp,py" alt="Skills" className="inline-block mr-2" />
          <img src="https://skillicons.dev/icons?i=figma,git,firebase,vite,c,cpp,py" alt="Skills" className="inline-block mr-2" />
          <img src="https://skillicons.dev/icons?i=figma,git,firebase,vite,c,cpp,py" alt="Skills" className="inline-block mr-2" />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;