import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Table from './pages/Table';
import Edit from './pages/Edit';
import Create from './pages/Create';
import fetchApi from './helpers/fetchApi';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: ":tableName",
                loader: async ({ params, request }) => {
                    const data = await (await fetchApi("GET", params.tableName as string)).json()
                    return data.results
                },
                element: <Table/>,
                children: [
                    {
                        path: ":id",
                        loader: async ({ params, request }) => {
                            const data = await (await fetchApi("GET", params.tableName + "/" + params.id)).json()
                            return data
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
