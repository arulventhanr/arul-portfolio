import { CodeIcon } from "@heroicons/react/solid";
import React, { useState, useRef } from "react";
import { projects } from "../data";

export default function Projects() {

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 bg-gradient-to-r from-blue-400 via-green-700 to-yellow-400 inline-block text-transparent bg-clip-text">
            Career History
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Having a 6+ years of extensive experience in Front end development across various domains such as Banking, Healthcare & Insurance.
          </p>

        </div>
        {projects.map((project) => (
          <div className="bg-gradient-to-r from-blue-400 to-green-200 text-black border-solid border-2 border-yellow-500 rounded-lg mb-5">
          <div className="flex flex-row flex-start bg-opacity-40 pt-3">
              <img
              className="w-20 h-16 ml-10"
              alt="hero"
              src={`./${project.img}.jpg`}
            />
          <div className="flex flex-col space-evenly ml-5">
              <div className="flex flex-col lg:px-20">
                <h1 className="font-ui-sans-serif lg:text-3xl sm:text-xl">{project.company}</h1>
                <h2 className="lg:text-2xl sm:text-xl">{project.title}</h2>
              </div>
            
          </div>
          </div>
          <div className="border-solid border-t-2 bg-gradient-to-r from-green-400 to-blue-200 m-4"/>
          <div class="flex flex-col lg:items-start sm:font-small lg:font-medium bg-gray-800 bg-opacity-50 mb-3 sm:px-5 lg:px-20">
          <div class="px-3 py-2 lg:px-6"><span class="text-gray-200">Work Duration | {project.Duration}</span> </div>
          <div class="px-3 py-2 lg:px-6"><span class="text-gray-200">Domian | {project.Domain}</span></div>
          <div class="px-3 py-2 lg:px-6"><span class="text-gray-200">Client | {project.Client}</span></div>
          <div class="px-3 py-2 lg:px-6"><span class="text-gray-200">Job Location | {project.location}</span></div>
      </div>
      </div>
        ))}


      </div>
    </section>
  );
}