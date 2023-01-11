import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Projectcard = ({ project }) => {
  return (
    <article className=" flex flex-col rounded-lg items-center flex-shrink-0 w-[80vw] md:w-[40vw] xl:w-[30vw] snap-center bg-[#dde7e0]  hover:opacity-100  cursor-pointer transition-opacity duration-200 shadow-xl">
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
        className="w-[80vw] h-[30vh] md:w-[40vw] md:h-[30vh] xl:w-[30vw] xl:h-[30vh] object-cover object-center"
        src={project.img}
        alt=""
      />

      <div className=" md:px-10 md:w-[40vw] xl:w-full px-10 py-10">
        <h4 className="text-2xl font-semibold">{project.projectname}</h4>
        <p className="text-lg font-semibold mt-1">Technology:</p>
        <div className="grid grid-flow-col gap-1 space-x-2 my-3">
          {project.technologies.map((img, i) => (
            <img
              key={i}
              className="h-10 w-10 rounded-full object-contain"
              src={img}
              alt=""
            />
          ))}
        </div>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li key={project.id}>{project.summary}</li>
          {/* <li>Summary point</li> */}
          {/* <li>Summary point</li> */}
        </ul>
        <div className="pt-7 flex flex-col md:w-auto xl:w-auto xl:flex-row justify-evenly items-center">
          <Link href={project.livelink}>
            <button className="uppercase text-sm mb-4 xl:mb-0 xl:mr-8 w-[200px] xl:w-[150px] pt-[11px] pb-[11px] text-center  bg-[#164760]  text-white hover:bg-[#1d5c7b]">
              Live Demo
            </button>
          </Link>
          <Link href={project.githublink} target="_blank">
            <button className="uppercase text-sm w-[200px] xl:w-[150px] pt-[11px] pb-[11px]  bg-[#164760]  text-white hover:bg-[#1d5c7b]">
              GithubLink
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Projectcard;
