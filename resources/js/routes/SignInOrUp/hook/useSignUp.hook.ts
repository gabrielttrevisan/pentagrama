import { AxiosResponse } from 'axios'
import React, { useState } from 'react'
import { SigInRequest } from '../../../requests/SigInRequest'
import { SigUpRequest } from '../../../requests/SigUpRequest'
import { Token } from '../../../responses/Token'
import { AuthService } from '../../../services/AuthService'
import { useAuthStore } from '../../../store/useAuthStore'

export enum FormType {
    IN = 'in',
    UP = 'up',
}

export interface UserData {
    name?: string
    email: string
    password: string
    passwordConfirmation?: string
}

export interface FormTypeContoller {
    signingIn: boolean
    signingUp: boolean
    submitMessage: string
    switchMessage: string
    switchAction: React.MouseEventHandler<HTMLButtonElement>
    authServiceCall:
        | ((data: SigInRequest) => Promise<AxiosResponse<Token>>)
        | ((data: SigUpRequest) => Promise<AxiosResponse<Token>>)
}

const getFormTypeController = (
    setter: React.Dispatch<React.SetStateAction<FormType>>,
    type: FormType
): FormTypeContoller =>
    ({
        in: {
            signingIn: true,
            signingUp: false,
            submitMessage: 'Entrar',
            switchMessage: 'Cadastre-se',
            authServiceCall: AuthService.Instance.signIn,
            switchAction: () => setter(FormType.UP),
        },
        up: {
            signingIn: false,
            signingUp: true,
            submitMessage: 'Cadastre-se',
            switchMessage: 'Entrar',
            authServiceCall: AuthService.Instance.signUp,
            switchAction: () => setter(FormType.IN),
        },
    }[type])

export function useFormType() {
    const [loading, setLoading] = useState<boolean>(false)
    const [type, setType] = useState<FormType>(FormType.IN)
    const [name, setName] = useState<string | undefined>(undefined)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirmation, setPasswordConfirmation] = useState<
        string | undefined
    >(undefined)

    const { setToken } = useAuthStore()
    const { authServiceCall, ...settings } = getFormTypeController(
        setType,
        type
    )
    const submitAction = async () => {
        setLoading(true)

        const response = await authServiceCall({
            name,
            email,
            password,
            passwordConfirmation,
        })

        setToken(response.data?.token)
        setLoading(false)
    }

    return [
        { ...settings, loading },
        setName,
        setEmail,
        setPassword,
        setPasswordConfirmation,
        submitAction,
    ] as const
}
