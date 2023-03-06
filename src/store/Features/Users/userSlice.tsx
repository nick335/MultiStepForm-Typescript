import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import validator from 'validator'

interface userform {
  name: string
  email: string
  number: string
}

interface formerror{
  nameerror: boolean
  emailerror:boolean
  numbererror:boolean
}

interface userpaln {
  isMonthly:boolean
}

interface userplanpackage {
  planid: number
  planName: string 
}
interface userAddons {
  addonsSelected: number[]
}

interface useraccess {
  plansPage: boolean
  addsonPage:boolean
  summaryPage: boolean
  thankyouPage: boolean
}

interface formerrormessage {
  nameerrormessage: string
  emailerrormessage: string
  numbererrormessage: string
}

interface user{
  userform: userform
  userplan: userpaln
  userplanpackage: userplanpackage
  useraddon:userAddons
  useraccess: useraccess
  formerror: formerror
  formeerrormessage: formerrormessage
  pagelocation: string
}

const initialState : user = {
    userform:{
      name: '',
      email: '',
      number: '',
    },
    userplan: {
      // if its fale then plan is yearly
      isMonthly: true
    },
    userplanpackage: {
      planid:0,
      planName:'Arcade'
    },
    useraddon: {
      addonsSelected: [0, 1]
    },
    useraccess: {
      plansPage: false,
      addsonPage: false,
      summaryPage: false,
      thankyouPage: false
    },
    formerror: {
      nameerror: false,
      emailerror: false,
      numbererror: false
    },
    formeerrormessage:{
      nameerrormessage: '',
      emailerrormessage: '',
      numbererrormessage: '',
    },
    pagelocation: ''
}


//function navigate 
  // function Navigate(destination : string){
  //   const navigate = useNavigate()
  //   navigate(destination)
  // }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentLocation: (state, action) => {
      state.pagelocation = action.payload
    },
    setInput: (state, action) => {
      const input:string  = action.payload.payload.current.value
      if(state.useraccess.thankyouPage){
        state.useraccess.thankyouPage= false
      }
      switch(action.payload.type){
        case 'name': {
          state.userform.name = input
          break 
        }
        case 'email' : {
          state.userform.email = input
          break
        }
        case 'number' : {
          state.userform.number = input
          break
        }
        default: 
      }
    },
    handleValidation: (state) =>{
      if(!state.userform.name){
        state.formerror.nameerror = true
        state.formeerrormessage.nameerrormessage = 'This field is required'
      }
      if(!state.userform.email){
        state.formerror.emailerror = true
        state.formeerrormessage.emailerrormessage = 'This field is required'
      }
      if(!state.userform.number){
        state.formerror.numbererror = true
        state.formeerrormessage.numbererrormessage = 'This field is required'
      }
      if(state.userform.email && !validator.isEmail(state.userform.email)){
        state.formerror.emailerror = true
        state.formeerrormessage.emailerrormessage="This is an invalid email"
      }
      if( !state.formerror.emailerror && !state.formerror.nameerror && !state.formerror.numbererror){
        state.useraccess.plansPage = true
      }else{
        state.useraccess.plansPage = false
      }
    },
    handleFormErrorReset: (state) => {
      state.formerror.nameerror = false
      state.formerror.emailerror = false
      state.formerror.numbererror = false
      state.useraccess.plansPage = false
    },
    handleSelectPlanPackage: (state, action) => {
      const id:number =  action.payload.index
      const name:string = action.payload.planName
      state.userplanpackage.planid = id
      state.userplanpackage.planName = name
    },
    handleSelectPlan: (state) => {
      state.userplan.isMonthly = !state.userplan.isMonthly
    },
    handleAddsonClicked: (state, action) =>{
      const selectedaddonid: number = action.payload.index
      const array: number[] = state.useraddon.addonsSelected

      if(array.includes(selectedaddonid)){
        const itemIndex = array.indexOf(selectedaddonid)
        array.splice(itemIndex, 1) 
        state.useraddon.addonsSelected = array
      }else{
        array.push(selectedaddonid)
        state.useraddon.addonsSelected = array
      }
    },
    removeAccess:(state) => {
      state.useraccess.plansPage = false
    },
    handleConfirm:(state) => {
      state.useraccess.thankyouPage=true
      state.useraccess.plansPage=false
    }
  }
})

export default userSlice.reducer
export const { handleValidation, setCurrentLocation, handleFormErrorReset, setInput, handleSelectPlanPackage, handleSelectPlan, removeAccess, handleAddsonClicked, handleConfirm} = userSlice.actions