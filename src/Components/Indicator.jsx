import React from 'react'
import CountUp from 'react-countup';
import { getText } from '../locale'

export default function Indicator() {
  return (
    <section className='indicatorSection'>
      <div className="container">
        <div>
          <div className='indicatorContent text-center row'>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={120} duration={2} delay={0} />+</h1>
              <h2>{getText('indicatorTitle')}</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={155} duration={2} delay={0} />+</h1>
              <h2>{getText('indicatorTitle2')}</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={15} duration={2} delay={0} />+</h1>
              <h2>{getText('indicatorTitle3')}</h2>
            </div>
            <div className='col-12 col-md-3 '>
              <h1><CountUp start={0} end={5} duration={2} delay={0} />{getText('indicatorYear')}+</h1>
              <h2>{getText('indicatorTitle4')}</h2>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}
