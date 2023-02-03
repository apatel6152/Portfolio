import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[90vw] md:w-[70vw] xl:w-[900px] snap-center bg-[#dde7e0] p-10 hover:opacity-100  cursor-pointer transition-opacity duration-200 ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:w-[170px] md:h-[170px] xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/img/UT.jpg"
        alt="companylogo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Web Develpoer</h4>
        <p className="font-bold text-2xl mt-1">Universal Technolabs</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="img/javascript.png" alt="skill-js" />
          <img className="h-10 w-10 rounded-full" src="img/react.png" alt="skill-react" />
          <img className="h-10 w-10 rounded-full" src="img/mongodb.png" alt="skill-mongodb" />
          <img className="h-10 w-10 rounded-full" src="img/nodejs.png" alt="skill-nodejs" />
          <img className="h-10 w-10 rounded-full" src="img/html5.png" alt="skill-html" />
          <img className="h-10 w-10 rounded-full" src="img/css3.png" alt="skill-css" />
        </div>
        <p className="uppercase py-5 text-black font-semibold">Feb2020 - April 2021</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Developed client-based projects alongside other
            developers to create web pages for client websites using the modern
            JavaScript framework React.js.
          </li>
          <li>
            Participating in projects to enhance the client's website's general
            usability and effectiveness.
          </li>
          <li>
            Developed user interfaces with modern JavaScript frameworks, HTML5,
            and CSS3.
          </li>
          <li>
            React Hooks and Redux were used to create reusable components for
            single-page applications.
          </li>
          <li>
            Closely collaborated with project members to identify and quickly
            address problems.
          </li>
          <li>
            We went above and above by improving the usability and accessibility
            of our client's websites.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
