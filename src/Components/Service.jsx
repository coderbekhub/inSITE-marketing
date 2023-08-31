import React from 'react'
import { getText } from '../locale'

export default function Service() {
  return (
    <section className='serviceSection'>
      <div className="container">
        <h2 className='servicesTitle'>{getText('serviceTitle')}</h2>
        <div className='row servicesContent justify-content-center'>
          <div  className='col-xl-6 col-md-6 col-12'>
            <i class='bx bx-globe'></i>
            <h3>{getText('serviceType')}</h3>
            <p>{getText('serviceText')}</p>
          </div>
          <div className='test col-xl-6 col-md-6 col-12'>
            <i class='bx bx-line-chart'></i>
            <h3>{getText('serviceType2')}</h3>
            <p>{getText('serviceText2')} </p>
          </div>
          <div className='col-xl-6 col-md-6 col-12'>
            <i class='bx bxl-telegram'></i>
            <h3>{getText('serviceType3')}</h3>
            <p>{getText('serviceText3')}</p>
          </div>
          <div className='test col-xl-6 col-md-6 col-12'>
            <i class='bx bxl-reddit'></i>
            <h3>{getText('serviceText4')}</h3>
            <p>{getText('serviceText4')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
