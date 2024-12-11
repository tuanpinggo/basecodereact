import React from 'react'
import { PATHS } from '@/constants/common'
import DefaultLayout from '@/layouts/defaultLayout'
import HelloWorldPage from '@/pages/helloWorld'
import { createBrowserRouter, Navigate, redirect } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            { index: true, path: PATHS.HELLOWORLD, element: <HelloWorldPage /> },
        ]
    }
])

export default router