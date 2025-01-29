import React, { useState, useRef, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import webprojdata from "./webprojdata.json";
import designprojdata from "./designprojdata.json";

function Projects() {
  const [displayProject, setDisplayProject] = useState(webprojdata);
  const scrollContainerRef = useRef(null);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFullyVisible(entry.isIntersecting && entry.intersectionRatio === 1);
      },
      {
        threshold: 1.0
      }
    );

    observer.observe(el);

    const onWheel = (e) => {
      const container = scrollContainerRef.current;
      if (!container || !isFullyVisible) return;

      const isAtStart = container.scrollLeft === 0;
      const isAtEnd = Math.abs(container.scrollWidth - container.offsetWidth - container.scrollLeft) < 1;

      if ((e.deltaY < 0 && isAtStart) || (e.deltaY > 0 && isAtEnd)) {
        return;
      }

      e.preventDefault();
      container.scrollLeft += e.deltaY * 1.5; 
    };
    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", onWheel);
    };
  }, [isFullyVisible]);

  const displayweb = () => {
    setDisplayProject(webprojdata);
  };
  
  const displaydesign = () => {
    setDisplayProject(designprojdata);
  };

  return (
    <div className="min-h-screen flex justify-center flex-col gap-7 pt-16 sm:pt-0" id="project">
      <div className="flex items-center gap-2 mx-auto sm:mx-0 flex-col sm:flex-row">
        <div className="flex gap-1">
          <div className="text-3xl pb-1 sm:pl-16 sm:ml-6">Projects</div>
          <GoArrowRight size={40} />
        </div>
        <div className="flex gap-2">
          <button
            onClick={displayweb}
            className="bg-secondarylight px-4 py-2 text-white rounded-md hover:bg-purple-700 text-lg"
          >
            Websites
          </button>
          <button
            onClick={displaydesign}
            className="bg-secondarylight px-4 py-2 text-white rounded-md hover:bg-purple-700 text-lg"
          >
            Designs
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="h-[500px] sm:h-[470px] relative flex gap-4 sm:gap-20 px-4 sm:px-16 overflow-x-scroll"
      >
        {displayProject.map((project, index) => (
          <div key={index} className="projcontainer flex-shrink-0">
            <div className="text-2xl pt-3 text-primary">{project.name}</div>
            <div>
              <img
                src={project.image}
                className="w-12/12 lg:h-[222px] object-cover rounded-md"
                alt={project.name}
              />
            </div>
            <div className="text-lg pl-3 pb-1 text-primary break-words">
              {project.description}
            </div>
            <div className="flex gap-4 whitespace-nowrap">
              {project.liveLink && (
                <button className="projbtn">
                  <a href={project.liveLink} target="blank">
                    Live
                  </a>
                </button>
              )}
              {project.repoLink && (
                <button className="projbtn">
                  <a href={project.repoLink} target="blank">
                    Repo
                  </a>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;