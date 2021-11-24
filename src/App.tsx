import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from './pages/Login'

import { GlobalStyle } from './ui'
import { LOGIN } from './routes'

export function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<Login />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
