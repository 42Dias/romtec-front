import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login, Home, Register, ForgotPassword, Terms, Error, Labor, Rods } from './pages'

import { GlobalStyle } from './ui'
import { LOGIN, HOME, REGISTER, FORGOTPASSWORD, TERMS, LABOR, RODS } from './routes'

export function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<Login />} />
        <Route path={HOME} element={<Home />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={FORGOTPASSWORD} element={<ForgotPassword />} />
        <Route path={TERMS} element={<Terms />} />
        <Route path={LABOR} element={<Labor />} />
        <Route path={RODS} element={<Rods />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
