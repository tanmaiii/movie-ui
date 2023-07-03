import React from 'react'
import PropTypes from 'prop-types'
import './castItem.scss'
import apiConfig from '../../../api/apiConfig'
import {ButtonOutline} from '../../button/Button'
import noFile from '../../../assets/nofile.jpg'

function CastItem(props) {
  const item = props.item

  const img = item.profile_path ? apiConfig.w500Image(item.profile_path) : noFile

  return (
    <div className='cast-item'>
      <div className='castItem' style={{backgroundImage : `url(${img})`}}>
          <div className='castItem__body'>
            <div className='castItem__body__control'>
                <button>
                    <i className="fa-sharp fa-solid fa-plus"></i> 
                </button>
            </div>
            <div className='castItem__body__content'>
              <h5>{item.name}</h5>
              <span>+12 movie</span>
            </div>
          </div>
      </div>
    </div>
  )
}

CastItem.propTypes = {
    // props: PropTypes.node.isRequired
}

export default CastItem
