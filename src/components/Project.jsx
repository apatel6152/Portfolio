import React from 'react';
import { motion } from 'framer-motion';
import Projectcard from './Projectcard';

const Project = () => {
  const projects = [
    {
      id:'1',
      projectname: 'CMS BLOG',
      img: 'img/cms.jpg',
      technologies: [
        'img/javascript.png',
        'img/react.png',
        'img/nextjs-icon.png',
        'img/html5.png',
        'img/tailwind-css.png',
      ],
      summary:"Developed a modern blog app using React, GraphQL, NEXTJS, and Tailwind CSS that allows clients to manage the blog from a dedicated Content Management System.",
      livelink:"",
      githublink: 'https://github.com/apatel6152/CMS_BLOG_Next.JS',
    },
    {
      id:'2',
      projectname: 'Ecommerce MERN Store',
      img: 'img/ecommerceproject.jpg',
      technologies: [
        'img/react.png',
        'img/javascript.png',
        'img/mongodb.png',
        'img/nodejs.png',
        'img/cloudinary.png',
        'img/html5.png',
        'img/css3.png',
      ],
      summary:"Developed eCommerce application using MERN stack that allows users to buy Products.",
      livelink:"http://ecommerce-mern-ap.herokuapp.com/",
      githublink: 'https://github.com/apatel6152/Ecommerce_mern-Project',
    },
    {
      id:'3',
      projectname: 'Instagram Clone',
      img: 'img/instagram.jpg',
      technologies: [
        'img/javascript.png',
        'img/react.png',
        'img/nodejs.png',
        'img/mongodb.png',
        'img/cloudinary.png',
        'img/html5.png',
        'img/css3.png',
      ],
      summary:"Developed a dynamic Instagram clone that utilizes Node.js and Express.js backend, MongoDB database, React.js with Material-UI frontend, and custom JSON-based REST API.",
      livelink:"",
      githublink:'https://github.com/apatel6152/Instagram_Clone'
    },
    {
      id:'4',
      projectname: 'Share Memories',
      img: 'img/sharememories.jpg',
      technologies: [
        'img/javascript.png',
        'img/react.png',
        'img/nodejs.png',
        'img/mongodb.png',
        'img/html5.png',
        'img/css3.png',
      ],
      summary:"Developed a MERN stack social media platform using MongoDB, Express.js, NodeJS, and React.js where users can share their memories by posting posts, including images, titles, tags, and descriptions.",
      livelink:"",
      githublink:'https://github.com/apatel6152/share_memories'
    },
    // {
    //   projectname: 'Marvel Movie House',
    //   img: 'img/intro.jpg',
    //   technologies: ['img/javascript.png', 'img/html5.png', 'img/css3.png'],
    //   livelink:"",
    //   githublink:'https://github.com/apatel6152/marvel-movie-house-javascript'
    // },
    {
      id:'5',
      projectname: 'JustForFoodies',
      img: 'img/justforfoodie.jpg',
      technologies: [
        'img/angular.png',
        'img/mongodb.png',
        'img/nodejs.png',
        'img/html5.png',
        'img/css3.png',
      ],
      summary:"Implemented all CRUD functionality in this project using MongoDB, Express.js, NodeJS, and Angular.",
      livelink:"",
      githublink:'https://github.com/apatel6152/JustForFoodies_MEAN'
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-fit flex flex-col md:flex-row justify-evenly overflow-hidden  max-w-full  relative mx-auto items-center  text-left "
    >
      <h3 className="md:absolute top-14 mt-10  uppercase text-center tracking-[15px] mb-2 text-3xl font-bold text-[#164760]">
        Projects
      </h3>
      <h3 className="md:absolute top-28 md:mt-10 uppercase tracking-[3px] mb-2 text-sm text-[#164760]">
        What I've Built
      </h3>
      <div className="w-full flex space-x-5 md:mt-16 overflow-x-scroll p-20 snap-x snap-mandatory md:pt-[200px]">
        {projects.map((project, i) => (
          <Projectcard key={i} project={project} />
        ))}
      </div>

      <div className="w-full h-[500px] md:h-[400px] xl:h-[370px] absolute py-20 mt-20 top-[20%] md:top-[25%] xl:top-[30%] bg-[#164760]/30 left-0 -skew-y-12  z-[-1]" />
    </motion.div>
  );
};

export default Project;
