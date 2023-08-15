import React from 'react'

export default function Accordion() {
  return (
    <section className='accordionSection'>
      <div className="container">
        <h2 className='accordionTitle'>Tez-tez so'raladigan savollar</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Ilova yaratish qancha turadi?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                "Barcha ilovalar bir xil tarzda yaratilgan emas", deyiladi "Texnik bog'liqlik deklaratsiyasi". Veb va mobil ilovaning turi yechimning murakkabligini va uni ishlab chiqish jarayoni uchun zarur bo'lgan soatlar sonini aniqlaydi. IT sohasida odamlarga to'lash bo'yicha sanoat standarti soatlik tariflarda o'lchanadi, ularning narxi har qanday joyda 20 dan 200 dollar / soatgacha o'zgaradi.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Ilova yaratish qancha turadi?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                "Barcha ilovalar bir xil tarzda yaratilgan emas", deyiladi "Texnik bog'liqlik deklaratsiyasi". Veb va mobil ilovaning turi yechimning murakkabligini va uni ishlab chiqish jarayoni uchun zarur bo'lgan soatlar sonini aniqlaydi. IT sohasida odamlarga to'lash bo'yicha sanoat standarti soatlik tariflarda o'lchanadi, ularning narxi har qanday joyda 20 dan 200 dollar / soatgacha o'zgaradi.              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Ilova yaratish qancha turadi?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                "Barcha ilovalar bir xil tarzda yaratilgan emas", deyiladi "Texnik bog'liqlik deklaratsiyasi". Veb va mobil ilovaning turi yechimning murakkabligini va uni ishlab chiqish jarayoni uchun zarur bo'lgan soatlar sonini aniqlaydi. IT sohasida odamlarga to'lash bo'yicha sanoat standarti soatlik tariflarda o'lchanadi, ularning narxi har qanday joyda 20 dan 200 dollar / soatgacha o'zgaradi.              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Ilova yaratish qancha turadi?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                "Barcha ilovalar bir xil tarzda yaratilgan emas", deyiladi "Texnik bog'liqlik deklaratsiyasi". Veb va mobil ilovaning turi yechimning murakkabligini va uni ishlab chiqish jarayoni uchun zarur bo'lgan soatlar sonini aniqlaydi. IT sohasida odamlarga to'lash bo'yicha sanoat standarti soatlik tariflarda o'lchanadi, ularning narxi har qanday joyda 20 dan 200 dollar / soatgacha o'zgaradi.              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Ilova yaratish qancha turadi?
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                "Barcha ilovalar bir xil tarzda yaratilgan emas", deyiladi "Texnik bog'liqlik deklaratsiyasi". Veb va mobil ilovaning turi yechimning murakkabligini va uni ishlab chiqish jarayoni uchun zarur bo'lgan soatlar sonini aniqlaydi. IT sohasida odamlarga to'lash bo'yicha sanoat standarti soatlik tariflarda o'lchanadi, ularning narxi har qanday joyda 20 dan 200 dollar / soatgacha o'zgaradi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
