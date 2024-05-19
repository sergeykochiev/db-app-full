import InputLabel from "../components/InputLabel"
import Select from "../components/Select"
import TextInput from "../components/TextInput"
import VariantInput from "../components/VariantInput"
import { Class } from "../model/Class"
import { Student } from "../model/Student"
import { StudentSubject } from "../model/StudentSubject"
import { Subject } from "../model/Subject"
import { Teacher } from "../model/Teacher"
import { TeacherClass } from "../model/TeacherClass"
import { TeacherSubject } from "../model/TeacherSubject"

export default function formFactory(table: string): [(e: FormData) => string, ((e?: Teacher) => React.ReactNode) | ((e?: Student) => React.ReactNode) | ((e?: Class) => React.ReactNode) | ((e?: Subject) => React.ReactNode) | ((e?: TeacherSubject) => React.ReactNode) | ((e?: StudentSubject) => React.ReactNode) | ((e?: TeacherClass) => React.ReactNode)] {
    if (table == "teacher") return [
        (e: FormData) => JSON.stringify({
            surname: e.get("surname"),
            name: e.get("name"),
            patronymic: e.get("patronymic"),
            is_class_teacher: e.get("is_class_teacher"),
        }),
        (e?: Teacher) => <>
            {e && <TextInput value={e.id} readOnly/>}
            <TextInput type='text' required placeholder='Имя' name='name' defaultValue={e && e.name}/>
            <TextInput type='text' required placeholder='Фамилия' name='surname' defaultValue={e && e.surname}/>
            <TextInput type='text' required placeholder='Отчество' name='patronymic' defaultValue={e && e.patronymic}/>
            <VariantInput label="Классное руководство" name="is_class_teacher" defaultTrue={e ? e.is_class_teacher : true}/>
        </>
    ]
    if (table == "student") return [
        (e: FormData) => JSON.stringify({
            id: e.get("id"),
            surname: e.get("surname"),
            name: e.get("name"),
            patronymic: e.get("patronymic"),
            class_id: e.get("class_id"),
            birth_date: e.get("birth_date"),
            address: e.get("address"),
            phone_number: e.get("phone_number"),
            grade: e.get("grade"),
            date_of_grade: e.get("date_of_grade"),
        }),
        (e?: Student) => <>
            {e && <TextInput value={e.id} readOnly/>}
            <TextInput type='text' required placeholder='Имя' name='name' defaultValue={e && e.name}/>
            <TextInput type='text' required placeholder='Фамилия' name='surname' defaultValue={e && e.surname}/>
            <TextInput type='text' required placeholder='Отчество' name='patronymic' defaultValue={e && e.patronymic}/>
            <InputLabel label="Дата рождения">
                <TextInput type='date' required placeholder='Дата рождения' name='birth_date' defaultValue={e && e.birth_date}/>
            </InputLabel>
            <TextInput type='text' required placeholder='Адрес' name='address' defaultValue={e && e.address}/>
            <TextInput type='text' required placeholder='Телефон' name='phone_number' defaultValue={e && e.phone_number}/>
            <TextInput type='number' required placeholder='Оценка' name='grade' defaultValue={e && e.grade}/>
            <InputLabel label="Дата оценки">
                <TextInput type='date' required placeholder='date_of_grade' name='date_of_grade' defaultValue={e && e.grade}/>
            </InputLabel>
            <InputLabel label="Класс">
                <Select table='class' name='class_id' required defaultValue={e && e.class_id}/>
            </InputLabel>
        </>
    ]
    if (table == "class") return [
        (e: FormData) => JSON.stringify({
            name: e.get("name")
        }),
        (e?: Class) => <>
            {e && <TextInput value={e.id} readOnly/>}
            <TextInput type='text' required placeholder='Название' name='name' defaultValue={e && e.name}/>
        </>
    ]
    if (table == "subject") return [
        (e: FormData) => JSON.stringify({
            name: e.get("name"),
            grade: e.get("grade"),
            date_of_grade: e.get("date_of_grade")
        }),
        (e?: Subject) => <>
            {e && <TextInput value={e.id} readOnly/>}
            <TextInput type='text' required placeholder='Название' name='name' defaultValue={e && e.name}/>
            <TextInput type='text' required placeholder='Оценка' name='grade' defaultValue={e && e.grade}/>
            <TextInput type='date' required placeholder='Дата оценки' name='date_of_grade' defaultValue={e && e.date_of_grade}/>
        </>
    ]
    if (table == "studentsubject") return [
        (e: FormData) => JSON.stringify({
            student: e.get("student"),
            subject: e.get("subject")
        }),
        (e?: StudentSubject) => <>
            <InputLabel label="Ученик">
                <Select table='student' name='student' required defaultValue={e && e.student}/>
            </InputLabel>
            <InputLabel label="Предмет">
                <Select table='subject' name='subject' required defaultValue={e && e.subject}/>
            </InputLabel>
        </>
    ]
    if (table == "teachersubject") return [
        (e: FormData) => JSON.stringify({
            teacher: e.get("teacher"),
            subject: e.get("subject")
        }),
        (e?: TeacherSubject) => <>
            <InputLabel label="Учитель">
                <Select table='teacher' name='teacher' required defaultValue={e && e.teacher}/>
            </InputLabel>
            <InputLabel label="Предмет">
                <Select table='subject' name='subject' required defaultValue={e && e.subject}/>
            </InputLabel>
        </>
    ]
    if (table == "teacherclass") return [
        (e: FormData) => JSON.stringify({
            teacher: e.get("teacher"),
            class_id: e.get("class_id")
        }),
        (e?: TeacherClass) => <>
            <InputLabel label="Учитель">
                <Select table='teacher' name='teacher' required defaultValue={e && e.teacher}/>
            </InputLabel>
            <InputLabel label="Класс">
                <Select table='class' name='class_id' required defaultValue={e && e.class_id}/>
            </InputLabel>
        </>
    ]
    throw new Error("Form Factory: undexpected table name")
}