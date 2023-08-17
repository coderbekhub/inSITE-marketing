import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'

export default function Contact() {
  const BOT_TOKEN = "6189574670:AAF6_AfceRuiuG3ZrSo_CSwfYyiY4hrpPb8";
  const CHAT_ID = "-1001892280247"

  function formValidationChacking(name, number) {
    let isBoolean = false;

    if (!name) {
      setError(p => ({ ...p, name: [true, 'F.I.O. kiritilmadi!'] }))
      isBoolean = true

    } else if (name?.length < 6) {
      setError(p => ({ ...p, name: [true, "Bunchalik qisqa F.I.O. bo'lmaydi"] }))
      isBoolean = true
    }

    if (!number) {
      setError(p => ({ ...p, phone: [true, 'Telefon raqam kiritilmadi!'] }))
      isBoolean = true
    }
    return isBoolean;
  }

  const sendForm = (e) => {
    e.preventDefault()
    let name = e.target[0].value
    let number = e.target[1].value

    if (formValidationChacking(name, number)) return
    setDisbl(true)

    let text = `<b>Ismi:</b> ${name} \n<b>Telefon raqami:</b> ${number} \n`

    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text
    }, {
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    })
      .then((res) => {
        toast.success("Habar yuborildi 🙂")
        e.target.reset()
        setDisbl(false)
      })
      .catch((err) => {
        toast.error("Habar yuborilmadi! Qaytadan urinib ko'ring 😞")
        setDisbl(false)
      })

    let style = {}
    if (inputValue === '') {
      style = {
        border: '2px solid red'
      }
    }
    else {
      style = {
        border: '2px solid green'
      }
    }
    setStyled(style)
  }

  const [styled, setStyled] = useState({ border: '1px solid red', borderRadius: '2px' })
  const [inputValue, setValue] = useState('')
  const [disbl, setDisbl] = useState(false)
  const [error, setError] = useState({
    name: [false, ""],
    phone: [false, ""],
  })

  return (
    <section className='contactSection'>
      <div className="container">
        <h2 className='contactTitle'>Biz bilan aloqa</h2>
        <div className='row contactContent text-center'>
        <div className='col-md-6 col-12 contactInfo'>
          <div>
            <a href="tel:+998500105610">
              <i class='bx bxs-phone'></i>
              +998 50 0105610</a>
            <a className='contactInsta' href="https://www.instagram.com/webmarketing.uz/">
              <i class='bx bxl-instagram-alt' ></i>
              webmarketing.uz</a>
          </div>
          <div className='map'>
            <iframe className='googleMap' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11986.72155460763!2d69.27582195!3d41.31581609999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1667807743095!5m2!1sru!2s"></iframe>
          </div>
        </div>

          <form className='col-md-6 col-12' onSubmit={sendForm}>
            <div>
              <input type="text" id='name' required placeholder='Ism' onChange={() => setError(p => ({ ...p, name: [false, ''] }))} style={error.name[0] ? styled : null} />
              {error.name[0] && <p style={{ color: 'red' }}>{error.name[1]}</p>}
              <br />
                <input onChange={() => setError(p => ({ ...p, name: [false, ''] }))} style={error.name[0] ? styled : null} type="tel" id='number' 
                  autocomplete="on" maxlength="13" minlength="4" data-intl-tel-input-id="1" placeholder='+998 (__)___-__-__' 
                  onChange={(e) => {
                    e.target.setCustomValidity("");
                    if (!e.target.validity.valid) {
                      e.target.setCustomValidity(
                        "Raqamni noto'g'ri kiritdingiz! Misol: +998 (97) 7770777"
                      );
                    }
                    setError(p => ({ ...p, phone: [false, ''] }))
                  }} pattern="[+]{1}[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
                /> 
              {error.phone[0] && <p style={{ color: 'red' }}>{error.phone[1]}</p>}
            </div>
            <div className='col-md-12 col-12'>
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Izoh qo’ldiring'></textarea>
            </div>
              <button disabled={disbl}>Yuborish</button>
          </form>
          
          
        </div>
      </div>
    </section>
  )
}
