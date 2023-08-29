import React from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
export default function Hero() {
  return (
    <section className='heroSection'>
      <div className="container">
        <div className="heroContent">
          <div className="heroInfo">
            <h2><span>Web Marketing -</span>  ishonchli <br /> loyihangiz uchun hamkor</h2>
            <p>Shaxsiy brendingizni biz bilan rivojlantiring. Biz sizning maqsadlaringiz haqida qayg'uramiz va sizlarga eng yaxhi sifatni ulashishga jamomiz bilan astoydil harakat qilamiz bizga bildirgan ishonchingiz uchun "Web Marketing" jamoasi o'z minatdorchiligini bildiradi.</p>
            <Link to='/xizmatlar'>BATAFSIL</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
