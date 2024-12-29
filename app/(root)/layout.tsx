import React from 'react'
import NavBar from '../../components/Navbar'

const Layout = ({children} : Readonly<{children : React.ReactNode}>) => {
  return (
    <>
       <NavBar />
        {children}
    
    </>
  
  )
}

export default Layout