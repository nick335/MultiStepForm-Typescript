import React from 'react'
import { Navigate } from 'react-router-dom'
// type ReactText = string | number;
// type ReactChild = React.ReactNode | ReactText;

// interface ReactNodeArray extends Array<ReactNode> {}
// type ReactFragment = {} | ReactNodeArray;
// type ReactNode = ReactChild | ReactFragment  | boolean | null | undefined;

interface accessProps {
  access: boolean
  children: JSX.Element[] | JSX.Element
}

export default function PrivateRoute({access, children}: accessProps) {
   return access ? <>{children}</> : <Navigate to='/' />  
}
