import React, { useEffect } from 'react'
import './navbar.scss'
import { Link , useLocation} from 'react-router-dom'
import imgLogo from '../../assets/logo.png'



export default function Navbar() {
  const {pathname} = useLocation();

  useEffect(() => {
    const linkTagNameA = document.querySelectorAll('.navbar a')
    linkTagNameA.forEach(item => {
      item.parentElement.classList.remove('active')
      if(item.getAttribute('href') === pathname) {
        item.parentElement.classList.add('active')
      }
    })

  },[pathname])



  return (
    <div className='navbar pc-2 t-3 m-0'>
        <div className='navbar__item navbar__logo'>
          <img src={imgLogo} alt="" />
          <Link to='/'>
            <h2>Movie S2</h2>
          </Link>
        </div>
        <div className='navbar__item navbar__menu'>
            <h4>Menu</h4>
            <ul>
              <li>
                <i className="fa-solid fa-house"></i>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <i className="fa-solid fa-building"></i>
                <Link to='/community'>Community</Link>
              </li>
              <li className=''>
                <i className="fa-solid fa-earth-americas"></i>
                <Link to='/discovery'>Discovery</Link>
              </li>
              <li>
              <i className="fa-solid fa-clock"></i>
                <Link to='/coming-soon'>Coming soon</Link>
              </li>
              
            </ul>
        </div>
        <div className='navbar__item navbar__social'>
            <h4>Social</h4>
            <ul>
              <li>
                <i className="fa-solid fa-house"></i>
                <Link to='/friends'>Friends</Link>
              </li>
              <li>
              <i className="fa-solid fa-building"></i>
                <Link to='/parties'>Parties</Link>
              </li>
              <li>
              <i className="fa-solid fa-compass"></i>
                <Link to='/media'>Media</Link>
              </li>
            </ul>
        </div>
        <div className='navbar__item navbar__general'>
            <h4>General</h4>
            <ul>
              <li>
                <i className="fa-solid fa-gear"></i>
                <Link to='/setting'>Setting</Link>
              </li>
              <li>
                <div className=''>
                    <i class="fa-solid fa-sun"></i>
                    <span>
                        Light Mode  
                    </span>
                </div>
                {/* <div className=''>
                    <i class="fa-solid fa-sun"></i>
                    <span>
                        Light Mode  
                    </span>
                </div> */}
              </li>
              <li>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to='/log-out'>Log Out</Link>
              </li>
            </ul>
        </div>
    </div>
  )
}
