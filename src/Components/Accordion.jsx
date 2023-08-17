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
                Sayt yaratishda nimalar kerak bo’ladi ?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Ish boshlash uchun kerak bo’ladi:
              — Logotip (agar mavjud bo’lsa);
              — Konsepsiya (firma ranglari);
              — Sayt uchun kontent (rasmlar, matnlar, fotosuratlar, videolar va boshqalar);
              — Istaklaringiz va talablaringiz;
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Sayt yaratishga qancha vaqt ketadi ?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              To’liq tayyor holdagi veb-saytlarni yaratish muddati xar xil bo’lishi va loyiha turiga qarab farq qilishi mumkin. Eng oddiy saytni ishga tushirish uchun 7 ish kuni kerak bo’ladi</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Saytni ma’lumotlarini o’zim o’zgartira olamanmi ?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Ha, albatta, sizga ko’rsatmalar va kontentni boshqarish tizimiga kirish imkoniyati taqdim etiladi, bu juda qulay interfeysga ega, u intuitiv darajada tushunarli va maxsus bilimlarni talab qilmaydi.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Sayt bitgach texnik yordam ko’rsatasizlarmi?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Saytizni topshirgandan keyin, tashab qo’ymaymiz. Yil davomida BEPUL texnik yordam va xavfsizligini kafolatlaymiz
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Texnik yordamga nimalar kiradi?
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Domen va hosting;
                Kunlik rezerv nusxa olish;
                Yangi versiyasini o’rnatish;
                Viruslardan himoya;
                Monitoring;
                Ma’lumot yangilash;
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Sayt bitgach texnik yordam ko’rsatasizlarmi?
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Saytizni topshirgandan keyin, tashab qo’ymaymiz. Yil davomida BEPUL texnik yordam va xavfsizligini kafolatlaymiz
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
