import React from 'react'
import Brand from '../img/brand2.PNG'

export default function Footer() {
  return (
    <section className='footerSection'>
      <div className="container">
        <div className='footerContent row'>
          <ul className='col-md-4 col-12 servicesList'>
            <li>
              <h2>Xizmatlar</h2>
            </li>
            <li>Veb sayt yaratish</li>
            <li>Veb dizayn</li>
            <li>Telegram bot</li>
            <li>Google va yandexda reklama</li>
          </ul>

          <ul className='col-md-4 col-12 afzalliklarList'>
            <li>
              <h2>Bizning afzaliklarimiz</h2>
            </li>
            <li>Tajribali jamoa a’zolari</li>
            <li>Texnik qo’llab quvatlash</li>
            <li>Qulay narx va sifat</li>
            <li>Kafolatlangan xizmat</li>
            <li>Profisional dizayn</li>
            <li>Kreativ g'oyalar</li>
          </ul>

          <div className='col-md-4 col-12 footerContact'>
            <h2>Bog‘lanish</h2>
            <a href="tel:+998500105610" className='footerPhone'>
              <i class='bx bxs-phone'></i>
              +998 50 010 56 10
            </a>

            <div className='socialList'>
              <div>
                <a href="#"><i class='bx bxl-telegram'></i></a>
              </div>
              <div>
                <a href="#"><i class='bx bxl-instagram-alt' ></i></a>
              </div>
              <div>
                <a href="#"><i class='bx bxl-facebook' ></i></a>
              </div>
              <div>
                <a href="#"><i class='bx bxl-vk'></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className='footerLine'></div>
        <div className='footerLastContent'>
          <a href="#">
            <img src={Brand} alt="..." />
          </a>
          <span>© 2023 webmarketing.uz Barcha huquqlar himoyalangan</span>
        </div>  
      </div>
    </section>
  )
}
