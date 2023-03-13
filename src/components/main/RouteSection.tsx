import React from 'react'
import {
  Outlet,
  useLocation
} from "react-router-dom";


export default function RouteSection() {
  const location = useLocation()
  return (
    <section className=''>
      <Outlet />
    </section>
  )
}
