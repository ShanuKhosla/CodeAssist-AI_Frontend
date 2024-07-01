'use client'

import React from 'react';
import { motion } from "framer-motion";

const GetStarted = () => {
   
  return (
    <motion.div 
    initial={{ opacity: 0.0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.4,
        ease: "easeInOut",
      }}
    className='flex items-center justify-center max-lg:pb-20 pb-40 px-10 mx-auto  text-6xl'>
        <p className='text-2xl max-lg:w-full sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent w-[80%] text-center bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>Don't let coding headaches slow you down. CodeMate's suite of tools helps you write cleaner, more efficient code, faster. </p>
    </motion.div>
  );
}

export default GetStarted;
