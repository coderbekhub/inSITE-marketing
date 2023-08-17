import React from 'react'
import HeroImg3D from '../img/heroImg3D.png'

export default function Hero() {
  return (
    <section className='heroSection'>
      <div className="heroContent">
        <div className="heroInfo">
          <h2><span>Web Marketing</span> - ishonchli <br /> loyihangiz uchun hamkor</h2>
          <p>Shaxsiy brendingizni biz bilan rivojlantiring. Biz sizning maqsadlaringiz haqida qayg'uramiz va sizlarga eng yaxhi sifatni ulashishga jamomiz bilan astoydil harakat qilamiz bizga bildirgan ishonchingiz uchun "Web Marketing" jamoasi o'z minatdorchiligini bildiradi.</p>
          <a href="tel:+998500105610">Bog‘lanish</a>
        </div>
        <div>
          <img src={HeroImg3D} alt="..." /> 
        </div>
      </div>
    </section>
  )
}
