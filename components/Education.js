import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({type, duration, place, info}) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <LiIcon reference={ref} />
      <motion.div
      initial={{y: 50}}
      whileInView={{y: 0}}
      transition={{duration: 0.5, type: "spring"}}
      >
        <h3 className='capitalize font-bold text-2xl'>{type}</h3>
        <span className='capitalize font-medium text-black/75'>
          {duration} | {place}
        </span>
        <p className='font-medium w-full'>
          {info}
        </p>

      </motion.div>
    </li>

  )
}

function Education() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Education
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute top-0 left-9 z-[4px] h-full bg-black origin-top '/>

        <ul className='w-full flex flex-col items-start justify-between ml-4'>
            <Details type='BSc in Computer Science' duration='2016 - 2020' place='University of the People' info='I studied Computer Science at the University of the People, an online university. I learned about algorithms, data structures, software engineering, and more.'/>
            <Details type='High School Diploma' duration='2012 - 2016' place='High School' info='I attended high school in my home country. I studied math, physics, chemistry, and other subjects.'/>
            <Details type='Elementary School' duration='2006 - 2012' place='Elementary School' info='I attended elementary school in my home country. I learned how to read, write, and do basic math.'/>
            <Details type='Kindergarten' duration='2004 - 2006' place='Kindergarten' info='I attended kindergarten in my home country. I learned how to socialize with other children and follow instructions.'/>
        </ul>
      </div>
    </div>
  )
}

export default Education