import React from 'react'
import { Input, InputProps } from 'antd'
import { masker, unMask } from './Masker'

type Props = InputProps & {
  mask: string[];
};

export default function MaskedInput ({
  mask,
  onChange,
  value,
  ...props
}: Props) {
  function handleOnChange (event: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      const inputValue = event.target.value
      const maskLength = Math.max(...mask.map((pattern) => pattern.length))

      if (inputValue.length > maskLength) return

      onChange({
        ...event,
        target: { ...event.target, value: unMask(event.target.value) },
      })
    }
  }

  return (
    <Input
      {...props}
      onChange={() => handleOnChange}
      value={value ? masker(value as string, mask) : undefined}
    />
  )
}
