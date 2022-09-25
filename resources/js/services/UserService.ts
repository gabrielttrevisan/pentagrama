import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { User } from '../responses/User'
import { Service } from './Service'

export class UserService extends Service {
    private token: string

    constructor(token: string) {
        super({
            baseURL: 'http://localhost/api',
            timeout: 100000,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        this.token = token

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
