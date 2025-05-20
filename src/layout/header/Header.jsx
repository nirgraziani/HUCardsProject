import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLink from './HeaderLink'

function Header() {
  return (
      <AppBar position='sticky' color='primary' elevation={10}>
          <Toolbar>
           <HeaderLink link={"favorite"}/>
           <HeaderLink link={"my-cards"}/>
           <HeaderLink link={"login"}/>
           <HeaderLink link={"register"}/>
          </Toolbar>
    </AppBar>
)
}

export default Header