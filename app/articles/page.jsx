'use client'

import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'


const FeaturedArticle = ({img, title, time, summary, link}) => {
  return (
    <li>
        <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
          <Image src={img} alt={title} width={800} height={400} className='w-full h-auto' />
        </Link>
        <Link href={link} target='_blank'>
          <h2 className=' capitalize text-2xl font-bold my-2'>{title}</h2>
        </Link>
        <p className='text-sm mb-2'>{summary}</p>
        <span className='text-red-700 font-semibold'>{time}</span>
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
        </Layout>
      </main>
    </>
  )
}

export default articles