import React from 'react'
import { userplan } from '../../store/Features/Data/data'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import {  handleSelectPlanPackage } from '../../store/Features/Users/userSlice'

interface planboxProps {
  index: number
  props: userplan
}



export default function PlanBox({props, index}: planboxProps) {
  const dispatch = useDispatch()
  const { planid } = useSelector((state: RootState) => state.user.userplanpackage)
  const { isMonthly }= useSelector((state: RootState) => state.user.userplan)
  const planName = props.planName
  return (
    <div className={`flex border  mt-3 rounded-lg items-start px-3 py-4 gap-4 lg:w-[140px] lg:flex-col lg:px-4 lg:hover:border-checkedColor lg:cursor-pointer transition-all duration-75 ease-in ${planid === index ? 'planBoxSelected': ''}`} onClick={() => dispatch(handleSelectPlanPackage({index, planName}))}>
      <img src={props.planImage} alt='plan-logo' className='lg:mb-6 w-10 h-10'/>
      <div>
        <h3 className='font-bold text-primaryHeaderColor text-base leading-none lg:leading-snug'>{props.planName}</h3>
        <p className='font-normal text-textColor text-[13px]'>${ isMonthly ? props.planPrice.monthly: props.planPrice.yearly}/${isMonthly ? 'mo' : 'yr'}</p>
        { !isMonthly ?<p className='text-xs text-primaryHeaderColor font-medium leading-none lg:leading-snug'>2 months free</p> : <></>}
      </div>
    </div>
  )
}
