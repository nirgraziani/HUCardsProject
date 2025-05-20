import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Main from './main/Main'

function Layout({children}) {
  return (
      <div>
          <Header/>
            <Main>
              {children}
            </Main>
          <Footer/>
      </div>
  )
}

export default Layout