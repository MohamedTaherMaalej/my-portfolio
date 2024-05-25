import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({position, company, companyLink, duration, address, work}) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <LiIcon reference={ref} />
      <motion.div
      initial={{y: 50}}
      whileInView={{y: 0}}
      transition={{duration: 0.5, type: "spring"}}
      
      >
        <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
        target={'_blank'}
        className='text-primary capitalize'>@{company}</a></h3>
        <span className='capitalize font-medium text-black/75'>
          {duration} | {address}
        </span>
        <p className='font-medium w-full'>
          {work}
        </p>

      </motion.div>
    </li>

  )
}

function Experience() {
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
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute top-0 left-9 z-[4px] h-full bg-black origin-top '/>


        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details  position='Software Engineer' company='Company 1' companyLink='https://www.company1.com' duration='2020 - Present' address='City 1, Country 1' work='Work 1'/>
          <Details  position='Software Engineer' company='Company 2' companyLink='https://www.company2.com' duration='2019 - 2020' address='City 2, Country 2' work='Work 2'/>
          <Details  position='Software Engineer' company='Company 3' companyLink='https://www.company3.com' duration='2018 - 2019' address='City 3, Country 3' work='Work 3'/>
          <Details  position='Software Engineer' company='Company 4' companyLink='https://www.company4.com' duration='2017 - 2018' address='City 4, Country 4' work='Work 4'/>
          <Details  position='Software Engineer' company='Company 5' companyLink='https://www.company5.com' duration='2016 - 2017' address='City 5, Country 5' work='Work 5'/>
        </ul>
      </div>
    </div>
  )
}

export default Experience