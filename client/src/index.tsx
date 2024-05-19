import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import List from './pages/List';
import Entity from './pages/Edit';
import Create from './pages/Create';
import Edit from './pages/Edit';

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
                element: <List/>,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
