import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

export const Button = (props) => {
  return (
    <button className={`btn btn-main ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
        {props.children}
    </button>
  )
}

export const ButtonOutline = (props) => {
    return (
    <button className={`btn btn-outline ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
        {props.children}
    </button>
    )
  }

//kiem tra thuộc tính onclick có phải là function không
Button.propTypes = {
    onClick: PropTypes.func,
  };