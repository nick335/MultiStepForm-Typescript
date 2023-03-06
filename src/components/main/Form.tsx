import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { handleValidation, handleFormErrorReset, setInput} from "../../store/Features/Users/userSlice";
import { RootState } from "../../store/RootReducer";
// import PhoneInput from 'react-phone-input-2'
// import "react-phone-input-2/lib/style.css";

export default function Form(){
  const nameRef = React.useRef<HTMLInputElement | null>(null);
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const numberRef = React.useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch()
  const {nameerror, emailerror, numbererror} = useSelector((state: RootState ) => state.user.formerror)
  const {nameerrormessage, emailerrormessage, numbererrormessage} = useSelector((state: RootState) => state.user.formeerrormessage)
  const {name, email, number } = useSelector((state: RootState) => state.user.userform)
 
  

 


  function checkNeedForErrorReset (){
    if (nameerror || emailerror || numbererror){
      dispatch(handleFormErrorReset())
    }
  }

  function handleForm (){ 
    dispatch(handleValidation())
  }



  return (
    <section className="">
      <div className="bodyDiv">
        <div className="main-body">
          <h2 className="header">Personal info</h2>
          <p className="headerPara">Please provide your name, email address and phone number.</p>

          <form className="pt-3.5 lg:pt-8">
            <div className="inputDiv">
              <label className="label">Name</label>
              <input type="text" placeholder="e.g. Stephen King"  className={`input ${nameerror ? 'errorinput' : ''}`} ref={nameRef} value={name} onFocus = {checkNeedForErrorReset}  onChange={() => dispatch(setInput({
                type: 'name',
                payload: nameRef
              }))}/>
              <p className={`${ nameerror ? 'errormessage' : 'hidden'}`}>{nameerrormessage}
              </p>
            </div>
            <div className="inputDiv">
              <label className="label">Email Address</label>
              <input type="email"  className={`input ${emailerror ? 'errorinput' : ''}`} placeholder="e.g. stephenKing@lorem.com" ref={emailRef} value={email} onFocus = {checkNeedForErrorReset}  onChange={() => dispatch(setInput({
                type: 'email',
                payload: emailRef
              }))}/>
              <p className={`${ emailerror ? 'errormessage' : 'hidden'}`}>{emailerrormessage}
              </p>
            </div>
            <div className="inputDiv">
              <label className="label">Phone Number</label>
              <input type="tel" className={`input ${numbererror ? 'errorinput' : ''}`}  placeholder="e.g. +1 234 567 890" ref={numberRef} onFocus = {checkNeedForErrorReset} value={number} onChange={() => dispatch(setInput({
                type: 'number',
                payload: numberRef
              }))}/>
              <p className={`${ numbererror ? 'errormessage' : 'hidden'}`}>{numbererrormessage}
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="btnDiv">
        <button className="btn btn-form" onClick={handleForm} >Next Step</button>
      </div>
      
    </section>
  )
}