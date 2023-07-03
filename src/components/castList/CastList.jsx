import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './castList.scss'
import noFile from '../../assets/nofile.jpg'
import CastItem from './castItem/CastItem'
import apiConfig from '../../api/apiConfig'
import tmdbApi, {category} from '../../api/tmdbApi'


function CastList(props) {
    const [casts, setCasts] = useState([])

    useEffect(()=>{
        const params ={page: 1, language: 'vi'}
        const fetchData = async () => {
                const response = await tmdbApi.credits(category.movie, 603692, {params})
                setCasts(response.cast.slice(0,12));
        };
        fetchData()
    },[])

  return (
    <div className='castList__container mt-3'>
        <div className='castList__container__header'>
            <h4>Best Artists</h4>
            <div className='castList__container__header__control'>
                <div className='progress-bar'>
                </div>
                <button className='handle btn-left'>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className='handle btn-right'>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
        <div className='castList__container__slider'>
            {
                casts.map((item,i)=>(
                    <CastItem key={i} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

CastList.propTypes = {
    
}

export default CastList
