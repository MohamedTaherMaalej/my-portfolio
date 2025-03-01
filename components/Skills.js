import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold' 
    whileHover={{scale: 1.05}}
    initial={{x: 0, y: 0}}
    whileInView={{x: x, y: y, transition: {duration: 1.5}}}
    viewport={{once: true}}
    >
      {name}
    </motion.div>
  )
}

function Skills() {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] md:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
      <motion.div className=' flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{scale: 1.05}}>
        ICT
      </motion.div>
      <Skill name='HTML' x='-5vw' y='-10vw'/>
      <Skill name='CSS' x='5vw' y='-10vw'/>
      <Skill name='JavaScript' x='0' y='-20vw'/>
      <Skill name='Next.js' x='-5vw' y='10vw'/>
      <Skill name='Python' x='5vw' y='10vw'/>
      <Skill name='C++' x='0' y='20vw'/>
      <Skill name='C' x='-10vw' y='0'/>
      <Skill name='Java' x='10vw' y='0'/>
      <Skill name='Nmap' x='15vw' y='15vw'/>
      <Skill name='Burp Suite' x='-15vw' y='15vw'/>
      <Skill name='Wireshark' x='15vw' y='-15vw'/>
      <Skill name='Metasploit' x='-15vw' y='-15vw'/>
      <Skill name='SQL' x='20vw' y='0'/>
      <Skill name='Netcat' x='-20vw' y='0'/>
      <Skill name='Linux' x='0' y='30vw'/>
      <Skill name='Windows' x='0' y='-30vw'/>
      <Skill name='Hydra' x='25vw' y='25vw'/>
      <Skill name='John the Ripper' x='-25vw' y='25vw'/>
      <Skill name='Kali Linux' x='25vw' y='-25vw'/>
      <Skill name='Ubuntu' x='-25vw' y='-25vw'/>
      <Skill name='Git' x='30vw' y='0'/>
      <Skill name='GitHub' x='-30vw' y='0'/>

    </div>
    </>
  )
}

export default Skills