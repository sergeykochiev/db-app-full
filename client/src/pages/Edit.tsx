import { FormEvent } from 'react'
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import VariantInput from '../components/VariantInput'
import formFactory from '../helpers/formFactory'
import Form from '../components/Form'
import { Class } from '../model/Class'
import { Subject } from '../model/Subject'
import { Student } from '../model/Student'
import { Teacher } from '../model/Teacher'
import { TeacherClass } from '../model/TeacherClass'
import { TeacherSubject } from '../model/TeacherSubject'
import { StudentSubject } from '../model/StudentSubject'

export default function Edit() {
    const { id } = useParams()
    return <InnerEdit key={id}/>
}

function InnerEdit<T extends (Teacher & Student & Subject & Class & TeacherClass & TeacherSubject & StudentSubject)>() {
    const data: T = useLoaderData() as T
    const location = useLocation()
    const [returnBodyFromFormData, returnFields] = formFactory(location.pathname.split("/")[1])
    const navigate = useNavigate()
    const updateData = async (e: FormEvent) => {
        const formData = new FormData(e.target as HTMLFormElement)
        await fetch("/api/" + location.pathname + "/", { method: "PATCH", body: returnBodyFromFormData(formData), headers: {
            "Content-Type": "application/json",
        }})
        navigate("..")
    }
    return (
        <Form onSubmit={updateData}>
            {returnFields(data)}
            <Button>Изменить</Button>
        </Form>
    )
}
