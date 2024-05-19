import { FormEvent } from "react"
import Form from "../components/Form"
import Button from "../components/Button"
import { useLocation, useNavigate } from "react-router-dom"
import formFactory from "../helpers/formFactory"

export default function Create() {
    const location = useLocation()
    const target = location.pathname.split("/")[1]
    const [returnBodyFromFormData, returnFields] = formFactory(target)
    const navigate = useNavigate()
    const create = async (e: FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        await fetch("/api/" + target + "/", { method: "POST", body: returnBodyFromFormData(formData), headers: {
            "Content-Type": "application/json",
        },})
        navigate("..")
    }
  return (
    <Form onSubmit={create}>
        {returnFields()}
        <Button>Создать</Button>
    </Form>
  )
}
