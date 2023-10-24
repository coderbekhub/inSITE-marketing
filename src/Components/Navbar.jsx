import React, {useState, useEffect} from 'react'
import { WEBMARKETING } from '../tools/constants'
import { getLanguage, getText } from '../locale'
// import navBrand from '../img/navBrand.png'
import navBrand from '../img/brand2.PNG'
import { Link } from 'react-router-dom'

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
        <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
            <div className="navBody container">
              <div className='nav-logo'>
                <Link to='/'>
                  <img src={navBrand} alt="..." />
                </Link>
              </div>

              <ul className={active}>
                <li>
                  <Link onClick={navToggle}  className='nav-link' to='/'> {getText('Home')} </Link>
                </li>
                <li>
                  <Link onClick={navToggle} className='nav-link' to='/xizmatlar'>{getText('Service')}</Link>
                </li>
                <li>
                  <Link onClick={navToggle} className='nav-link' to='/aloqa'>{getText('Contact')}</Link>
                </li>
                <ul className='langList'>
                  <li className='langWrap d-flex align-items-center'>
                    <h5 className='nav-link d-flex align-items-center'>
                      {getLanguage() === 'en' ? <>English <i class='bx bx-chevron-down'></i> </> : getLanguage() === 'ru' ? <>Русский <i class='bx bx-chevron-down'></i> </> : <>O'zbek <i class='bx bx-chevron-down'></i></>}
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
    </section>
  )
}