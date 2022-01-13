import { TextField } from '../../ui/Components/TextField'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import Modal from '../../ui/Components/Modal/Modal'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api'
import { FiPlus } from 'react-icons/fi'
import { toast } from 'react-toastify'

import * as S from './styled'
import DeleteButton from '../../ui/Components/DeleteButton/DeleteButton'
import EditButton from '../../ui/Components/EditButton/EditButton'
import { FaEdit } from 'react-icons/fa'

type FormData = {
  nIdentificacao: string;
  nome: string;
  rg: string;
  cpf: string;
  celular: string;
  cep: string;
  cidade: string;
  funcao: string;
  validadeCertificado: Date;
  numero: string;
  certificate: string;
}

export default function
Labor () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [maoDeObras, setMaoDeObra] = useState<any[]>([])
  const [id, setId] = useState('')
  const [nIdentificacao, setNIdentificacao] = useState('')
  const [nome, setNome] = useState('')
  const [rg, setRg] = useState('')
  const [cpf, setCpf] = useState('')
  const [funcao, setFuncao] = useState('')
  const [validadeCertificado, setValidadeCertificado] = useState('')
  const [certificate, setCertificate] = useState('')
  const [celular, setCelular] = useState('')
  const [numero, setNumero] = useState('')

  function onSubmit(data: FormData) {
    console.log(data)
    Cadastro(data)
    reset()
  }
  async function Cadastro(submit: any) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.post('mao-de-obra', {
      data: submit,
    }).then((response) => {
      console.log(response)
      if (response.statusText === 'OK') {
        toast.success('Mão de obra cadastrado com sucesso!')
        setLoading(false)
        loadDados()
      } else if (response.statusText === 'Forbidden') {
        toast.error('Ops, Não tem permisão!')
        setLoading(false)
      } else {
        toast.error('Ops, Dados Incorretos!')
        setLoading(false)
      }
    }).catch(res => {
      console.log(res)
      toast.error(res.response.data)
      setLoading(false)
    })
  }

  async function loadDados() {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.get('mao-de-obra',
    ).then((response) => {
      console.log(response.data.rows)
      if (response.statusText === 'OK') {
        setMaoDeObra(response.data.rows)
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response.data)
      toast.error(res.response.data)
      setLoading(false)
    })
  }
  // eslint-disable-next-line
  async function deleteDados(id: string) {
    setLoading(true)
    // eslint-disable-next-line
    const responser = api.delete('mao-de-obra/' + id,
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setLoading(false)
      }
    }).catch(res => {
      console.log(res.response)
      toast.error(res.response)
      setLoading(false)
    })
  }
  function update(dados: any) {
    console.log('dados')
    console.log(dados)
    setId(dados.id)
    setNIdentificacao(dados.nIdentificacao)
    setNome(dados.nome)
    setFuncao(dados.funcao)
    setValidadeCertificado(dados.validadeCertificado)
    setCertificate(dados.certificate)
    setCelular(dados.celular)
    setRg(dados.rg)
    setCpf(dados.cpf)
    setNumero(dados.numero)
    console.log(nIdentificacao)
    setIsOpenUpdate(true)
  }
  async function updateDados() {
    setLoading(true)
    console.log('nIdentificacao')
    console.log(nIdentificacao)
    const responser = api.put('mao-de-obra/' + id, {
      data: {
        nIdentificacao: nIdentificacao,
        nome: nome,
        rg: rg,
        cpf: cpf,
        celular: celular,
        funcao: funcao,
        validadeCertificado: validadeCertificado,
        numero: numero,
        certificate: certificate,
      }
    }
    ).then((response) => {
      if (response.statusText === 'OK') {
        loadDados()
        setIsOpenUpdate(false)
        setLoading(false)
      }
    })
  } 
  useEffect(() => {
    setLoading(true)
    loadDados()
  }, [])

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Mão de obra</h2>
        <button onClick={() => setIsOpen(true)}><FiPlus /></button>

        <S.GridConfirmation>
          <span>N° de identificação</span>
          <span>Nome</span>
          {/* <span>CEP</span>
          <span>Cidade</span> */}
          <span>Função</span>
          <span>Celular</span>
          <span>Validade do certificado</span>
        </S.GridConfirmation>

        <ul>
          {maoDeObras.length > 0
            ? maoDeObras.map((maoDeObra) =>
              <li key={maoDeObra.id}>
                <S.GridConfirmation>
                  <span>
                    {maoDeObra.nIdentificacao}
                  </span>
                  <span>
                    {maoDeObra.nome}
                  </span>
                  {/* <span>
                    {maoDeObra.cep}
                  </span>
                  <span>
                    {maoDeObra.cidade}
                  </span> */}
                  <span>
                    {maoDeObra.funcao}
                  </span>
                  <span>
                    {maoDeObra.celular}
                  </span>
                  <span>
                    {maoDeObra.validadeCertificado}
                  </span>
                  <DeleteButton
                    onDelete={() => deleteDados(maoDeObra.id)}
                  />
                  {/* <EditButton
                    onEdit={() => update(maoDeObra)}
                  /> */}
                  <button
                    //onChange={onEdit}
                    onClick={() => update(maoDeObra)}
                    style={{ background: 'none', color: 'yellow' }}
                    title='Editar?'
                  >
                    <FaEdit size={20} />
                  </button>
                </S.GridConfirmation>
              </li>,
            )
            : <p>🤔 Nenhuma mão de obra cadastrada!</p>}
        </ul>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <S.Container>
            <S.Form onSubmit={handleSubmit(onSubmit)}>

              <TextField
                label='N° de identificação'
                type='number'
                id='nIdentificacao'
                errorMessage={errors.nIdentificacao?.message}
                {...register('nIdentificacao', {
                  required: {
                    value: true,
                    message: 'Todos os campos são obrigatórios',
                  },
                })}
              />

              <TextField
                label='Nome'
                id='nome'
                {...register('nome', {
                  required: true,
                })}
              />

              <TextField
                label='RG'
                id='rg'
                type='number'
                {...register('rg', {
                  required: true,
                })}
              />

              <TextField
                label='CPF'
                id='cpf'
                type='number'
                {...register('cpf', {
                  required: true,
                })}
              />

              <TextField
                label='Celular'
                id='celular'
                type='phone'
                {...register('celular', {
                  required: true,
                })}
              />

              {/* <TextField
                label='CEP'
                id='cep'
                type='cep'
                {...register('cep', {
                  required: true,
                })}
              /> */}

              {/* <TextField
                label='Cidade'
                id='cidade'
                {...register('cidade', {
                  required: true,
                })}
              /> */}

              <TextField
                label='Função'
                id='funcao'
                {...register('funcao', {
                  required: true,
                })}
              />

              <TextField
                label='Validade do certificado'
                type='date'
                id='validadeCertificado'
                {...register('validadeCertificado', {
                  required: true,
                })}
              />

              <TextField
                label='Número do certificado'
                type='number'
                id='numero'
                {...register('numero', {
                  required: true,
                })}
              />

              <fieldset>
                <label htmlFor='certificate'>Certificado</label>
                <select id='certificate' {...register('certificate')}>
                  <option value=''>Select...</option>
                  <option value='Navegador'>Navegador</option>
                  <option value='Operador'>Operador</option>
                  <option value='Outro'>Outro</option>
                </select>
              </fieldset>

              <button type='submit'>
                {loading
                  ? <img
                    width='40px'
                    style={{ margin: 'auto' }}
                    height=''
                    src='https://contribua.org/mb-static/images/loading.gif'
                    alt='Loading'
                  />
                  : 'Salvar'}
              </button>
            </S.Form>
          </S.Container>
        </Modal>

        <Modal isOpen={isOpenUpdate} onClose={() => setIsOpenUpdate(false)}>
          <S.Container>
            <S.Div > 

              <TextField
                label='N° de identificação'
                type='number'
                id='nIdentificacao'
                value={nIdentificacao}
                onChange={(text) => setNIdentificacao(text.target.value)}
              />

              <TextField
                label='Nome'
                id='nome'
                value={nome}
                onChange={(text) => setNome(text.target.value)}
              />

              <TextField
                label='RG'
                id='rg'
                type='number'
                value={rg}
                onChange={(text) => setRg(text.target.value)}
              />

              <TextField
                label='CPF'
                id='cpf'
                type='number'
                value={cpf}
                onChange={(text) => setCpf(text.target.value)}
              />

              <TextField
                label='Celular'
                id='celular'
                type='phone'
                value={celular}
                onChange={(text) => setCelular(text.target.value)}
              />

              {/* <TextField
                label='CEP'
                id='cep'
                type='cep'
                {...register('cep', {
                  required: true,
                })}
              /> */}

              {/* <TextField
                label='Cidade'
                id='cidade'
                {...register('cidade', {
                  required: true,
                })}
              /> */}

              <TextField
                label='Função'
                id='funcao'
                value={funcao}
                onChange={(text) => setFuncao(text.target.value)}
              />

              <TextField
                label='Validade do certificado'
                type='date'
                id='validadeCertificado'
                value={validadeCertificado}
                onChange={(text) => setValidadeCertificado(text.target.value)}
              />

              <TextField
                label='Número do certificado'
                type='number'
                value={numero}
                onChange={(text) => setNumero(text.target.value)}
              />

              <fieldset>
                <label htmlFor='certificate'>Certificado</label>
                <select id='certificate' value={certificate} onChange={(text) => setCertificate(text.target.value)}> 
                  <option value=''>Select...</option>
                  <option value='Navegador'>Navegador</option>
                  <option value='Operador'>Operador</option>
                  <option value='Outro'>Outro</option>
                </select>
              </fieldset>

              <button onClick={() => updateDados()}>
                {loading
                  ? <img
                    width='40px'
                    style={{ margin: 'auto' }}
                    height=''
                    src='https://contribua.org/mb-static/images/loading.gif'
                    alt='Loading'
                  />
                  : 'Salvar'}
              </button>
            </S.Div>
          </S.Container>
        </Modal>
      </S.ContainerConfirmation>
    </>
  )
}
