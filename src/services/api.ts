import axios from 'axios'

export const token = localStorage.getItem('token')?.replace(/"/g, '')
export const tenantId = localStorage.getItem('tenantId')?.replace(/"/g, '')
export const roles = localStorage.getItem('roles')?.replace(/"/g, '')
export const id = localStorage.getItem('id')?.replace(/"/g, '')
export const idPessoa = localStorage.getItem('idPessoa')?.replace(/"/g, '')
export const status = localStorage.getItem('status')?.replace(/"/g, '')
export const Email = localStorage.getItem('email')?.replace(/"/g, '')
export const nome = localStorage.getItem('nome')?.replace(/"/g, '')
export const password = localStorage.getItem('password')?.replace(/"/g, '')

export let ip = 'http://localhost' 
//export const ip = 'https://projetos.42dias.com.br'  
export const port = '8145' 

//export const ip = 'http://7dd208931cad.sn.mynetname.net'
//export const port = '42145'

export const getToken = () => {
  let _token = localStorage.getItem('token')
  if (!_token) return "";
  return _token.replace(/"/g, '') || ''
}
export const getTenantId = () => {
  let _tenantId = localStorage.getItem('tenantId')
  if (!_tenantId) return "";
  return _tenantId.replace(/"/g, '') || ''
}
export const api = axios.create({
  baseURL: `${ip}:${port}/api/tenant/${tenantId}/`,
  timeout: 900000,
  headers: { Authorization: 'Bearer ' + getToken() },
})

