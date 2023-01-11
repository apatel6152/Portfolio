import React from 'react';
import { motion } from 'framer-motion';
import Educationcard from './Educationcard';

const Education = () => {
  const education = [
    {
      id:'1',
      year: '2021 - 2022',
      degreeType: 'Post Graduation',
      degree: 'Post Graduation in Web Design and Development',
      college: 'Conestoga College, Kitchener, Ontario',
      description: ["Conestoga is a leader in polytechnic education and one of Ontario's fastest growing colleges", "Completed Post graduation in web design and development with with 3.92 GPA","Maintained above 3.80 GPA in every semester of college academic"]
   },
    {
      id:'2',
      year: '2015 - 2019',
      degreeType: 'Bachelor Degree',
      degree: "Bachelor in Computer Engineering",
      college: 'Aditya Silver Oak Institute Of Technology, Ahmedabad, India',
      description: ["Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat", "Completed B.E in Computer Engineering with 8.75 CGPA","Maintained above 8.0 spi in every semester of college academic"]
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-fit flex flex-col  overflow-hidden  max-w-full  relative mx-auto items-center mt-10 mb-10 text-left "
    >
      <h3 className="md:absolute top-14 uppercase text-center tracking-[15px] mb-2 text-3xl font-bold text-[#164760]">
        Education
      </h3>

      <div className="w-full flex flex-col items-center mt-20 md:mt-[200px] snap-x snap-mandatory ">
        {education.map((education, i) => (
          <Educationcard key={i} education={education} />
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
