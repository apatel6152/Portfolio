import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ src, profieciency }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: -130,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        className="rounded-full border p-2 border-[#164760] object-contain w-[80px] h-[80px] md:w-32 md:h-32 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={src}
        alt=""
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[90px] h-[90px] md:w-32 md:h-32 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">{profieciency}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
