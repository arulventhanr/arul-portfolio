import React from 'react';
export default function About() {

  
    return (<section id="about">
    <div className="container mx-auto bg-white-400 flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font text-yellow-400 sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">
          <span class="text-black">Hi,</span> I'm Arulventhan R 
          <br className="" /><span class="bg-gradient-to-r from-blue-400 via-green-700 to-yellow-400 inline-block text-transparent bg-clip-text">Frontend Engineer</span>
        </h1>
        <p className="mb-8 text-black">
          Passionate Front-End developer | Transforming Web Experiences through Innovative Design and Code.
        </p>
        <p className="mb-8 text-white leading-relaxed">
          Consultant @ HCL Technologies | Overall 6.6 Years of experience
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="ml-4inline-flex text-black border-solid border-2 border-gray-900 bg-green-500 hover:bg-green-300 lg:py-2 lg:px-6 py-1 px-2 focus:outline-none rounded lg:text-lg">
            Work With Me
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-black border-solid border-2 border-gray-900 bg-gray-400 hover:bg-gray-600 text-white  lg:py-2 lg:px-6  py-1 px-2 focus:outline-none rounded lg:text-lg">
            Career History
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="./EY_pic.jpg"
        />
      </div>
    </div>
  </section>);
}