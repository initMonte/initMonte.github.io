import React from 'react'
import '../App.css'

import { Header } from "../components/header/Header.tsx"
import { Hero } from '../components/hero/Hero.tsx'
import { Skills } from '../components/skills/Skills.tsx'
import { Projects } from '../components/projects/Projects.tsx'
import { Footer } from '../components/footer/Footer.tsx'
import { Contact } from '../components/contact/Contact.tsx'

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