import React from 'react'
import Main from './components/main/Main'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom'
import { RootState } from './store/RootReducer'
import Form from './components/main/Form'
import PrivateRoute from './components/main/PrivateRoute'
import Plan from './components/main/Plan'
import AddOn from './components/main/AddOn'
import Summary from './components/main/Summary'
import Thankyou from './components/main/Thankyou'
import Error404 from './Error404'


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
      <Routes>
        <Route path='/' element={<Main />}>
        <Route path='/' element={ <Form /> } />
          <Route path='/plan' element = { <PrivateRoute access={plansPage}><Plan /></PrivateRoute>  } />
          <Route path='/addons' element = { <PrivateRoute access={plansPage}><AddOn /></PrivateRoute>  } />
          <Route path='/summary' element = { <PrivateRoute access={plansPage}><Summary /></PrivateRoute>  } />
          <Route path='/thanks' element = { <PrivateRoute access={thankyouPage}><Thankyou /></PrivateRoute>  } />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}
