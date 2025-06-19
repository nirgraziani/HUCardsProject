import { Route, Routes } from "react-router-dom"
import CardsPage from '../pages/CardsPage'
import FavoriteCardPage from '../Pages/FavoriteCardPage'
import MyCardPage from '../Pages/MyCardPage'
import AboutPage from '../Pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import SandboxPage from '../pages/SandboxPage'
import ErrorPage from '../pages/ErrorPage'
import AddCardPage from "../pages/AddCardPage"

function Router() {
  return (
    <Routes>
      <Route path='/' element={<CardsPage />} />
      <Route path='/favorite' element={<FavoriteCardPage />} />
      <Route path='/my-cards' element={<MyCardPage />} />
      <Route path='/add-card' element={<AddCardPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/sandbox' element={<SandboxPage />} />
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  )
}

export default Router