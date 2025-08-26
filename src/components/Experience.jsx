import React from 'react'

function Experience() {
  return (
    <div className="px-6 sm:px-10 md:px-20 lg:px-40 py-10 sm:py-20">
      <h1 className="text-2xl sm:text-3xl mb-10 sm:mb-20 text-center underline">
        Experience
      </h1>
      <div>
        <div className="flex flex-col md:flex-row md:justify-between mb-5">
          <div>
            <h2 className="text-2xl sm:text-3xl mb-1 underline">Vighnotech</h2>
            <h3 className="text-lg sm:text-xl">Frontend engineer</h3>
          </div>
          <div className="mt-2 md:mt-0">
            <h3 className="text-lg sm:text-xl">Feb 2025 - June 2025</h3>
            <h3 className="text-lg sm:text-xl">On-site</h3>
          </div>
        </div>
        <div>
          <ul className="text-base sm:text-lg md:text-xl text-justify space-y-3">
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
