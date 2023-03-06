import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div>
      <h1>Error 404</h1>
      <h3>Page Not Found</h3>
      <button><Link to='/'>Go home</Link></button>
    </div>
  )
}
