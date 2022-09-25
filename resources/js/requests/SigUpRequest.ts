import { SigInRequest } from './SigInRequest'

export interface SigUpRequest extends SigInRequest {
    name?: string
    passwordConfirmation?: string
}
