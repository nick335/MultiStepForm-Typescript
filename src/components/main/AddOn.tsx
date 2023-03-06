import React from 'react'
import AddOnBox from './AddOnBox'
import { addondata } from '../../store/Features/Data/data'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

export default function AddOn() {
  const navigate = useNavigate()
  function handleGoBack(){
    navigate(-1)
  }
  function handleNext(){
    navigate('/summary')
  }

  const addonboxelements = addondata.map((each, index) => {
    return <AddOnBox 
              key={nanoid()}
              index={index}
              props = {{
                addonName:each.addonName,
                addonSummary:each.addonSummary,
                addonPrices : each.addonPrices
              }}
            />
  })
  return (
    <section>
      <div className='bodyDiv'>
        <div className='main-body'>
          <h2 className="header">Pick add-ons</h2>
          <p className="headerPara mb-5 lg:mb-8">Add-ons help enhance your gaming experience.</p>
            {addonboxelements}
        </div>
      </div>
      <div className='btnDivSecondary'>
        <button className='back' onClick={handleGoBack}>Go Back</button>
        <button className="btn" onClick={handleNext}>Next Step</button>
      </div>
    </section>
  )
}
