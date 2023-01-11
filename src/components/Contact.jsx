import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
      setFullname('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
      
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
      className="h-fit flex flex-col overflow-hidden max-w-full relative mx-auto items-center mt-10  text-left "
    >
      <h3 className="md:absolute top-14 uppercase text-center tracking-[15px] mb-2 text-3xl font-bold text-[#164760]">
        Contact
      </h3>
      <h3 className="md:absolute top-28 uppercase tracking-[3px] mb-2 text-sm text-[#164760]">
        Feel free to contact me
      </h3>
      <div className="flex flex-col mt-10 w-full pt-20 pb-20  text-[#ffffff] md:mt-[180px] space-y-10">
        <h4 className="text-xl px-[30px] md:text-2xl xl:text-3xl font-semibold text-center">
          I have got just what you need.{' '}
          <span className="underline decoration-[#ffffff]/50"> Lets Talk.</span>
        </h4>
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse" />
            <p className="text-lg font-medium md:text-xl">+1-647-939-9303</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse" />
            <p className="text-lg font-medium md:text-xl">
              amit3031998@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse" />
            <p className="text-lg font-medium md:text-xl">
              Kitchener, Ontario, Canada{' '}
            </p>
          </div>
        </div>

        <form 
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center space-y-2  mx-auto">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              placeholder="Name"
              className="outline-none w-[80vw] md:w-full rounded-3xl border px-6 py-4 border-[#164760]/40 text-[#164760] placeholder-gray-500 transition-all focus:border-[#164760] focus:text-[#164760] focus:border-2 hover:border-[#164760]"
              type="text"
              value={fullname}
              onChange={(e) => {
              setFullname(e.target.value);
            }}
            />
            <input
              placeholder="Email"
              className="outline-none w-[80vw] md:w-full rounded-3xl border px-6 py-4 border-[#164760]/40 text-[#164760] placeholder-gray-500 transition-all focus:border-[#164760] focus:text-[#164760] focus:border-2 hover:border-[#164760]"
              type="text"
              value={email}
              onChange={(e) => {
              setEmail(e.target.value);
            }}
            />
          </div>

          <input
            placeholder="Subject"
            className="outline-none w-[80vw] md:w-full rounded-3xl border px-6 py-4 border-[#164760]/40 text-[#164760] placeholder-gray-500 transition-all focus:border-[#164760] focus:text-[#164760] focus:border-2 hover:border-[#164760]"
            type="text"
            value={subject}
            onChange={(e) => {
                setSubject(e.target.value);
            }}
          />

          <textarea
            placeholder="Your Message"
            className="outline-none w-[80vw] md:w-full rounded-lg border px-6 py-4 border-[#164760]/40 text-[#164760] placeholder-gray-500 transition-all focus:border-[#164760]/ focus:text-[#164760] focus:border-2 hover:border-[#164760]"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <div className="w-[80vw] md:w-full pt-4 ">
            <button
              type="submit"
              className="bg-[#164760]  w-[80vw] md:w-full  py-5 px-10 rounded-md text-white font-bold text-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="w-full h-full  absolute py-20  top-[10%] md:top-[20%]  bg-contact opacity-90 bg-[#164760] mix-blend-screen bg-cover bg-center left-0  z-[-1]" />
    </motion.div>
  );
};

export default Contact;
