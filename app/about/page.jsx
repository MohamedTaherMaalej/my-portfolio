'use client'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

function about() {
  return (
    <>
        <Head>
            <title>Mohamed Taher MAALEJ | About Page</title>
            <meta name="description" content="Mohamed Taher MAALEJ's About Page" />
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
          <Layout className='pt-16'>
            <AnimatedText text="Passion Fuels Purpose!" className='mb-16' />
            <div className='grid w-full grid-cols-8 gap-16'>
              <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-black/75'>Biography</h2>
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


            </div>
          </Layout>
        </main>
    </>
  )
}

export default about