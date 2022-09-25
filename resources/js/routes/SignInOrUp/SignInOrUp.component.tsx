import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import React, { useState } from 'react'
import { FunctionComponent } from 'react'
import { LabelledInput } from '../../common/components/LabelledInput/LabelledInput.component'
import { Card } from './SignInOrUp.styles'
import Button from '@mui/material/Button'
import { useFormType } from './hook/useSignUp.hook'
import { CircularProgress } from '@mui/material'
import { useAuthStore } from '../../store/useAuthStore'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const SignInOrUp: FunctionComponent = () => {
    const [
        { loading, signingUp, submitMessage, switchMessage, switchAction },
        setName,
        setEmail,
        setPassword,
        setPasswordConfirmation,
        submitAction,
    ] = useFormType()

    const { getToken } = useAuthStore()
    const navigate = useNavigate()

    useEffect(() => {
        if (getToken() && !loading) {
            navigate('/app', {
                replace: true,
            })
        }
    }, [getToken, loading])

    return (
        <FormControl sx={{ mx: 'auto' }}>
            <Card
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column"
                p="1rem"
                mt="4rem"
                rowGap="1.5rem"
                mx="auto"
            >
                {signingUp && (
                    <LabelledInput
                        label="Nome"
                        name="name"
                        onValueChange={(value) => setName(value)}
                        placeholder="John Doe"
                    />
                )}

                <LabelledInput
                    label="E-mail"
                    name="email"
                    type="email"
                    onValueChange={(value) => setEmail(value)}
                    placeholder="john.doe@domain.com"
                />

                <LabelledInput
                    label="Senha"
                    name="password"
                    type="password"
                    onValueChange={(value) => setPassword(value)}
                />

                {signingUp && (
                    <LabelledInput
                        label="Confirme sua senha"
                        name="password_confirmation"
                        onValueChange={(value) =>
                            setPasswordConfirmation(value)
                        }
                    />
                )}

                <Box
                    display="flex"
                    columnGap=".5rem"
                    justifyContent="flex-end"
                    width="100%"
                >
                    <Button variant="text" size="small" onClick={switchAction}>
                        {switchMessage}
                    </Button>

                    <Button
                        variant="contained"
                        size="medium"
                        onClick={submitAction}
                        endIcon={
                            loading ? <CircularProgress size="small" /> : <></>
                        }
                    >
                        {submitMessage}
                    </Button>
                </Box>
            </Card>
        </FormControl>
    )
}
