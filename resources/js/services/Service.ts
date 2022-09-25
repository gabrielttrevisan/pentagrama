import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { redirect } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export abstract class Service {
    protected api: AxiosInstance

    public constructor(config?: AxiosRequestConfig) {
        this.api = axios.create(config)

        this.api.interceptors.response.use(
            (response) => response,
            (response) => {
                if (response.status > 399 && response.status < 500) {
                    useAuthStore().clearToken()
                    redirect('/')
                }
            }
        )
    }
}
