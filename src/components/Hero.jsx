import React from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Amit Patel", 'Developer', 'Designer', 'Creator'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-[70vh] pt-12 bg-hero bg-cover bg-center text-white md:h-[80vh] flex flex-col space-y-8  items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-[180px] w-[180px] mx-auto object-cover object-top"
        src="/img/profile.jpg"
        width="500"
        height="500"
        alt=""
      />
      <div className="z-20">
        <h2 className="uppercase text-sm font-medium pb-2 tracking-[10px] md:tracking-[15px] ">
          Software Developer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#contact">
            <button className="uppercase text-sm pt-[11px] pb-[11px] pr-[32px] pl-[32px] bg-[#164760] mr-2 text-white hover:bg-[#1d5c7b]">
              Hire Me
            </button>
          </Link>
          <Link href="#downloadcv">
            <button className="uppercase text-sm pt-[11px] pb-[11px] pr-[32px] pl-[32px] bg-[#164760] ml-2 text-white hover:bg-[#1d5c7b]">
              Download CV
            </button>
          </Link>
        </div>
        
      </div>
      <div className="flex">
        <div className="p-1 m-1 rounded-full hover:bg-[#164760]">
          <SocialIcon
            url="https://www.linkedin.com/in/amit-patel-755a95178/"
            target="_blank"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
        <div className="p-1 m-1 rounded-full hover:bg-[#164760]">
          <SocialIcon
            url="https://github.com/apatel6152"
            target="_blank"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
        <div className="p-1 m-1 rounded-full hover:bg-[#164760] ">
          <SocialIcon
            url="https://www.instagram.com/amit_patel_303/"
            target="_blank"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
        <div className="p-1 m-1 rounded-full hover:bg-[#164760]">
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100005975611113"
            target="_blank"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
