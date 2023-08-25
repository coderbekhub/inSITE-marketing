import React from 'react'
import HeroImg3D from '../img/heroImg3D.png'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className='heroSection'>
      <div className="container">
        <div className="row heroContent justify-content-center">
          <div className="col-md-6 col-12 heroInfo">
            <h2><span>Web Marketing -</span>  ishonchli <br /> loyihangiz uchun hamkor</h2>
            <p>Shaxsiy brendingizni biz bilan rivojlantiring. Biz sizning maqsadlaringiz haqida qayg'uramiz va sizlarga eng yaxhi sifatni ulashishga jamomiz bilan astoydil harakat qilamiz bizga bildirgan ishonchingiz uchun "Web Marketing" jamoasi o'z minatdorchiligini bildiradi.</p>
            <Link to='/xizmatlar'>BATAFSIL</Link>
          </div>
          <div className='col-md-6 col-12'>
            <img src={HeroImg3D} alt="..." /> 
          </div>
        </div>
      </div>
    </section>
  )
}
