'use client'
import React from 'react';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { AuroraBackground } from './ui/aurora-background';
import { FlipWords } from './ui/flip-words';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const HomePage = () => {
  const words = ["optimize", "translate", "explain", "debug", "test"];
  return (
    <>
    <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="px-4"
    >
        <div className='flex flex-col gap-4 items-center justify-center z-10'>
        <div className="text-6xl md:text-8xl pb-2 font-bold text-white text-center">
              CodeMate
              </div>
              <div className="font-extralight text-2xl md:text-4xl text-center text-neutral-200 max-lg:py-2 py-4">
              An AI that can
                <FlipWords words={words} /> <br />
                your code in a single click
              </div>
              <p></p>
              <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-md font-medium text-white backdrop-blur-3xl">
                <Link href='#about'>Get Started</Link>
                </span>
              </button>
              
        </div>
    </motion.div>
  </AuroraBackground>
  <button className="fixed bottom-5 z-[9999] left-5 inline-flex h-10 w-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-md font-medium text-white backdrop-blur-3xl">
                <Link href='#'><FaHome /></Link>
                </span>
              </button>
  </>
  );
}

export default HomePage;
