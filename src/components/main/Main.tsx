import React from 'react'
import TopSection from './TopSection'
import RouteSection from './RouteSection'
export default function Main() {
  return (
    <main className='lg:bg-white lg:min-w-[900px] lg:max-w-[900px] mx-auto lg:flex lg:gap-10 lg:px-4 lg:rounded-xl lg:min-h-[500px] lg:h-[570px] xl:h-[550px] lg:max-h-[90%] lg:py-4 lg:relative'>
      <TopSection />
      <RouteSection />
    </main>
  )
}
