import InputMask from 'react-input-mask'

const InputCpf = () => (
  <InputMask mask='999.999.999-99' />
)

const InputCep = () => (
  <InputMask mask='99999-999' />
)

const InputRg = () => (
  <InputMask mask='99.999.999-9' />
)

const InputCnpj = () => (
  <InputMask mask='99.999.999/9999-99' />
)

const InputPhone = () => (
  <InputMask mask='(99) 99999-9999)' />
)

export { InputCpf, InputCep, InputRg, InputCnpj, InputPhone }
