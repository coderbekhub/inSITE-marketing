import React, {useState, useEffect} from 'react'
import { WEBMARKETING } from '../tools/constants'
import { getLanguage, getText } from '../locale'

export default function Navbar() {
  const changeLanguage = (e) => {
    localStorage.setItem(WEBMARKETING, e)
    document.location.reload(true)
  }

  const [active, setActive] = useState('nav-list')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')

  const navToggle = () => {
    active === 'nav-list'
      ? setActive('nav-list nav__active')
      : setActive('nav-list')

    toggleIcon === 'nav__toggler'
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler")
  }

  const[navbar, setNavbar] = useState(false)

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavbar);

  useEffect(() => {
  }, [])
  return (
    <section className='navSection'>
      {/* <div className="container"> */}
        <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
            <div className="navBody">
              <a href='/'>
                <div className='nav-logo'>
                  {/* <img src={NavBrand} alt="..." /> */}
                  <a href="/">
                    <h1>Web Marketing</h1>
                  </a>
                </div>
              </a>

              <ul className={active}>
                <li>
                  <a onClick={navToggle}  className='nav-link' href="/"> {getText('Home')} </a>
                </li>
                <li>
                  <a onClick={navToggle} className='nav-link' href="#mahsulot">Xizmatlarimiz</a>
                </li>
                <li>
                  <a onClick={navToggle} className='nav-link' href="#loyiha">Narxlar</a>
                </li>
                <li>
                  <a onClick={navToggle} className='nav-link' href="#loyiha">Aloqa</a>
                </li>
                <ul className='langList'>
                  <li className='langWrap d-flex align-items-center'>
                    <h5 className='nav-link d-flex align-items-center'>
                      {getLanguage() === 'en' ? <>English</> : getLanguage() === 'ru' ? <>Русский</> : <>O'zbek</>}
                    </h5>
                    <div className="wrap">
                      <p onClick={() => changeLanguage('uz')}>O'zbek</p>
                      <p onClick={() => changeLanguage('ru')}>Русский</p>
                      <p onClick={() => changeLanguage('en')}>English</p>
                    </div>
                  </li>

                </ul>
              </ul>

              <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
        </nav>
      {/* </div> */}
    </section>
  )
}
