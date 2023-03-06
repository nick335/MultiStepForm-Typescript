import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/RootReducer';
import PrivateRoute from './PrivateRoute';
import { AnimatePresence } from 'framer-motion';
import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Form from './Form';
import Plan from './Plan';
import AddOn from './AddOn';
import Summary from './Summary';
import Thankyou from './Thankyou';


export default function RouteSection() {
  const { plansPage, addsonPage, summaryPage, thankyouPage } = useSelector((state: RootState) => state.user.useraccess)
  const location = useLocation()
  return (
    <section className=''>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={ <Form /> } />
          <Route path='/plan' element = { <PrivateRoute access={plansPage}><Plan /></PrivateRoute>  } />
          <Route path='/addons' element = { <PrivateRoute access={plansPage}><AddOn /></PrivateRoute>  } />
          <Route path='/summary' element = { <PrivateRoute access={plansPage}><Summary /></PrivateRoute>  } />
          <Route path='/thanks' element = { <PrivateRoute access={thankyouPage}><Thankyou /></PrivateRoute>  } />
        </Routes>
    </section>
  )
}
