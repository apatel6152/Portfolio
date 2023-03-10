import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
// import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  // const [navBg, setNavBg] = useState('transparent');
  const [linkColor, setLinkColor] = useState('#ffffff');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        // setNavBg('#164760');
      } else {
        setShadow(false);
        // setNavBg('transparent');
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      // style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-[66px] shadow-xl z-[100] ease-in-out duration-300 bg-[#164760]'
          : 'fixed w-full h-[66px] z-[100] '
      }
    >
      <div className="flex justify-between items-center  w-full h-full  px-8 xl:px-16 text-white ">
        <Link href="/">
          <h1 className="uppercase font-medium xl:ml-20">Amit's Portfolio</h1>
        </Link>
        <div >
          <ul className="hidden md:flex  xl:mr-20">

            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#experience">Experience</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#projects">Projects</Link>
            </li>
            {/* <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/resume'>Resume</Link>
            </li> */}
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#education">Education</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            // style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden "
          >
            <HiOutlineMenuAlt1 size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/80' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-fit text-[#fff] bg-gradient-to-b from-[#164760] to-[#000]" p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex font-semibold w-full items-center justify-between uppercase">
              <Link href="/">
                <h1>Amit's Portfolio</h1>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg bg-white text-black shadow-[#15465F] p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#experience">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Experience
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>

              <Link href="/#education">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Education
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            {/* <div className="pt-20">
              <p className="uppercase tracking-widest text-[#ffffff] mx-8 ">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4  w-full sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/in/amit-patel-755a95178/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href="https://github.com/apatel6152"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
