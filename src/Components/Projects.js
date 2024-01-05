import { CodeIcon } from "@heroicons/react/solid";
import React, { useState, useRef } from "react";
import { projects } from "../data";

export default function Projects() {
  const [showCareer, setShowCareer] = useState(false);
  
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Career History
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Had a 6.6 years of experience in various domains such as Banking, Healthcare & Insurance. 
          </p>
        </div>
        
          {projects.map((project) => (
            <div className="hover:bg-gray-500 hover:text-yellow-400 bg-gray-400 text-white bg-opacity-40 py-5 mb-3 " onClick={() => {setShowCareer(!showCareer)}}>
              <h1 className="font-ui-sans-serif text-3xl">{project.company}</h1>
              <h2 className="text-2xl">{project.title}</h2>
              <div className="flex justify-center text-green-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
              </svg>
              </div>
              {(showCareer) &&
              
              <div class="flex flex-col float-start font-medium">
              <div class="text-center">Work Duration : {project.Duration}</div>
              <div>Domian & Client : {project["Domain & Client"]}</div>
              <div>Job Location : {project.location}{}</div>
              
              </div>}
            </div>
          ))}
        

      </div>
    </section>
  );
}