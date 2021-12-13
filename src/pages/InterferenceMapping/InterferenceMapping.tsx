import * as S from './InterferenceMapping.styled'
import Sidebar from '../../ui/Components/Sidebar/Sidebar'
import Navbar from '../../ui/Components/Navbar/Navbar'
import { useForm } from 'react-hook-form'

type FormData = {
  responsible: string;
  equipments: string;
  documents: string;
  networkType: string;
  owningCompany: string;
  ConfirmationInterferenceProbe: string;
  survey: string;
  creatingHolePlan: string;
  whenHappens: Date;
}

export function InterferenceMapping () {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  function onSubmit ({
    responsible,
    equipments,
    documents,
    networkType,
    owningCompany,
    ConfirmationInterferenceProbe,
    survey,
    creatingHolePlan,
    whenHappens,
  }: FormData) {
    const submit = {
      responsible,
      equipments,
      documents,
      networkType,
      owningCompany,
      ConfirmationInterferenceProbe,
      survey,
      creatingHolePlan,
      whenHappens,
    }
    reset()

    console.log(submit)
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <S.ContainerConfirmation>
        <h2>Levantamento e Mapeamento de interferências</h2>
        <S.Container>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.ContentForm>
              <fieldset>
                <label htmlFor='responsible'>Responsável</label>
                <input
                  id='responsible' placeholder='Nome do responsável'
                  {...register('responsible', {
                    required: {
                      value: true,
                      message: 'Todos os campos são obrigatórios',
                    },
                  })}
                />
                <span>{errors.responsible?.message}</span>
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='equipments'>Equipamentos</label>
                <input
                  id='equipments' placeholder='Equipamentos'
                  {...register('equipments', {
                    required: {
                      value: true,
                      message: 'Equipamento é obrigatório',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='documents'>Documentos</label>
                <input
                  id='documents' placeholder='Documentos da interferência'
                  {...register('documents', {
                    required: {
                      value: true,
                      message: 'Documentos são obrigatórios',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='networkType'>Tipo de rede</label>
                <input
                  id='networkType' placeholder='Tipo de rede'
                  {...register('networkType', {
                    required: {
                      value: true,
                      message: 'Tipo de rede é obrigatória',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='owningCompany'>Empresa proprietária</label>
                <input
                  id='owningCompany' placeholder='Empresa proprietária'
                  {...register('owningCompany', {
                    required: {
                      value: true,
                      message: 'Empresa proprietária é obrigatória',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='ConfirmationInterferenceProbe'>Confirmação da sondagem da interferência</label>
                <input
                  id='ConfirmationInterferenceProbe' placeholder='sondagem da interferência'
                  {...register('ConfirmationInterferenceProbe', {
                    required: {
                      value: true,
                      message: 'Sondagem da interferência é obrigatória',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='survey'>Sondagem</label>
                <input
                  id='survey' placeholder='Sondagem'
                  {...register('survey', {
                    required: {
                      value: true,
                      message: 'Sondagem é obrigatória',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='creatingHolePlan'>Criação do plano de furo</label>
                <input
                  id='creatingHolePlan' placeholder='plano de furo'
                  {...register('creatingHolePlan', {
                    required: {
                      value: true,
                      message: 'plano de furo é obrigatório',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <S.ContentForm>
              <fieldset>
                <label htmlFor='whenHappens'>Quando acontece</label>
                <input
                  id='whenHappens' placeholder='data' type='date'
                  {...register('whenHappens', {
                    required: {
                      value: true,
                      message: 'data é obrigatória',
                    },
                  })}
                />
              </fieldset>
            </S.ContentForm>

            <button type='submit'>Salvar</button>
          </S.Form>
        </S.Container>
      </S.ContainerConfirmation>
    </>
  )
}
