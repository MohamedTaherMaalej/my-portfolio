'use client'

import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'

const FeaturedProjects = ({type, title, summary, img, link, github}) => {
  return (
    <article className='flex flex-col items-center justify-between rounded-3xl border border-solid border-black bg-white shadow-2xl p-12'>
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} width={800} height={400} className='w-full h-auto' />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-red-600 font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl text-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-black'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold'>
            Vist Project
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
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText text="Projects" className='mb-16'/>
        <div className='grid grid-cols-12 gap-14'>
          <div className='col-span-12'>
            <FeaturedProjects
              type='Featured'
              title='Project-0'
              summary='Project-0 Summary'
              img='/images/project-0.jpg'
              link='/projects/project-0'
              github=''
            />
          </div>
          <div className='col-span-6'>
            Project-1
          </div>
          <div className='col-span-6'>
            Project-2
          </div>
          <div className='col-span-12'>
            <FeaturedProjects
              type='Featured'
              title='Project-3'
              summary='Project-3 Summary'
              img='/images/project-3.jpg'
              link='/projects/project-3'
              github=''
            />
          </div>
          <div className='col-span-6'>
            Project-3
          </div>
          <div className='col-span-6'>
            Project-4
          </div>
        </div>
      </Layout>
    </main>
    </>
  )
}

export default projects