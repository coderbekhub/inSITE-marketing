import React from 'react'
import CountUp from 'react-countup';

export default function Indicator() {
  return (
    <section className='indicatorSection'>
      <div className="container">
        <div>
          <div className='indicatorContent text-center row'>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={30} duration={2} delay={0} />+</h1>
              <h2>Muvaffaqiyatli ishlarimiz soni</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={45} duration={2} delay={0} />+</h1>
              <h2>MAMNUN MIJOZLAR</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={15} duration={2} delay={0} />+</h1>
              <h2>XIZMAT TURLARI</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={5} duration={2} delay={0} />yil+</h1>
              <h2>ISH TAJRIBAMIZ</h2>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}
