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
            <span>{getText('servicePriceLandingBonus')}</span>
            <div className='priceHr'></div>
            <ul>
              <li>{getText('servicePriceReklamaList1')}</li>
              <li>{getText('servicePriceReklamaList2')}</li>
              <li>{getText('servicePriceReklamaList3')}</li>
              <li>{getText('servicePriceReklamaList4')}</li>
              <li>{getText('servicePriceReklamaList5')}</li>
              <li>{getText('servicePriceReklamaList6')}</li>
              <li>{getText('servicePriceReklamaList7')}</li>
              <li>{getText('servicePriceReklamaList8')}</li>
            </ul>
            <h3>100$</h3>
            <span className='priceMonth'>{getText('servicePriceReklamaMonth')}</span>
            <a href="tel:+998500105610">{getText('servicePriceConsultation')}</a>
          </div>

          <div className='priceCard card'>
            <h2>{getText('servicePriceReklamaYandex')}</h2>
            <span>{getText('servicePriceLandingBonus')}</span>
            <div className='priceHr'></div>
            <ul>
              <li>{getText('servicePriceReklamaList1')}</li>
              <li>{getText('servicePriceReklamaList2')}</li>
              <li>{getText('servicePriceReklamaList3')}</li>
              <li>{getText('servicePriceReklamaList4')}</li>
              <li>{getText('servicePriceReklamaList5')}</li>
              <li>{getText('servicePriceReklamaList6')}</li>
              <li>{getText('servicePriceReklamaList7')}</li>
              <li>{getText('servicePriceReklamaList8')}</li>
            </ul>
            <h3>100$</h3>
            <span className='priceMonth'>{getText('servicePriceReklamaMonth')}</span>
            <a href="tel:+998500105610">{getText('servicePriceConsultation')}</a>
          </div>

          <div className='priceCard card'>
            <h2>{getText('servicePriceReklamaGoogleYandex')}</h2>
            <span>{getText('servicePriceLandingBonus')}</span>
            <div className='priceHr'></div>
            <ul>
              <li>{getText('servicePriceReklamaList1')}</li>
              <li>{getText('servicePriceReklamaList2')}</li>
              <li>{getText('servicePriceReklamaList3')}</li>
              <li>{getText('servicePriceReklamaList4')}</li>
              <li>{getText('servicePriceReklamaList5')}</li>
              <li>{getText('servicePriceReklamaList6')}</li>
              <li>{getText('servicePriceReklamaList7')}</li>
              <li>{getText('servicePriceReklamaGoogleYandex2')}</li>
            </ul>
            <h3>170$</h3>
            <span className='priceMonth'>{getText('servicePriceReklamaMonth')}</span>
            <a href="tel:+998500105610">{getText('servicePriceConsultation')}</a>
          </div>
        </div>

      </div>
    </section>
  )
}
