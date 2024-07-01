import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';

const BackToHome = () => {
  return (
    <button className="fixed top-5 left-5 inline-flex h-10 w-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-md font-medium text-white backdrop-blur-3xl">
                <Link href='/'><FaHome /></Link>
                </span>
              </button>
  );
}

export default BackToHome;
