import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

const Skills = () => {
  const skills = [
    {
      id:'1',
      image:'/img/javascript.png',
      profieciency:"80%",
      alt:'skill-js'
    },
    {
      id:'2',
      image:'/img/react.png',
      profieciency:"85%",
      alt:'skill-react'
    },
    {
      id:'3',
      image:'/img/nextjs-icon.png',
      profieciency:"80%",
      alt:'skill-nextjs'
    },
    {
      id:'13',
      image:'/img/nodejs.png',
      profieciency:"80%",
      alt:'skill-nodejs'
    },
    {
      id:'4',
      image:'/img/mongodb.png',
      profieciency:"75%",
      alt:'skill-mongodb'
    },
    {
      id:'5',
      image:'/img/html5.png',
      profieciency:"90%",
      alt:'skill-html'
    },
    {
      id:'6',
      image:'/img/css3.png',
      profieciency:"85%",
      alt:'skill-css'
    },
    {
      id:'7',
      image:'/img/tailwind-css.png',
      profieciency:"70%",
      alt:'skill-tailwindcss'
    },
    {
      id:'8',
      image:'/img/angular.png',
      profieciency:"80%",
      alt:'skill-angular'
    },
    {
      id:'9',
      image:'/img/firebase.png',
      profieciency:"70%",
      alt:'skill-firebase'
    },
    {
      id:'10',
      image:'/img/mysql.png',
      profieciency:"70%",
      alt:'skill-mysql'
    },
    {
      id:'11',
      image:'/img/github.png',
      profieciency:"80%",
      alt:'skill-github'
    },
    {
      id:'12',
      image:'/img/visual-studio-code.png',
      profieciency:"80%",
      alt:'skill-vscode'
    },

  ]
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
      <div className="w-fit grid grid-cols-3 gap-4 p-10 pt-20 md:mt-[140px] xl:pt-[180px] md:grid-cols-4">
        {skills.map((skill, i) => (
          <Skill key={i} src={skill.image} profieciency={skill.profieciency} alt={skill.alt}/>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
