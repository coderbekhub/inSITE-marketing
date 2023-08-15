import React from 'react'
import HeroImg3D from '../img/heroImg3D.png'

export default function Hero() {
  return (
    <section className='heroSection'>
      <div className="heroContent">
        <div className="heroInfo">
          <h2><span>Web Marketing</span> - ishonchli <br /> loyihangiz uchun hamkor</h2>
          <p>IT-autsorsing kompaniyasi ilovasi va uning maqsadi, jumladan uning xususiyatlari va maqsadli auditoriyasi bilan tanishtiring. IT-autsorsing kompaniyasi ilovasi va uning maqsadi, jumladan uning xususiyatlari va maqsadli auditoriyasi bilan tanishtiring. </p>
          <a href="tel:+998500105610">Bog‘lanish</a>
        </div>
        <div>
          <img src={HeroImg3D} alt="..." /> 
        </div>
      </div>
    </section>
  )
}
