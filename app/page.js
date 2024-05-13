import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
// import profilePic from '@/public/images/profile/profile.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Mohamed Taher Maalej Portfolio" />

      </Head>
      <main className='flex items-center w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src=''  alt='Mohamed Taher Maalej' className='w-full h-auto' />
            </div>
            <div>
              <h1 className='text-4xl font-bold'>Mohamed Taher Maalej</h1>
              <p className='text-lg font-medium'>ICT Engineering Student</p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
