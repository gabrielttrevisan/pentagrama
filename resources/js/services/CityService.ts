import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { CreateCityRequest } from '../requests/CreateCityRequest'
import { PaginationRequest } from '../requests/PaginationRequest'
import { City } from '../responses/City'
import { CityPagination } from '../responses/Pagination'

export class CityService {
    private api: AxiosInstance
    private token: string

    constructor(token: string) {
        this.token = token
        this.api = axios.create({
            baseURL: 'http://localhost/api/city',
            timeout: 100000,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        this.getPagination = this.getPagination.bind(this)
        this.getPage = this.getPage.bind(this)
        this.create = this.create.bind(this)
    }

    getPagination({
        page,
        pageSize,
    }: Required<PaginationRequest>): Promise<AxiosResponse<CityPagination>> {
        return this.api.get('/pagination', {
            params: {
                page: page.toString(),
                page_size: pageSize.toString(),
            },
        })
    }

    getPage({
        page,
        pageSize,
    }: PaginationRequest): Promise<AxiosResponse<{ cities: City[] }>> {
        return this.api.get('/page', {
            params: {
                page: page?.toString(),
                page_size: pageSize?.toString(),
            },
        })
    }

    create(request: CreateCityRequest): Promise<any> {
        return this.api.post('/', request)
    }

    createNeighborhood(id: number, name: string): Promise<any> {
        return this.api.post(`/${id}/neighborhood`, { name })
    }
}
