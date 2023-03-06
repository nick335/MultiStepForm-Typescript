import React from 'react'
import { useraddons } from '../../store/Features/Data/data'
import { RootState } from '../../store/RootReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { handleAddsonClicked } from '../../store/Features/Users/userSlice'
interface addonboxProps {
  index: number
  props:useraddons
}

export default function AddOnBox({props, index}: addonboxProps) {
  const { isMonthly }= useSelector((state: RootState) => state.user.userplan)
  const { addonsSelected  } = useSelector((state: RootState) => state.user.useraddon)
  const selected: boolean = addonsSelected.includes(index) ? true : false 
  const dispatch = useDispatch()
  return (
    <div className={`flex items-center border  rounded-lg py-3 px-3 mt-3.5 lg:w-[400px] lg:px-4 lg:mt-4 ${ selected ? 'planBoxSelected' : 'border-borderColor' }`}>
      <input className="w-5 h-5 rounded-lg outline-0" id="morning" type="checkbox" checked={ selected ? true : false} onClick={()=> dispatch(handleAddsonClicked({index}))} readOnly/>
      <div className='ml-4 lg:ml-7'>
        <h3 className='text-primaryHeaderColor text-sm font-bold'>{props.addonName}</h3>
        <p className='text-xs font-normal text-textColor '>{props.addonSummary}</p>
      </div>
      <p className='text-xs text-checkedColor ml-auto'>+${ isMonthly ? props.addonPrices.monthly: props.addonPrices.yearly}/{isMonthly ? 'mo' : 'yr'}</p>
    </div>
  )
}
