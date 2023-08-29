import React from 'react'
import { getText } from '../locale'

export default function Advantages() {
  return (
    <section className='advantageSection'>
      <div className="container">
        <h2 className='advantagesTitle'>{getText('advantagesTitle')}</h2>
        <div className='advantageContent row justify-content-center'>
          <div className='col-md-4 col-12'>
            <i class='bx bxs-group' ></i>
            <h3>{getText('advantagesType')}</h3>
            <p>{getText('advantagesText')}</p>
          </div>
          <div className='col-md-4 col-12'>
            <i class='bx bx-support' ></i>
            <h3>{getText('advantagesType2')}</h3>
            <p>{getText('advantagesText2')}</p>
          </div>
          <div className='col-md-4 col-12'>
            <i class='bx bx-purchase-tag' ></i>
            <h3>{getText('advantagesType3')}</h3>
            <p>{getText('advantagesText3')}</p>
          </div>

          <div className='col-md-4 col-12'>
            <i class='bx bxs-check-shield'></i>
            <h3>{getText('advantagesType4')}</h3>
            <p>{getText('advantagesText4')}</p>
          </div>
          <div className='col-md-4 col-12'>
            <i class='bx bxs-castle'></i>
            <h3>{getText('advantagesType5')}</h3>
            <p>{getText('advantagesText5')}</p>
          </div>
          <div className='col-md-4 col-12'>
            <i class='bx bxl-creative-commons' ></i>
            <h3>{getText('advantagesType6')}</h3>
            <p>{getText('advantagesText6')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
