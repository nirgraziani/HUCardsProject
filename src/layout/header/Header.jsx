import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLink from './HeaderLink'
import ROUTES from '../../routes/routesDict'

function Header() {
  return (
      <AppBar position='sticky' color='primary' elevation={10}>
          <Toolbar>
           <HeaderLink link={ROUTES.favorite} Label={"Favorite"}/>
           <HeaderLink link={ROUTES.about} Label={"About"}/>
           <HeaderLink link={ROUTES.login} Label={"Login"}/>
           <HeaderLink link={ROUTES.register} Label={"Register"}/>
          </Toolbar>
    </AppBar>
)
}

export default Header