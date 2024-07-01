'use client'
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaHome, FaLocationArrow } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { SparklesCore } from './ui/sparkles';

const Footer = () => {
  return (
    <>
    {/* <motion.div 
    initial={{ opacity: 0.0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.4,
        ease: "easeInOut",
      }}
    className='flex items-center flex-col justify-between max-lg:p-5 p-20 mx-auto  '>
        <p className='text-4xl sm:text-6xl font-bold relative z-20 pb-10 bg-clip-text text-transparent w-full text-center bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>Your code deserves a partner in crime </p>
              <div className="text-5xl pt-20 md:text-[80px] pb-2 font-bold text-[#f0f0f0] text-center">
              CodeMate
              </div>
    </motion.div> */}

<div id='contact' className="h-full relative w-full bg-black items-center justify-center mx-auto flex flex-col p-20">

              <h1 className="text-4xl sm:text-6xl pb-10 font-bold  bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 relative z-20">
       Stuck Somewhere?
      </h1>
        
    <button className="relative inline-flex h-10  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-between rounded-full bg-slate-950 px-4 py-2 text-md font-medium text-white backdrop-blur-3xl">
                  <Link href="mailto:shantanukhoslas@gmail.com">Mail To Us</Link>
                </span>
              </button>
                
    </div>
    <div className="h-full pb-5 w-full  bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="max-lg:text-5xl text-8xl font-bold text-center text-white relative z-20">
        CodeMate
      </h1>
      <div className="w-[40rem] max-lg:hidden h-32 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
        </>
  );
}

export default Footer;
