import React from 'react'
import Main from './components/main/Main'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { RootState } from './store/RootReducer'

export default function PageTemplate() {
  const {plansPage, thankyouPage} = useSelector((state: RootState) => state.user.useraccess)
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  React.useEffect(() => {
    if(plansPage){
      navigate("/plan") 
    }
  }, [plansPage])
  React.useEffect(() => {
    if(thankyouPage){
      navigate("/thanks") 
    }
  }, [thankyouPage])
  return (
    <div className={` ${ path === "/thanks" ? 'bg-primaryBodyBg' : 'bg-white' } lg:bg-primaryBodyBg h-screen w-screen lg:flex lg:items-center lg:justify-center`}>
      <Main />
    </div>
  )
}
