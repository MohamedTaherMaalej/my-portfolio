'use client'

import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'

const FeaturedProjects = ({type, title, summary, img, link, github}) => {
  return (
    <article className='flex flex-col items-center justify-center'>
      <Link href={link} target='_blank'>
        <img src={img} alt={title} className='w-full h-auto' />
      </Link>
      <span>{type}</span>
      <Link href={link} target='_blank'>
        <h2>{title}</h2>
      </Link>
      <p>{summary}</p>
      <div>
        <Link href={github} target='_blank'>
          <GithubIcon />
        </Link>
        <Link href={link} target='_blank'>
          Vist Project
        </Link>
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
        <AnimatedText text="Projects"/>
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