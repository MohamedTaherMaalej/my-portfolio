'use client'

import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import Project1 from '@/public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const FeaturedProjects = ({type, title, summary, img, link, github}) => {
  return (
    <article className='w-flex flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounder-br-3xl dark:bg-light' />
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} width={800} height={400} className='w-full h-auto'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        />
      </Link>
      <div className='w-full flex flex-col items-start justify-between pl-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl text-bold dark:text-light'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>
            Vist Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({title, type, img, link, github}) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounder-br-3xl dark:bg-light' />
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} width={800} height={400} className='w-full h-auto'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl text-bold'>{title}</h2>
        </Link>
        <div className='mt-2 w-full flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline'>
            Vist
          </Link>
          <Link href={github} target='_blank' className='w-8'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}


const projects = () => {
  return (
    <>
    <Head>
        <title>Mohamed Taher MAALEJ | Projects Page</title>
        <meta name="description" content="Mohamed Taher MAALEJ's Projects Page" />
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16'>
        <AnimatedText text="Projects" className='mb-16'/>
        <div className='grid grid-cols-12 gap-14'>
          <div className='col-span-12'>
            <FeaturedProjects
              type='Featured'
              title='Project-0'
              summary='Project-0 Summary'
              img={Project1}
              link='/projects/project-0'
              github=''
            />
          </div>
          <div className='col-span-6'>
            <Project
              type='Project'
              title='Project-0'
              summary='Project-0 Summary'
              img={Project1}
              link='/projects/project-0'
              github=''
            />
          </div>
          <div className='col-span-6'>
            <Project
              type='Project'
              title='Project-1'
              summary='Project-1 Summary'
              img={Project1}
              link='/projects/project-1'
              github=''
            />
          </div>
          <div className='col-span-12'>
            <FeaturedProjects
              type='Featured'
              title='Project-3'
              summary='Project-3 Summary'
              img={Project1}
              link='/projects/project-3'
              github=''
            />
          </div>
          <div className='col-span-6'>
            <Project
              type='Project'
              title='Project-2'
              summary='Project-2 Summary'
              img={Project1}
              link='/projects/project-2'
              github=''
            />
          </div>
          <div className='col-span-6'>
            <Project
              type='Project'
              title='Project-3'
              summary='Project-3 Summary'
              img={Project1}
              link='/projects/project-3'
              github=''
            />
          </div>
        </div>
      </Layout>
    </main>
    </>
  )
}

export default projects