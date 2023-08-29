import React from 'react'
import {getText} from '../locale'
import { get } from 'react-hook-form'

export default function ServicePrice() {
  return (
    <section className='priceSection'>
      <div className="container">
        <h2 className='priceTitle'>{getText('servicePriceTitle')}</h2>
        <div className='priceContent row justify-content-center'>
          <div className='priceCard card'>
            <h2>{getText('servicePriceLanding')}</h2>
            <span>{getText('servicePriceLandingBonus')}</span>
            <div className='priceHr'></div>
            <ul>
              <li>{getText('servicePriceLandingList1')}</li>
              <li>{getText('servicePriceLandingList2')}(200 MG)</li>
              <li>{getText('servicePriceLandingList3')}</li>
              <li>{getText('servicePriceLandingTime1')}</li>
            </ul>
            <h3>299$</h3>
            <a href="tel:+998500105610">{getText('servicePriceConsultation')}</a>
          </div>

          <div className='priceCard card'>
            <h2>{getText('servicePriceCatalog')}</h2>
            <span>{getText('servicePriceLandingBonus')}</span>
            <div className='priceHr'></div>
            <ul>
              <li>{getText('servicePriceLandingList1')}</li>
              <li>{getText('servicePriceLandingList2')} (500 MG)</li>
              <li>{getText('servicePriceLandingList3')}</li>
              <li>{getText('servicePriceCatalogTime2')}</li>
              <li>{getText('servicePriceCatalogPanel')}</li>
            </ul>
            <h3>499$</h3>
            <a href="tel:+998500105610">{getText('servicePriceConsultation')}</a>
          </div>

          <div className='priceCard card'>
            <h2>{getText('servicePriceMagasine')}</h2>
            <span>{getText('servicePriceLandingBonus')}</span>
            <div className='priceHr'></div>
            <ul>
              <li>{getText('servicePriceLandingList1')}</li>
              <li>{getText('servicePriceLandingList2')} (3 GB)</li>
              <li>{getText('servicePriceLandingList3')}</li>
              <li>{getText('servicePriceMagasineTime')}</li>
              <li>{getText('servicePriceCatalogPanel')}</li>
              <li>{getText('servicePriceMagasineXimoya')}</li>
            </ul>
            <h3>1000$</h3>
            <a href="tel:+998500105610">{getText('servicePriceConsultation')}</a>
          </div>
        </div>

        <div className='priceContent row justify-content-center'>
          <div className='priceCard card'>
            <h2>{getText('servicePriceReklamaGoogle')}</h2>
            <span>Bizdan sizga</span>
            <div className='priceHr'></div>
            <ul>
              <li>Raqobatchilaringizning tahlili</li>
              <li>Sayt tahlili + tavsiyalar </li>
              <li>Taklif va byudjetni optimallashtirish</li>
              <li>Kalit so'z tanlash</li>
              <li>Taklif va byudjetni optimallashtirish</li>
              <li>Metrik ulanish</li>
              <li>Haftalik hisobot</li>
              <li>Moslashtirish vaqti: 5-7 kun</li>
            </ul>
            <h3>100$</h3>
            <span className='priceMonth'>oyiga</span>
            <a href="tel:+998500105610">Bepul Konsultatsiya</a>
          </div>

          <div className='priceCard card'>
            <h2>Yandex</h2>
            <span>Bizdan sizga</span>
            <div className='priceHr'></div>
            <ul>
              <li>Raqobatchilaringizning tahlili</li>
              <li>Sayt tahlili + tavsiyalar </li>
              <li>Taklif va byudjetni optimallashtirish</li>
              <li>Kalit so'z tanlash</li>
              <li>Taklif va byudjetni optimallashtirish</li>
              <li>Metrik ulanish</li>
              <li>Haftalik hisobot</li>
              <li>Moslashtirish vaqti: 5-7 kun</li>
            </ul>
            <h3>100$</h3>
            <span className='priceMonth'>oyiga</span>
            <a href="tel:+998500105610">Bepul Konsultatsiya</a>
          </div>

          <div className='priceCard card'>
            <h2>Google + Yandex</h2>
            <span>Bizdan sizga</span>
            <div className='priceHr'></div>
            <ul>
              <li>Raqobatchilaringizning tahlili</li>
              <li>Sayt tahlili + tavsiyalar </li>
              <li>Taklif va byudjetni optimallashtirish</li>
              <li>Kalit so'z tanlash</li>
              <li>Taklif va byudjetni optimallashtirish</li>
              <li>Metrik ulanish</li>
              <li>Haftalik hisobot</li>
              <li>Moslashtirish vaqti: 7-10 kun</li>
            </ul>
            <h3>170$</h3>
            <span className='priceMonth'>oyiga</span>
            <a href="tel:+998500105610">Bepul Konsultatsiya</a>
          </div>
        </div>

      </div>
    </section>
  )
}
