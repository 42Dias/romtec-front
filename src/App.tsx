import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  Login,
  Home,
  Register,
  ForgotPassword,
  Terms,
  Error,
  Labor,
  Rods,
  SoilTypes,
  Topography,
  ConfigurationCrossing,
  Payments,
  Plans,
  Customers,
  DrillingFluid,
  Companies,
  Tools,
} from './pages'

import { GlobalStyle } from './ui'
import {
  LOGIN,
  HOME,
  REGISTER,
  FORGOTPASSWORD,
  TERMS,
  LABOR,
  RODS,
  SOILTYPES,
  TOPOGRAPHY,
  CONFIGURATIONOFTHECROSSING,
  PAYMENTS,
  PLANS,
  CUSTOMERS,
  DRILLINGFLUID,
  COMPANIES,
  TOOLS,
} from './routes'

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
        <Route path={SOILTYPES} element={<SoilTypes />} />
        <Route path={TOPOGRAPHY} element={<Topography />} />
        <Route path={CONFIGURATIONOFTHECROSSING} element={<ConfigurationCrossing />} />
        <Route path={PAYMENTS} element={<Payments />} />
        <Route path={PLANS} element={<Plans />} />
        <Route path={CUSTOMERS} element={<Customers />} />
        <Route path={DRILLINGFLUID} element={<DrillingFluid />} />
        <Route path={COMPANIES} element={<Companies />} />
        <Route path={TOOLS} element={<Tools />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
