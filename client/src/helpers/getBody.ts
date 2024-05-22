import { AnyModel, ModelUnion } from "../types"

export const possibleFields: (keyof ModelUnion)[] = ["id", "fio", "phone_number", "category", "email", "name", "price", "duration", "client_id", "service_id", "date", "time", "service_fullfilled"]

export default function getBody(obj: FormData): AnyModel | {} {
    const body: AnyModel = {}
    possibleFields.forEach(f => {
        const e = obj.get(f) as Exclude<FormDataEntryValue, File>
        if (!e) return
        body[f] = e
    })
    return body
}