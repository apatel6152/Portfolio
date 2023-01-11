import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-fit mt-20 relative flex flex-col md:flex-row text-left max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="md:absolute top-14 uppercase tracking-[15px] mb-2 text-3xl font-bold text-[#164760]">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 mt-6 md:p-20 md:mt-28 h-fit">
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="md:mb-0 flex-shrink-0 w-56 h-26 rounded-full object-cover md:rounded-lg  xl:rounded-xl "
              src="/img/dp.jpg"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center pt-6">
                <span className="underline decoration-[#164760]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                Ecommerce Store
              </h4>
              {/* <div className="px-0 md:px-10 flex items-center flex-col">
                <h4 className="text-4xl font-light">Web Develpoer</h4>
                <p className="font-bold text-2xl mt-1">Universal TechnoLabs</p>
                <div className="flex space-x-2 my-2">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="img/dp.jpg"
                    alt=""
                  />
                  <img
                    className="h-10 w-10 rounded-full"
                    src="img/dp.jpg"
                    alt=""
                  />
                  <img
                    className="h-10 w-10 rounded-full"
                    src="img/dp.jpg"
                    alt=""
                  />
                </div>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                  <li>Summary point</li>
                  <li>Summary point</li>
                  <li>Summary point</li>
                </ul>
              </div> */}
              <p className="text-sm md:text-base text-center md:lext-left">
                Developed eCommerce application using MERN stack that allows
                users to buy Products. Incorporated Nodemailer, SendGrid API,
                and CORS for Emailing and Cross-Origin Security and deployed
                under Heroku. Integrated Stripe payments to accept credit/debit
                cards. Incorporated REDUX for state management and utilized
                Node.js for the backend and MongoDB for persistence. Integrated
                JWT, Mongo Atlas, and BCrypt frameworks for authentication and
                persistence. Incorporated Cloudinary for store product images as
                well as for user profiles.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[33%] md:top-[38%] xl:top-[40%] bg-[#164760]/30 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
