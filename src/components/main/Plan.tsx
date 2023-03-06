import React from 'react'
import PlanBox from './PlanBox'
import {  plandata } from '../../store/Features/Data/data'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { handleSelectPlan, removeAccess } from '../../store/Features/Users/userSlice'
import { RootState } from '../../store/RootReducer'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimationControls } from 'framer-motion'
export default function Plan() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isMonthly } = useSelector((state: RootState) => state.user.userplan )
  // const control = useAnimationControls()
  // const ControlVariant = {
  //   hidden: {
  //     x:'0'
  //   },
  //   visible: {
  //     x: '20',
  //     transiton: { type: 'spring', duration:1 }
  //   }
  // }
  const data = plandata
  const planboxs = data.map((each, index) => {
    return <PlanBox
            key={nanoid()}
            index={index}   
            props = { {
              planName:each.planName,
              planImage: each.planImage,
              planPrice: each.planPrice
            }}
          />
  })

  function togglePlan(){
    dispatch(handleSelectPlan())
    // control.start('visible')
  }
 
  function handleGoBack(){
    dispatch(removeAccess())
    navigate(-1)
  }
  function handleNext(){
    navigate('/addons')
  }
  return (
    <section>
      <div className='bodyDiv h-[405px]'>
        <div className='main-body -top-[100px]'>
          <h2 className="header">Select your plan</h2>
          <p className="headerPara mb-4">You have the option of monthly or yearly billing.</p>

          <div className='lg:flex lg:gap-5'>
            {planboxs}
          </div>
          

          <div className='flex justify-center items-center w-full bg-primaryBodyBg bg-opacity-50 font-bold rounded-lg py-2 mt-4 lg:mt-6'>
            <p className='text-primaryHeaderColor'>Monthly</p>
            <div className={`h-[18px] w-9 mx-3 p-1 rounded-xl bg-primaryHeaderColor flex items-center transition-all duration-300 ease-in-out ${ isMonthly ? 'justify-start' : 'justify-end'} `}>
              <motion.div  className='h-3 w-3 rounded-full bg-white lg:cursor-pointer ' onClick={togglePlan}/>
            </div>
            <p className='text-borderColor'>Yearly</p>
          </div>
        </div>
      </div>
      <div className='btnDivSecondary'>
        <button className='back' onClick={handleGoBack}>Go Back</button>
        <button className="btn" onClick={handleNext}>Next Step</button>
      </div>
    </section>
  )
}
