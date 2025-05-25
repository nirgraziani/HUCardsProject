import {Route, Routes} from "react-router-dom"
import CardPage from '../Pages/CardPage'
import FavoriteCardPage from '../Pages/FavoriteCardPage'
import MyCardPage from '../Pages/MyCardPage'
import AboutPage from '../Pages/AboutPage'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import ErrorPage from '../pages/ErrorPage'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<CardPage/>}/>
        <Route path='/favorite' element={<FavoriteCardPage/>}/>
        <Route path='/my-cards' element={<MyCardPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default Router