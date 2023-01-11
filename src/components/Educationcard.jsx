import React from 'react';
import { motion } from 'framer-motion';

const Educationcard = ({ education }) => {
  return (
    <div className="h-fit w-[85vw] bg-[#ffffff] md:w-[73vw] xl:w-[60vw] flex flex-col mb-10 md:flex-row justify-center shadow-xl  ease-in-out duration-300">
      <motion.div
        initial={{
          x: -150,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="p-10 xl:p-3 w-full md:w-[30vw] xl:w-[20vw] flex flex-col items-center justify-center bg-[#164760] text-white"
      >
        <p className="text-lg p-1">{education.year}</p>
        <div className="text-2xl p-1 font-semibold text-center">
          {education.degreeType}
        </div>
      </motion.div>

      <motion.div
        initial={{
          x: 150,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="p-10 xl:w-[50vw] text-black bg-[#ffffff]"
      >
        <div className="text-xl md:text-2xl font-semibold mb-2">{education.degree}</div>
        <h4 className="text-lg md:text-xl font-medium">{education.college}</h4>
        <ul  className="list-disc space-y-1 ml-5 pt-5">
          {education.description.map((description, i) => (
            <li key={i}>{description}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Educationcard;
