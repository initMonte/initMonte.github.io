import '../App.css'

import { Header } from "../components/header/Header"
import { Hero } from '../components/hero/Hero'
import { Skills } from '../components/skills/Skills'
import { Projects } from '../components/projects/Projects'
import { Footer } from '../components/footer/Footer'
import { Contact } from '../components/contact/Contact'

export function Home() {
  return (
    <>
      <Header />
      <main className='main'>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}