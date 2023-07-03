import React from 'react'
import './searchHeader.scss'
import avt from '../../assets/tanmaiavt.jpg'

export default function searchHeader() {
  const use = true;
  return (
    <div className='searchHeader mb-3'>
        <div className='left'>
            <div className='searchHeader__button'>
                <a href="">
                    <i className="fa-solid fa-chevron-left"></i>
                </a>
                <a href="">
                    <i className="fa-solid fa-chevron-right"></i>
                </a>
            </div>
            <div className='searchHeader__input'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Search...' />
            </div>
        </div>
        <div className='right'>
            {
                use?
                    <>
                    <a href="" className='searchHeader__bell'>
                        <i className="fa-solid fa-bell"></i>
                        <span className='hide-bell'></span>
                    </a>
                    <div className='searchHeader__user'>
                        <img src={avt} alt="" />
                        <h4>Tan Mai</h4>
                    </div>
                    </>: null
            }
            
        </div>
    </div>
  )
}
