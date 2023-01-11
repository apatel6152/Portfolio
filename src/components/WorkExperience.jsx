import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-fit flex flex-col md:justify-evenly mt-10 px-10 py-10 max-w-full md:flex-row  relative mx-auto items-center  text-left md:mt-0"
    >
      <h3 className="md:absolute top-14 mt-10 uppercase tracking-[15px] mb-2 text-3xl font-bold text-[#164760]">
        Experince
      </h3>
      <div className='w-full flex items-center justify-center space-x-5 p-10 md:mt-[140px] snap-x snap-mandatory'>
        <ExperienceCard />
        {/* <ExperienceCard /> */}
        {/* <ExperienceCard /> */}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
