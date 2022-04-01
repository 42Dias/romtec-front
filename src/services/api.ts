import axios from 'axios'

export let token = localStorage.getItem('token')?.replace(/"/g, '')
export let tenantId = localStorage.getItem('tenantId')?.replace(/"/g, '')
export let roles = localStorage.getItem('roles')?.replace(/"/g, '')
export let id = localStorage.getItem('id')?.replace(/"/g, '')
export let idPessoa = localStorage.getItem('idPessoa')?.replace(/"/g, '')
export let status = localStorage.getItem('status')?.replace(/"/g, '')
export let Email = localStorage.getItem('email')?.replace(/"/g, '')
export let nome = localStorage.getItem('nome')?.replace(/"/g, '')
export let password = localStorage.getItem('password')?.replace(/"/g, '')
//export let ip = 'http://localhost' 
export const ip = 'https://projetos.42dias.com.br' 

export const api = axios.create({
  baseURL: ip + ':8145/api/tenant/' + tenantId + '/',
  timeout: 50000,
  headers: { Authorization: 'Bearer ' + token },
})

