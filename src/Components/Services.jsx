import React from 'react'
import servicesCardIcon from '../img/servicesCardIcon.svg'

export default function Services() {
  return (
    <section className='serviceSection'>
      <div className="container">
        <h2 className='servicesTitle'>Xizmatlarimiz</h2>

        <div className='row servicesContent'>
          <div className='col-md-6 col-12'>
            <div>
              <img src={servicesCardIcon} alt="..." />
              <h3>Veb saytlar</h3>
              <p>Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqamiz</p>
            </div>
            <div>
              <img src={servicesCardIcon} alt="..." />
              <h3>Veb saytlar</h3>
              <p>Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqamiz</p>
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <div>
                <img src={servicesCardIcon} alt="..." />
                <h3>Veb saytlar</h3>
                <p>Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqamiz</p>
              </div>
              <div>
                <img src={servicesCardIcon} alt="..." />
                <h3>Veb saytlar</h3>
                <p>Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqamiz</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
