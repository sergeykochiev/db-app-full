import { Class } from "../model/Class";
import { Student } from "../model/Student";
import { StudentSubject } from "../model/StudentSubject";
import { Subject } from "../model/Subject";
import { Teacher } from "../model/Teacher";
import { TeacherClass } from "../model/TeacherClass";
import { TeacherSubject } from "../model/TeacherSubject";
import checkIfInstanceOf from "./checkIfInstanceOf";

export default function entitySlugFactory<T>(entity: T) {
    if (checkIfInstanceOf<Teacher>(entity, ["is_class_teacher"])) return entity.name + " " + entity.surname + " " + entity.patronymic;
    if (checkIfInstanceOf<Student>(entity, ["phone_number"])) return entity.name + " " + entity.surname + " " + entity.patronymic;
    if (checkIfInstanceOf<Subject>(entity, ["date_of_grade"])) return entity.name;
    if (checkIfInstanceOf<TeacherClass>(entity, ["teacher_name", "class_name"])) return entity.teacher_name + " " + entity.teacher_surname + " " + entity.teacher_patronymic + " - " + entity.class_name;
    if (checkIfInstanceOf<StudentSubject>(entity, ["student_name", "subject_name"])) return entity.student_name + " " + entity.student_surname + " " + entity.student_patronymic + " - " + entity.subject_name;
    if (checkIfInstanceOf<TeacherSubject>(entity, ["teacher_name", "subject_name"])) return entity.teacher_name + " " + entity.teacher_surname + " " + entity.teacher_patronymic + " - " + entity.subject_name;
    if (checkIfInstanceOf<Class>(entity, ["name"])) return entity.name;
    throw new Error("Form Factory: undexpected table name")
}