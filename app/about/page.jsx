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
    springValue.on("Change", (latestValue) => {
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
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="Passion Fuels Purpose!" className='mb-16' />
            <div className='grid w-full grid-cols-8 gap-16'>
              <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>
                <p className='font-medium'>
                  Paragraph 1
                </p>
                <p className='my-4 font-medium'>
                  Paragraph 2
                </p>
                <p className='font-medium'>
                  Paragraph 3
                </p>
              </div>
              <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                <Image src={profilePic} alt='Mohamed Taher MAALEJ' className='w-full h-auto rounded-2xl' />
              </div>
              <div className='col-span-2 flex flex-col items-end justify-between'>
                <div className='flex flex-col items-end justify-center'>
                  <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={50}/>+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Satisfied Clients</h2>
                </div>
                <div className='flex flex-col items-end justify-center'>
                  <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={40}/>+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects Compeleted</h2>
                </div>
                <div className='flex flex-col items-end justify-center'>
                  <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={2}/>+
                  </span>
                  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Years of Experience</h2>
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