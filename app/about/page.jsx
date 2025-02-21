'use client'

import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '@/public/images/profile/developer-pic-2.jpg'
import React, { useEffect, useRef } from 'react'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latestValue) => {
      if (ref.current && latestValue.toFixed(0) <= value) {
        ref.current.textContent = latestValue.toFixed(0)
      }
    })
  }, [springValue, value])

  return (
    <span ref={ref}></span>
  )
}

function about() {
  return (
    <>
        <Head>
            <title>Mohamed Taher MAALEJ | About Page</title>
            <meta name="description" content="Mohamed Taher MAALEJ's About Page" />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
              <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>
                <p className='font-medium'>
                Hi, I&rsquo;m Mohamed Taher MAALEJ, a Cybersecurity Engineer with a passion for securing digital ecosystems and protecting sensitive data. With a strong background in penetration testing, network security, and system defense, I specialize in identifying vulnerabilities and fortifying systems against cyber threats.
                </p>
                <p className='my-4 font-medium'>
                For me, cybersecurity isn&rsquo;t just about defense&mdash;it&rsquo;s about proactively understanding threats, enhancing security infrastructures, and ensuring that digital experiences remain safe, seamless, and resilient. Whether it&rsquo;s conducting security audits, deploying vulnerability management solutions, or strengthening enterprise networks, I bring a meticulous, problem-solving mindset to every challenge.
                </p>
                <p className='font-medium'>
                With expertise in ethical hacking, SIEM solutions, blockchain security, and secure software development, I&rsquo;m always exploring new technologies and innovative strategies to stay ahead of cyber threats. I look forward to the opportunity to bring my skills and passion to your business.
                </p>
              </div>
              <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                <Image src={profilePic} alt='Mohamed Taher MAALEJ' className='w-full h-auto rounded-2xl' />
              </div>
              <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={50}/>+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={40}/>+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Compeleted</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                  <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={4}/>+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
                </div>
              </div>
            </div>
            <Skills />
            <Experience />
            <Education />
          </Layout>
        </main>
    </>
  )
}

export default about