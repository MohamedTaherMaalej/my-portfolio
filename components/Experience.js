import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({position, company, companyLink, duration, address, work}) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
      initial={{y: 50}}
      whileInView={{y: 0}}
      transition={{duration: 0.5, type: "spring"}}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
        target={'_blank'}
        className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {duration} | {address}
        </span>
        <p className='font-medium w-full md:text-sm'>
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
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl sm:text-4xl md:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>


        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          {/* <Details  position='Cybersecurity Engineer' company='Freelance' companyLink='https://www.mohamedtahermaalej.com' duration='2025 - Present' address='Paris, France' work='Conducting penetration testing and vulnerability assessments to identify and mitigate security risks.
Implementing SIEM solutions for real-time threat detection and response.
Collaborating on security audits and compliance assessments to ensure adherence to industry standards.'/> */}
          <Details  position='Cyber Security Engineer' company='SFR Business' companyLink='https://www.sfrbusiness.fr' duration='May - October 2025' address='Paris, France' work=''/>
          <Details  position='Blockchain Security Engineer' company='Advans Group' companyLink='https://www.advans-group.com' duration='April - August 2024' address='Sophia Antipolis, France' work='Developed and deployed smart contracts on the Ethereum blockchain, ensuring secure implementation through robust testing.
  Conducted security audits on blockchain applications, identifying vulnerabilities in Solidity-based contracts.
  Implemented cryptographic mechanisms to enhance data integrity and transaction security.

  Performed security audits on Ethereum smart contracts, using tools like Slither, Mythril, and Echidna to identify vulnerabilities.  
  Conducted threat modeling and penetration testing on blockchain protocols to mitigate attack vectors such as reentrancy attacks and front-running exploits.  
  Implemented cryptographic mechanisms, including secure key management and transaction validation, to enhance data integrity.  
  Developed security guidelines for Solidity smart contract development, ensuring adherence to best practices and compliance with blockchain security frameworks.'/>
          <Details  position='Python/Odoo Developer' company='Fogits International' companyLink='https://www.fogits.com' duration='July - August 2022' address='Sfax, Sfax' work='Designed and developed a new Odoo module to automate the management of company resources.
Worked on backend development using Python to optimize system performance and functionality.
Assisted in deploying and configuring Odoo ERP solutions for the enterprise.'/>
          {/* <Details  position='Freelance Cybersecurity Consultant' company='Freelance' companyLink='https://www.mohamedtahermaalej.com' duration='2014 - Present' address='Remote / Various Locations' work='Providing cybersecurity consulting services, including penetration testing, vulnerability assessments, and security audits.  
  Assisting clients in implementing best practices for securing their systems, networks, and applications.  
  Developing custom security tools and automating security workflows.'/> */}

{/* <Details  
  position='Freelance Python Developer'  
  company='Freelance'  
  companyLink='https://www.mohamedtahermaalej.com'  
  duration='2014 - 2018'  
  address='Remote'  
  work='Developed multiple Python-based automation scripts for data processing and system administration.  
  Built web applications and APIs using Django and Flask for small businesses and startups.  
  Created custom security scripts to monitor and analyze system logs for potential security threats.'  
/>   */}

{/* <Details  
  position='Freelance Software Engineer'  
  company='Freelance'  
  companyLink='https://www.mohamedtahermaalej.com'  
  duration='2018 - 2021'  
  address='Remote'  
  work='Worked on full-stack application development, utilizing Python, JavaScript, and SQL to build scalable software solutions.  
  Developed and optimized REST APIs for enterprise applications, ensuring efficiency and security.  
  Assisted startups in secure software development by integrating OWASP best practices into their development lifecycle.'  
/>   */}

{/* <Details  
  position='Freelance Pentester & Cybersecurity Consultant'  
  company='Freelance'  
  companyLink='https://www.mohamedtahermaalej.com'  
  duration='2021 - Present'  
  address='Remote'  
  work='Conducting penetration testing and ethical hacking for web applications, networks, and enterprise systems.  
  Providing cybersecurity consulting services, including security policy development, risk assessment, and compliance audits.  
  Implementing SIEM solutions (Splunk, Wazuh) and security monitoring frameworks to enhance threat detection.  
  Conducting security awareness training and advising organizations on incident response strategies.'  
/>  */}
        </ul>
      </div>
    </div>
  )
}

export default Experience