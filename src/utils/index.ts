export const joinClassName = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ')
}
