import React from 'react'
import thanks from '../../assets/icon-thank-you.svg'


export default function Thankyou() {
  return (
    <section className=' lg:my-auto h-full lg:flex lg:items-center'>
      <div className='relative '>
        <div className='main-body py-16  my-auto'>
          <img src={thanks} alt='thanks-icon' className='w-16 h-16 mx-auto' />
          <h2 className="header flex justify-center mt-4">Thank You!</h2>
          <p className="headerPara  text-center mt-2">Thanks for confirming your subcription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
      </div>
    </section>
  )
}
