import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '@/public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '@/public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Mohamed Taher Maalej Portfolio" />

      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic}  alt='Mohamed Taher Maalej' className='w-full h-auto lg:hidden md:inline-block md:w-full' priority sizes='max-width:768px) 100vw, max-width:1200) 50vw, 50vw' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'> 
              <AnimatedText text='Securing the Future with Strategy and Expertise.' className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a cybersecurity professional with a passion for penetration testing and SOC analysis, I specialize in identifying and mitigating security risks. I am dedicated to building secure, innovative systems and applications while continuously enhancing my skills in offensive and defensive security.
                Explore my latest projects and insights, showcasing my expertise in penetration testing, security operations, and secure application development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='/Mohamed_Taher_MAALEJ_CV_ENG_GitHub_2025.pdf' target={'_blank'} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base' download={true}>Resume <LinkArrow className={"w-6 ml-1"}/></Link>
                <Link href='mailto:mohamed-taher.maalej@proton.me' target={'_blank'} className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>Contact</Link> 
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Mohamed Taher Maalej' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
