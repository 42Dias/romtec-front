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
  DrillingMachine,
  Reports,
  Crossings,
  InterferenceMapping,
  DrillingPlanning,
  InterferenceVerification,
  FluidPreparation,
  DitchOpening,
  PilotHoleTargeting,
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
  MACHINE,
  REPORTS,
  CROSSINGS,
  INTERFERENCEMAPPING,
  DRILLINGPLANNING,
  INTERFERENCEVERIFICATION,
  FLUIDPREPARATION,
  DITCHOPENING,
  PILOTHOLETARGETING,
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
        <Route path={MACHINE} element={<DrillingMachine />} />
        <Route path={REPORTS} element={<Reports />} />
        <Route path={CROSSINGS} element={<Crossings />} />
        <Route path={INTERFERENCEMAPPING} element={<InterferenceMapping />} />
        <Route path={DRILLINGPLANNING} element={<DrillingPlanning />} />
        <Route path={INTERFERENCEVERIFICATION} element={<InterferenceVerification />} />
        <Route path={FLUIDPREPARATION} element={<FluidPreparation />} />
        <Route path={DITCHOPENING} element={<DitchOpening />} />
        <Route path={PILOTHOLETARGETING} element={<PilotHoleTargeting />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}
