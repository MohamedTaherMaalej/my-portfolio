'use client'
import AnimatedText from '@/components/AnimatedText'
import React from 'react'

const articles = () => {
  return (
    <>
      <Head>
          <title>Mohamed Taher MAALEJ | Articles Page</title>
          <meta name="description" content="Mohamed Taher MAALEJ's Articles Page" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout>
          <AnimatedText text="Words Can Change The World!" className='mb-16'/>
        </Layout>
      </main>
    </>
  )
}

export default articles