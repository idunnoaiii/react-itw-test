import { twMerge } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx'

import { YOUTUBE_THUMBNAIL } from '@/constants'

export type ImageSize = 'w500' | 'w780' | 'w1280' | 'original'

export const getFulImageSrc = (path: string, size: ImageSize = 'w500') => {
  if (!path) return ''

  return `https://image.tmdb.org/t/p/${size}/${path}`
}

export const youtubeThumbnail = (key: string) => {
  return YOUTUBE_THUMBNAIL.replace('{key}', key)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
