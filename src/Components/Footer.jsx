import React from 'react'
import Brand from '../img/brand2.PNG'
import {getText} from '../locale'

export default function Footer() {
  return (
    <section className='footerSection'>
      <div className="container">
        <div className='footerContent row'>
          <ul className='col-md-4 col-12 servicesList'>
            <li>
              <h2>{getText('footerServiceTitle')}</h2>
            </li>
            <li>{getText('footerServiceLink')}</li>
            <li>{getText('footerServiceLink2')}</li>
            <li>{getText('footerServiceLink3')}</li>
            <li>{getText('footerServiceLink4')}</li>
          </ul>

          <ul className='col-md-4 col-12 afzalliklarList'>
            <li>
              <h2>{getText('footerAdvantagesTitle')}</h2>
            </li>
            <li>{getText('footerAdvantagesLink')}</li>
            <li>{getText('footerAdvantagesLink2')}</li>
            <li>{getText('footerAdvantagesLink3')}</li>
            <li>{getText('footerAdvantagesLink4')}</li>
            <li>{getText('footerAdvantagesLink5')}</li>
            <li>{getText('footerAdvantagesLink6')}</li>
          </ul>

          <div className='col-md-4 col-12 footerContact'>
            <h2 className='footerContactTitle'>{getText('footerContactPhone')}</h2>
            <a href="tel:+998500105610" className='footerPhone'>
              <i class='bx bxs-phone'></i>
              +998 50 010 56 10
            </a>

            <div className='socialList'>
              <div>
                <a href="https://t.me/webmarketing_hr" target='_blank'><i class='bx bxl-telegram'></i></a>
              </div>
              <div>
                <a href="https://www.instagram.com/webmarketing.uz/" target='_blank'><i class='bx bxl-instagram-alt' ></i></a>
              </div>
              <div>
                <a href="https://www.facebook.com/mirsodiq.mirzohidov.5" target='_blank'><i class='bx bxl-facebook' ></i></a>
              </div>
              <div>
                <a href="https://t.me/webmarketing_hr" target='_blank'><i class='bx bxl-vk'></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className='footerLine'></div>
        <div className='footerLastContent'>
          <a href="#">
            <img src={Brand} alt="..." />
          </a>
          <span>{getText('footerLastText')}</span>
        </div>  
      </div>
    </section>
  )
}
