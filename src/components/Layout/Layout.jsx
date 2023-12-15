import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export const Layout = ({children}) => {
  return (
    <div>
      {/* navbar section */}
      <Navbar/>
        {children}
      {/* Footer section */}
      <Footer/>
    </div>
  )
}
