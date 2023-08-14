import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

export default function Header() {
  return (
    <section className='headerSection'>
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </section>
  )
}
