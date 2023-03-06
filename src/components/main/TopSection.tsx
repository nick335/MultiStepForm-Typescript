import React from 'react'
import { useLocation } from 'react-router-dom'
import { setCurrentLocation } from '../../store/Features/Users/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/RootReducer'




export default function TopSection() {
  const location = useLocation()
  const dispatch = useDispatch()
  const  pagelocation  = useSelector((state : RootState) => state.user.pagelocation)
  React.useEffect(() => {
      dispatch(setCurrentLocation(location.pathname))
  }, [location])

  return (
    <section className='w-full h-48 bg-mobile-bg bg-no-repeat bg-center bg-cover px-[5%] flex justify-center pt-8 gap-5 lg:h-full lg:flex-col lg:items-start lg:px-0 lg:pl-8 lg:pt-8 lg:justify-start lg:bg-desktop-bg lg:w-[250px] lg:min-w-[250px] lg:rounded-xl lg:gap-7 '>
      <div className='routeDiv'>
        <div className={`route-controls ${ pagelocation === '/' ? 'selected-route' : '' }`}>1</div>
        <div className='route-infoDiv'>
          <h2 className='route-h2'>step 1</h2>
          <h3 className='route-h3'>your info</h3>
        </div>
      </div>
      <div className='routeDiv'>
        <div className={`route-controls ${ pagelocation === '/plan' ? 'selected-route' : '' }`}>2</div>
        <div className='route-infoDiv'>
          <h2 className='route-h2'> step 2</h2>
          <h3 className='route-h3'>select plan</h3>
        </div>
      </div>
      <div className='routeDiv'>
        <div className={`route-controls ${ pagelocation === '/addons' ? 'selected-route' : '' }`}>3</div>
        <div className='route-infoDiv'>
          <h2 className='route-h2'>step 3</h2>
          <h3 className='route-h3'>add-ons</h3>
        </div>
      </div>
      <div className='routeDiv'>
        <div className={`route-controls ${ pagelocation === '/summary' || pagelocation === '/thanks' ? 'selected-route' : '' }`}>4</div>
        <div className='route-infoDiv'>
          <h2 className='route-h2'>step 4</h2>
          <h3 className='route-h3'>summary</h3>
        </div>
      </div>
    </section>
  )
}
