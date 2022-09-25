import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { SigInRequest } from '../requests/SigInRequest'
import { SigUpRequest } from '../requests/SigUpRequest'
import { Token } from '../responses/Token'

export class AuthService {
    private static __instace__ = new AuthService()

    public static get Instance(): AuthService {
        return AuthService.__instace__
    }

    private api: AxiosInstance

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost/api',
            timeout: 100000,
        })

        this.signIn = this.signIn.bind(this)
        this.signUp = this.signUp.bind(this)
    }

    signIn(data: SigInRequest): Promise<AxiosResponse<Token>> {
        return this.api.post('/auth/sign-in', data)
    }

    signUp(data: SigUpRequest): Promise<AxiosResponse<Token>> {
        return this.api.post('/user/sign-up', {
            ...data,
            password_confirmation: data.passwordConfirmation,
        })
    }
}
