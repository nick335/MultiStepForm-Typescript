import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'
import { plandata, addondata } from '../../store/Features/Data/data'
import SelectedAddOn from './SelectedAddOn'
import { nanoid } from '@reduxjs/toolkit'



export default function Reciept() {
  const {planid, planName}=useSelector((state: RootState) => state.user.userplanpackage)
  const { isMonthly } = useSelector((state: RootState) => state.user.userplan)
  const { addonsSelected } = useSelector((state: RootState) => state.user.useraddon)
  const selectedplanPrice = plandata[planid].planPrice
  const total = Total()


  function Total():number{
    let total = 0
    if(isMonthly){
       total += selectedplanPrice.monthly
      for(let i = 0; i < addonsSelected.length; i++){
        total += addondata[i].addonPrices.monthly
      }
      return total
    }else{
      total += selectedplanPrice.yearly
      for(let i = 0; i < addonsSelected.length; i++){
        total += addondata[i].addonPrices.yearly
      }
      return total
    }
  }

  const addonsSelectedElements = addonsSelected.map((each) => {
    return <SelectedAddOn  
              key = {nanoid()}
              name = {addondata[each].addonName}
              addonPrices = {addondata[each].addonPrices}
            />
  })
  return (
    <div>
      <div className='bg-primaryBodyBg px-4 py-4 rounded-lg lg:w-[450px]'>
        <div className='flex justify-between items-center'>
          <div>
            <h4 className='font-semibold text-base text-primaryHeaderColor leading-none'>{planName}({isMonthly ? 'Monthly' : 'Yearly'})</h4>
            <h5 className='lg:cursor-pointer underline text-textColor font-medium lg:hover:text-checkedColor'><Link to='/plan'> Change</Link></h5>
          </div>
          <p className='font-bold text-primaryHeaderColor'>${isMonthly ? selectedplanPrice.monthly : selectedplanPrice.yearly}/{ isMonthly ? 'mo' : 'yr' }</p>
        </div>
        <div className='border-t mt-3 pt-2 lg:mt-4 lg:pt-4'>
          {addonsSelectedElements}
        </div>
      </div>
      <div className='mt-4 px-3 flex items-center justify-between lg:px-6'>
        <h4 className='font-medium text-textColor'>Total(per {isMonthly ? 'month': 'year'})</h4>
        <p className='font-bold text-checkedColor text-lg'>+${total}/{ isMonthly ? 'mo' : 'yr' }</p>
      </div>
    </div>
  )
}
