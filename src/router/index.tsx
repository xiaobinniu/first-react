import path from 'node:path/win32'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
const Home = lazy(() => import('@/views/Home'))
const Page1 = lazy(() => import('@/views/pages/page1'))
const Page2 = lazy(() => import('@/views/pages/page2'))
const Page2_1 = lazy(() => import('@/views/pages/page2/page2_1'))
const Page2_2 = lazy(() => import('@/views/pages/page2/page2_2'))
const Page3 = lazy(() => import('@/views/pages/page3'))
const Page3_1 = lazy(() => import('@/views/pages/page3/page3_1'))
const Login = lazy(() => import('@/views/Login'))

const routes = [
    {
        path: '/',
        element: <Navigate to='/page1' />
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/page1',
                element: <Page1 />
            },
            {
                path: '/page2',
                element: <Page2 />,
                children: [
                    {
                        path: '2-1',
                        element: <Page2_1 />
                    },
                    {
                        path: '2-2',
                        element: <Page2_2 />
                    },
                ]
            },
            {
                path: '/page3',
                element: <Page3 />,
                children: [
                    {
                        path: '3-1',
                        element: <Page3_1 />
                    }
                ]
            }

        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <Navigate to='/page1' />
    }
]

export default routes