import { workExperience } from '@/data';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/MovingBorders';
import Link from 'next/link';

const About = () => {
  return (
    <>
    <div id='services' className='flex items-center max-lg:px-11 justify-center mx-auto flex-col'>
    <p className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Why Codemate?
      </p>          
      <p className='text-xl max-lg:w-full max-lg:text-sm text-white text-center w-[60%] font-extralight'> Whether you're optimizing performance, translating between languages, debugging issues, or ensuring flawless execution through testing, Codemate is your all-in-one solution.</p>
    </div>
    <div id='about' className='flex flex-row justify-center items-center mx-auto max-lg:px-10 p-20'> 
    <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
          {workExperience.map((card) => (
           <Button
           duration={Math.floor(Math.random() * 10000 + 10000)}
           borderRadius='2rem'
           className='text-white p-3 border-none shadow-md shadow-neutral-500/40 dark:shadow-slate-800/40' // Updated class
         >
           <Link key={card.id} href={card.link}>
             <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
               <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-24 md:w-20 w-16' />
               <div className='lg:ms-5'>
                 <h1 className='text-start text-2xl font-bold'>{card.title}</h1>
                 <p className='text-justify max-md:text-left text-white-100 mt-3 font-semibold'>{card.desc}</p>
               </div>
             </div>
           </Link>
         </Button>
         
          ))}
    </div>
</div>
    </>
  );
}

export default About;
