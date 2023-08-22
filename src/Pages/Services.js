import React from 'react'
import Navbar from '../Components/Navbar'
import Service from '../Components/Service'
import ServicePrice from '../Components/ServicePrice'
import Accordion from '../Components/Accordion'
import Footer from '../Components/Footer'

export default function Services() {
  return (
    <section className='serviceSection2'>
      <Navbar />
      <Service />
      <ServicePrice />
      <Accordion />
      <Footer />
    </section>
  )
}
