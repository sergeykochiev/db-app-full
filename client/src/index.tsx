import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Table from './pages/Table';
import Edit from './pages/Edit';
import Create from './pages/Create';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: ":tableName",
                loader: async ({ params, request }) => {
                    const data = await fetch("/api/" + params.tableName + "/")
                    return (await data.json()).results
                },
                element: <Table/>,
                children: [
                    {
                        path: ":id",
                        loader: async ({ params, request }) => {
                            const data = await fetch("/api/" + params.tableName + "/" + params.id + "/")
                            return await data.json()
                        },
                        element: <Edit/>
                    },
                    {
                        path: "create",
                        element: <Create/>
                    },
                ]
            },
        ]
    },
])
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
