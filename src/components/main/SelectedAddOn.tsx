import React from 'react'
import { planprice } from '../../store/Features/Data/data'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'
interface selectedaddonprops {
  name:string
  addonPrices: planprice
}

export default function SelectedAddOn({name, addonPrices}: selectedaddonprops) {
  const { isMonthly } = useSelector((state: RootState) => state.user.userplan)
  return (
    <div className='flex justify-between items-center mb-2.5 lg:mb-3.5'>
      <h4 className='font-medium text-textColor'>{name}</h4>
      <p className='font-medium text-primaryHeaderColor'>${isMonthly ? addonPrices.monthly : addonPrices.yearly}/{ isMonthly ? 'mo' : 'yr' }</p>
    </div>
  )
}
