import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-fit flex flex-col relative mt-10 py-10 xl:pt-[100px] text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="md:absolute top-14 uppercase tracking-[15px] text-3xl font-bold text-[#164760]">
        About
      </h3>
      <motion.img
        initial={{
          x: -250,
          opacity: 0,
        }}
        transition={{
          duration: 1.0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className=" md:mb-0 mt-16 md:mt-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[320px] md:h-[500px] xl:rounded-xl xl:w-[400px] xl:h-[500px]"
        src="/img/about.jpg"
        width="500"
        height="500"
        alt="aboutimage"
      />
      <div className="space-y-8 mt-12 px-0 md:px-10 ">
        <h4 className="text-[22px] md:text-2xl xl:text-3xl  font-semibold">
          Here is a{' '}
          <span className="underline text-[#164760] decoration-[#164760]/50">
            Little Background
          </span>
        </h4>
        <p className="text-base md:text-md xl:text-lg">
          Software Developer with 2+ years of web development experience, a
          passion for developing scalable web applications, and working across
          the Full-Stack. Expertise in HTML5, CSS3, JavaScript, ReactJS, NodeJS,
          Express.js, MongoDB, and other areas is common among adaptive
          professionals. A passionate, diligent person who wants to learn
          continuously. Have good understanding of Next.js, tailwind CSS, Material UI, Redux, React Hooks,
          Firebase, and MYSQL. Lover of innovation and everything
          related to generate new knowledge. Face problems with a smile and solve
          them as soon as possible.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
