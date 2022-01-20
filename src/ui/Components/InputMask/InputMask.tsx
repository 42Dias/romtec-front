import { InputHTMLAttributes, ChangeEvent, useCallback } from 'react'
import InputMask from 'react-input-mask'
import { unMask } from './Masker'

import * as S from './InputMask.styled'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: unknown
  mask: string
  onChangeUnMask: (value: string) => void
}

export default function MaskedInput ({
  mask,
  onChange,
  onChangeUnMask,
  ...props
}: Props) {
  const handleOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChangeUnMask(unMask(event.target.value))

      onChange && onChange(event)
    },
    [onChangeUnMask, onChange],
  )

  return (
    <S.Container>
      <InputMask
        mask={mask}
        onChange={handleOnChange}
        style={{ color: 'white' }}
        {...props}
      />
    </S.Container>
  )
}
