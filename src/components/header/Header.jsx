import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div>Header</div>
    <Link to='/'>Home</Link>
    <Link to='/search'>Search</Link>
    </>
  )
}
