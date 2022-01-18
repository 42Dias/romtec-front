import VMasker from 'vanilla-masker'

export function masker (
  value: string | null,
  patterns: string | string[],
) : string {
  if (!value) return ''

  if (typeof patterns === 'string') {
    return VMasker.toPattern(value, patterns)
  }

  return VMasker.toPattern(
    value,
    patterns.reduce(
      (memo: string, pattern: string) =>
        value.length <= unMask(memo).length ? memo : pattern,
      patterns[0],
    ),
  )
}

export function unMask (value: string): string {
  return value.replace(/\w/g, '')
}
