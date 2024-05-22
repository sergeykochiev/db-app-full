import { FormEvent, useState } from "react"
import Form from "../components/Form"
import Button from "../components/Button"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import fetchApi from "../helpers/fetchApi"
import getBody from "../helpers/getBody"
import getFields from "../helpers/getFields"
import { AnyTableKey, ModelUnion } from "../types"

export default function Edit() {
    const data: ModelUnion = useLoaderData() as ModelUnion
    const navigate = useNavigate()
    const table = useLocation().pathname.split("/")[1] as AnyTableKey
    const edit = async (e: FormEvent) => {
        e.preventDefault()
        const fd = new FormData(e.target as HTMLFormElement)
        await fetchApi("UPDATE", table + "/" + data.id, getBody(fd))
        navigate("..")
    }
    return (
        <Form onSubmit={edit}>
            {getFields(table)}
            <Button>Создать</Button>
        </Form>
    )
}
