import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { App } from './routes/App/App.component'
import { SignInOrUp } from './routes/SignInOrUp/SignInOrUp.component'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SignInOrUp />,
    },
    {
        path: '/app',
        element: <App />,
    },
])
