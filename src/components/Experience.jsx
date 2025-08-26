import React from 'react'

function Experience() {
  return (
    <div className='px-40 py-20'>
        <h1 className='text-3xl mb-20 text-center underline'>Experience</h1>
        <div>
            <div className='flex justify-between mb-5'>
                <div>
                <h2 className='text-3xl mb-1 underline'>Vighnotech</h2>
                <h3 className='text-xl'>Frontend engineer</h3>
                </div>
                <div>
                    <h3 className='text-xl'>Feb 2025 - june 2025</h3>
                    <h3 className='text-xl'>On-site</h3>
                </div>
            </div>
            <div>
                <ul className='  text-xl decoration-solid text-justify'>
                    <li>
                        Developed lightweight, SEO-optimized, and user-friendly websites using Next.js, TypeScript, and Tailwind CSS.
                    </li>
                    <li>
                        Contributed to Enterprise Resource Planning software development by building reusable frontend components such as dynamic data tables, interactive forms, and email integration features to streamline workflows.
                    </li>
                    <li>
                        Enhanced website performance and user experience by optimizing code structure, implementing lazy loading, and improving Lighthouse scores up to 80% across multiple projects.
                    </li>
                    <li>
                        Implemented optimized landing pages and blog templates, resulting in increased user interaction and conversion rates.
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience