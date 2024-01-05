import React from 'react';
export default function About() {
    return (<section id="about">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
          Hi, I'm Arulventhan R.
          <br className="hidden lg:inline-block" />Frontend Engineer
        </h1>
        <p className="mb-8 text-gray-600">
          Passionate Front-End developer | Transforming Web Experiences through Innovative Design and Code.
        </p>
        <p className="mb-8 text-gray-600 leading-relaxed">
          Consultant @ HCL Technologies | Overall 6.6 Years of experience
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Work With Me
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
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