import React from 'react'
import servicesCardIcon from '../img/servicesCardIcon.svg'
import SEOIcon from '../img/seoIcon.png'

export default function Service() {
  return (
    <section className='serviceSection'>
      <div className="container">
        <h2 className='servicesTitle'>Xizmatlarimiz</h2>

        <div className='row servicesContent'>
          <div className='col-md-6 col-12'>
            <div>
              <i class='bx bx-globe' ></i>
              <h3>Veb saytlar</h3>
              <p>Veb-saytingizni biz bilan yarating. Biz turli xildagi saytlarni siz istaganingizdek qilib yaratib beramiz.</p>
            </div>
            <div>
              <i class='bx bx-line-chart'></i>
              <h3>Google reklama (SEO)</h3>
              <p>Google va Yandex qidiruv tizimida saytingizni profisional reklama qilib beramiz </p>
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <div>
                <i class='bx bxl-telegram'></i>
                <h3>Telegram bot</h3>
                <p>Telegram botingizni biz bilan yarating. Biz turli xildagi botlarni siz istaganingizdek qilib yaratib beramiz.</p>
              </div>
              <div>
                <i class='bx bxl-reddit'></i>
                <h3>Veb dizayn</h3>
                <p>Web Dizayn | Sayt Uchun Ijodiy va Betakror G'oyalar</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
