import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login, Home, Register } from './pages'

import { GlobalStyle } from './ui'
import { LOGIN, HOME, REGISTER } from './routes'

export function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<Login />} />
        <Route path={HOME} element={<Home />} />
        <Route path={REGISTER} element={<Register />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
