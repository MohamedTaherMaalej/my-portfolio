"use client";

import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const MotionLink = motion(Link);

function Logo() {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/' className='w-96 h-16 sm:w-24 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
        whileHover={{ 
            backgroundColor: [
              "#121212",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#121212",
            ],
            transition: { duration: 2, repeat: Infinity, ease: "linear" }
        }}
        >
        <span className="hidden sm:flex">MTM</span>
        
        <span className="sm:hidden">Mohamed Taher MAALEJ</span>
        </MotionLink>

    </div>
  )
}

export default Logo