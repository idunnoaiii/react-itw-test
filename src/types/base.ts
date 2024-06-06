export type BasePagedResponse<T> = {
    page: number,
    results: T[],
    total_pages: number,
    total_results: number
}


export type Optional<T> = T | null 
