import React, { useContext, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RequireAuth from './pages/RequireAuth'

const App = () => {
  const {pathname} = useLocation()
  const {isAuth} = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(pathname === '/register' || pathname === '/login' && isAuth){
      navigate('/', {replace: true})
    } 
  }, [pathname])

  return (
    <Routes>
      <Route path='/' element={<RequireAuth />} >
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App