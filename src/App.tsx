import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login, Home, Register, ForgotPassword } from './pages'

import { GlobalStyle } from './ui'
import { LOGIN, HOME, REGISTER, FORGOTPASSWORD } from './routes'

export function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<Login />} />
        <Route path={HOME} element={<Home />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={FORGOTPASSWORD} element={<ForgotPassword />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
