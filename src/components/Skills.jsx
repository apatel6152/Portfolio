import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-fit mt-10 flex flex-col text-center md:text-left md:flex-row xl:flex-row md:justify-center max-w-full xl:px-10 min-h-fit xl:space-y-0 relative mx-auto items-center"
    >
      <h3 className="md:absolute top-14 uppercase tracking-[15px] mb-2 text-3xl font-bold text-[#164760]">
        Skills
      </h3>
      <h3 className="md:absolute top-28 uppercase tracking-[3px] mb-2 text-sm text-[#164760]">
        Hover over skill for current profieciency
      </h3>
      <div className="grid grid-cols-3 gap-4 p-10 pt-20 md:mt-[140px] xl:pt-[180px] md:grid-cols-4">
        <Skill src="/img/javascript.png" profieciency="80%" />
        <Skill src="/img/react.png" profieciency="85%"/>
        <Skill src="/img/nextjs-icon.png" profieciency="80%"/>
        <Skill src="/img/nodejs.png" profieciency="70%"/>
        <Skill src="/img/mongodb.png" profieciency="75%"/>
        <Skill src="/img/html5.png" profieciency="90%"/>
        <Skill src="/img/css3.png" profieciency="85%"/>
        <Skill src="/img/tailwind-css.png" profieciency="70%"/>
        <Skill src="/img/angular.png" profieciency="70%"/>
        <Skill src="/img/firebase.png" profieciency="70%"/>
        <Skill src="/img/mysql.png" profieciency="70%"/>
        <Skill src="/img/github.png" profieciency="80%"/>
        <Skill src="/img/visual-studio-code.png" profieciency="90%"/>
        
      </div>
    </motion.div>
  );
};

export default Skills;
