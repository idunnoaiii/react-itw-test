export const joinClassName = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const getFulImageSrc = (path: string) => {
  if (!path) return ''

  return `https://image.tmdb.org/t/p/original/${path}`
}

export const youtubeThumbnail = (key: string) => {
  return `https://img.youtube.com/vi/${key}/mqdefault.jpg`
}
