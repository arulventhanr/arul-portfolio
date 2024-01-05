import { CodeIcon } from "@heroicons/react/solid";
import React, { useState, useRef } from "react";
import { projects } from "../data";

export default function Projects() {

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Career History
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Having a 6+ years of extensive experience in Front end development across various domains such as Banking, Healthcare & Insurance.
          </p>

        </div>
        {projects.map((project) => (
          <div className="hover:bg-gray-600 hover:text-yellow-400 border-solid border-2 border-yellow-400 rounded-lg mb-5">
          <div className="flex flex-row flex-start bg-opacity-40 pt-3">
              <img
              className="w-20 h-16 ml-10"
              alt="hero"
              src={`./${project.img}.jpg`}
            />
          <div className="flex flex-col space-evenly ml-5">
              <div className="flex flex-col px-20">
                <h1 className="font-ui-sans-serif text-3xl">{project.company}</h1>
                <h2 className="text-2xl">{project.title}</h2>
              </div>
            
          </div>
          </div>
          <hr className="border-dashed border-t-2 border-yellow-400 m-4"/>
          <div class="flex flex-col items-start font-medium bg-gray-400 text-white bg-opacity-40 mb-3 px-20">
          <div>Work Duration : {project.Duration}</div>
          <div>Domian & Client : {project["Domain & Client"]}</div>
          <div>Job Location : {project.location}</div>
      </div>
      </div>
        ))}


      </div>
    </section>
  );
}