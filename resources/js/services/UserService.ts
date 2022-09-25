import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { Token } from '../responses/Token'
import { User } from '../responses/User'

export class UserService {
    private api: AxiosInstance
    private token: string

    constructor(token: string) {
        this.token = token
        this.api = axios.create({
            baseURL: 'http://localhost/api',
            timeout: 100000,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        this.getUserInfo = this.getUserInfo.bind(this)
        this.signOut = this.signOut.bind(this)
    }

    getUserInfo(): Promise<AxiosResponse<User>> {
        return this.api.get('/user/info')
    }

    signOut(): Promise<void> {
        return this.api.post('/auth/sign-out')
    }
}
