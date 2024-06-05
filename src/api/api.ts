import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const axiosParams = {
  baseURL: import.meta.env.VITE_API_URL
}

const axiosInstance = axios.create(axiosParams)

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) => axios.get<T>(url, config),
    delete: <T>(url: string, config?: AxiosRequestConfig) => axios.delete<T>(url, config),
    post: <T>(url: string, data: unknown, config: AxiosRequestConfig = {}) => axios.post<T>(url, data, config),
    put: <T>(url: string, data: unknown, config: AxiosRequestConfig = {}) => axios.put<T>(url, data, config),
    patch: <T>(url: string, data: unknown, config: AxiosRequestConfig = {}) => axios.patch<T>(url, data, config)
  }
}

axiosInstance.interceptors.request.use((config) => {
  //   config.headers['Content-Type'] = 'application/json'
  config.url = config.url?.concat('&api_key=92b418e837b833be308bbfb1fb2aca1e')
  return config
})

export default api(axiosInstance)
