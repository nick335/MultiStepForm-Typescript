import React from 'react'
import Reciept from './Reciept'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleConfirm } from '../../store/Features/Users/userSlice'

export default function Summary() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function handleGoBack(){
    navigate(-1)
  }
  function handleNext(){
   dispatch(handleConfirm())
  }
  return (
    <section>
      <div className='bodyDiv'>
        <div className='main-body'>
          <h2 className="header">Finishing up</h2>
          <p className="headerPara mb-5 lg:mb-8">Double-check everything looks OK before confirming</p>

          <Reciept />
        </div>
      </div>
      <div className='btnDivSecondary'>
        <button className='back' onClick={handleGoBack}>Go Back</button>
        <button className="btn bg-checkedColor lg:hover:bg-opacity-75" onClick={handleNext}>Confirm</button>
      </div>
    </section>
  )
}
