import { Dispatch, FormEvent, SetStateAction } from "react"
import Form from "../components/Form"
import Button from "../components/Button"
import { useLocation, useOutletContext } from "react-router-dom"
import fetchApi from "../helpers/fetchApi"
import getBody from "../helpers/getBody"
import getFields from "../helpers/getFields"
import { AnyTableKey } from "../types"

export default function Create() {
    const [setAlert, setError] = useOutletContext() as Dispatch<SetStateAction<string>>[]
    const table = useLocation().pathname.split("/")[1] as AnyTableKey
    const create = async (e: FormEvent) => {
        e.preventDefault()
        const fd = new FormData(e.target as HTMLFormElement)
        const res = await fetchApi("POST", table, getBody(fd))
        if (!res.ok) {
            setError("Неверные данные")
            setTimeout(() => setError(""), 3000)
            return
        }
        setAlert("Создано")
        setTimeout(() => setAlert(""), 3000)
    }
    return (
        <Form onSubmit={create}>
            {getFields(table)}
            <Button>Создать</Button>
        </Form>
    )
}
