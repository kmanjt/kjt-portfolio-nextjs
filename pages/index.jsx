import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Kevin | CS Student/Developer</title>
        <meta name="description" content="I'm a Computer Science student and an aspiring Fullstack Developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    </div>
  )
}
