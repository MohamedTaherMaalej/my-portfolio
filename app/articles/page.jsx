'use client'

import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const Article = ({img, title, date, link}) => {
  return (
    <li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-white text-black first:mt-0 border border-solid border-black border-r-4 border-b-4'>
      <Link href={link} target='_blank' className=' capitalize text-xl font-semibold hover:underline'>
      <h2>{title}</h2>
      </Link>
      <span className=''>{date}</span>
    </li>
  )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-white border border-solid border-black rounded-2xl'>
      <div className='absolute top-0 -right-3 left-0 w-full h-full bg-black bg-opacity-50 z-10 rounded-2xl'>
        <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
          <FramerImage src={img} alt={title} width={800} height={400} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          />
        </Link>
        <Link href={link} target='_blank'>
          <h2 className=' capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
        </Link>
        <p className='text-sm mb-2'>{summary}</p>
        <span className='text-red-700 font-semibold pl-4'>{time}</span>
      </div>
    </li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
          <title>Mohamed Taher MAALEJ | Articles Page</title>
          <meta name="description" content="Mohamed Taher MAALEJ's Articles Page" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout>
          <AnimatedText text="Words Can Change The World!" className='mb-16'/>
          <ul className='grid grid-cols-2 gap-16'>
            <FeaturedArticle
              img='/images/article-0.jpg'
              title='Article-0'
              time='5 min read'
              summary='Article-0 Summary'
              link='/articles/article-0'
            />
            <FeaturedArticle
              img='/images/article-1.jpg'
              title='Article-1'
              time='10 min read'
              summary='Article-1 Summary'
              link='/articles/article-1'
            />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
          <ul>
            <Article
              title='Article-0'
              date='February, 2021'
              link='/articles/article-0'
              img=''
            />
            <Article
              title='Article-1'
              date='Mars, 2021'
              link='/articles/article-1'
              img=''
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles