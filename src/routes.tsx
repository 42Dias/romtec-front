import { Switch, Route, HashRouter } from 'react-router-dom'

import Companies from './pages/Companies'
import ConfigurationCrossing from './pages/ConfigurationCrossing'
import ConfigurationSteps from './pages/ConfigurationSteps'
import Crossings from './pages/Crossings'
import Customers from './pages/Customers'
import DitchClosing from './pages/DitchClosing'
import DitchOpening from './pages/DitchOpening'
import DrillingFluid from './pages/DrillingFluid'
import DrillingMachine from './pages/DrillingMachine'
import DrillingPlanning from './pages/DrillingPlanning'
import ExecutionOfTheCrossing from './pages/ExecutionOfTheCrossing'
import FluidPreparation from './pages/FluidPreparation'
import ForgotPassword from './pages/ForgotPassword'

import Home from './pages/Home'
import InterferenceMapping from './pages/InterferenceMapping'
import Interferences from './pages/Interferences'
import InterferenceVerification from './pages/InterferenceVerification'
import Labor from './pages/Labor'
import Login from './pages/Login'
import Payments from './pages/Payments'
import Phases from './pages/Phases'
import PilotHoleTargeting from './pages/PilotHoleTargeting'
import Plans from './pages/Plans'
import ProbeHolder from './pages/ProbeHolder'
import Reamer from './pages/Reamer'
import Register from './pages/Register'
import Reports from './pages/Reports'
import Rods from './pages/Rods'
import SoilTypes from './pages/Soiltypes'
import Terms from './pages/Terms'
import Tools from './pages/Tools'
import Topography from './pages/Topography'
import UpdatePassword from './pages/UpdatePassword'
import Users from './pages/Users'

const Routes = (): JSX.Element => {
  return (
    <HashRouter>
      <HashRouter basename=''>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/cadastro' exact component={Register} />
          <Route path='/home' exact component={Home} />
          <Route path='/recuperar-senha' exact component={ForgotPassword} />
          <Route path='/termos' exact component={Terms} />
          <Route path='/mao-de-obra' exact component={Labor} />
          <Route path='/maquina-perfuratriz' exact component={DrillingMachine} />
          <Route path='/tipos-de-solo' exact component={SoilTypes} />
          <Route path='/hastes' exact component={Rods} />
          <Route path='/ferramentas' exact component={Tools} />
          <Route path='/fluido-de-perfuracao' exact component={DrillingFluid} />
          <Route path='/companhias' exact component={Companies} />
          <Route path='/topografia' exact component={Topography} />
          <Route path='/configuracao-da-travessia' exact component={ConfigurationCrossing} />
          <Route path='/clientes' exact component={Customers} />
          <Route path='/pagamentos' exact component={Payments} />
          <Route path='/planos' exact component={Plans} /> 
          <Route path='/relatorios' exact component={Reports} />
          <Route path='/perfuracoes' exact component={Crossings} />
          <Route path='/mapeamento-interferencias' exact component={InterferenceMapping} />
          <Route path='/planejamento-perfuracoes' exact component={DrillingPlanning} />
          <Route path='/verificacao-interferencias' exact component={InterferenceVerification} />
          <Route path='/preparacao-fluido' exact component={FluidPreparation} />
          <Route path='/abertura-da-vala' exact component={DitchOpening} />
          <Route path='/direcionamento-furo-piloto' exact component={PilotHoleTargeting} />
          <Route path='/fechamento-da-vala' exact component={DitchClosing} />
          <Route path='/interferencias' exact component={Interferences} />
          <Route path='/alargador' exact component={Reamer} />
          <Route path='/porta-sonda' exact component={ProbeHolder} />
          <Route path='/usuarios' exact component={Users} />
          <Route path='/etapas/:id' exact component={Phases} />
          <Route path='/atualizar-senha/:token' exact component={UpdatePassword} />
          <Route path='/etapas-da-configuracao/:id' exact component={ConfigurationSteps} />
          <Route path='/execucao-da-travessia' exact component={ExecutionOfTheCrossing} />
        </Switch>
      </HashRouter>
    </HashRouter>
  )
}

export default Routes
