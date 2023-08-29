import React from 'react'
import { Link } from 'react-router-dom'
import { getText, getLanguage } from '../locale'

export default function Hero() {
  return (
    <section className='heroSection'>
      <div className="container">
        <div className="heroContent">
          <div className="heroInfo">
            <h2><span>{getText('HeroTitle')}</span> {getText('HeroTitleSec')} </h2>
            <p>{getText('HeroText')}</p>
            <Link to='/xizmatlar'>{getText('HeroBtn')}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
