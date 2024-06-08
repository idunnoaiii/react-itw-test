export type BaseListResponse<T> = {
  results: T[]
}

export type BasePagedResponse<T> = BaseListResponse<T> & {
  page: number
  total_pages: number
  total_results: number
}
