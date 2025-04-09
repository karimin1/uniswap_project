
import React from 'react'
import '../styles/globals.css'
import {NavBar} from '../Components/ComponentIndex'
import { SwapTokenContextProvider } from '../Context/SwapContext'
 
const RootLayout=({children})=> {
  return (
    <html lang="en">
      <body>
      <SwapTokenContextProvider>
      <NavBar/>
      <main>{children}</main>
    
      </SwapTokenContextProvider>
      </body>
    </html>
  )
}
export default RootLayout;