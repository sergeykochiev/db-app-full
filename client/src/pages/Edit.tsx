import { Dispatch, FormEvent, SetStateAction } from "react"
import Form from "../components/Form"
import Button from "../components/Button"
import { useLoaderData, useLocation, useNavigate, useOutletContext } from "react-router-dom"
import fetchApi from "../helpers/fetchApi"
import getBody from "../helpers/getBody"
import getFields from "../helpers/getFields"
import { AnyTableKey, ModelUnion } from "../types"

export default function Edit() {
    const data: ModelUnion = useLoaderData() as ModelUnion
    return <InnerEdit key={data.id}/>
}

function InnerEdit() {
    const data: ModelUnion = useLoaderData() as ModelUnion
    const [setAlert, setError] = useOutletContext() as Dispatch<SetStateAction<string>>[]
    const navigate = useNavigate()
    const table = useLocation().pathname.split("/")[1] as AnyTableKey
    const edit = async (e: FormEvent) => {
        e.preventDefault()
        const fd = new FormData(e.target as HTMLFormElement)
        const res = await fetchApi("UPDATE", table + "/" + data.id, getBody(fd))
        if (!res.ok) {
            setError("Неверные данные")
            setTimeout(() => setError(""), 3000)
            return
        }
        setAlert("Изменить")
        setTimeout(() => setAlert(""), 3000)
    }
    const remove = async () => {
        await fetchApi("DELETE", table + "/" + data.id)
        navigate("/" + table + "/create")
        setAlert("Удалено")
        setTimeout(() => setAlert(""), 3000)
    } 
    return ( <>
        <Form onSubmit={edit}>
            {getFields(table, data)}
            <Button>Изменить</Button>
        </Form>
        <Button delete onClick={() => remove()}>Удалить</Button>
    </> )
}
