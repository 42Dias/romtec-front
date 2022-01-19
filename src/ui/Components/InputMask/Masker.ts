export function unMask (value: string): string {
  return value.replace(/\D/g, '')
}
