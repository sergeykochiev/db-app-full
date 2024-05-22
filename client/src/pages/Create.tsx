import { FormEvent, useState } from "react"
import Form from "../components/Form"
import Button from "../components/Button"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import fetchApi from "../helpers/fetchApi"
import getBody from "../helpers/getBody"
import getFields from "../helpers/getFields"
import { AnyTableKey } from "../types"

export default function Create() {
    const navigate = useNavigate()
    const table = useLocation().pathname.split("/")[1] as AnyTableKey
    const create = async (e: FormEvent) => {
        e.preventDefault()
        const fd = new FormData(e.target as HTMLFormElement)
        await fetchApi("POST", table, getBody(fd))
        navigate("..")
    }
    return (
        <Form onSubmit={create}>
            {getFields(table)}
            <Button>Создать</Button>
        </Form>
    )
}
