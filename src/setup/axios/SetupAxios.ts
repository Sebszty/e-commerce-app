import {AxiosError, AxiosRequestConfig, AxiosResponse, AxiosStatic} from 'axios'

export const setupAxios = (axios: AxiosStatic) => {
    axios.defaults.headers.common['Accept'] = 'application/json'

    axios.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            return config
        },
        (err: AxiosError) => Promise.reject(err)
    )

    axios.interceptors.response.use(
        (response: AxiosResponse) => response,
        (err: AxiosError) => {
            if (err.response) {
                if (err.response?.status === 401) {
                    console.log('401 ' + err)
                } else if (err.response?.status === 403) {
                    console.log('403 ' + err)
                } else if (err.response?.status === 404) {
                    console.log('404 ' + err)
                } else if (err.response?.status === 500) {
                    console.log('500 ' + err)
                }
            }

            return Promise.reject(err)
        }
    )
}
