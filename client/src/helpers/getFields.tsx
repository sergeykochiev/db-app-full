import Select from "../components/Select";
import TextInput from "../components/TextInput";
import VariantInput from "../components/VariantInput";
import Category, { CategoryKey } from "../model/Category";
import { AnyModel, AnyTable, AnyTableKey, ModelUnion } from "../types";

export default function getFields(table: AnyTableKey, init?: ModelUnion) {
    const get = (field: keyof ModelUnion): string | undefined => init && init[field] as string
    switch(table) {
        case "client":
            return <>
                <TextInput required name="fio" type="text" placeholder="ФИО" defaultValue={get("fio")}/>
                <TextInput required name="phone_number" type="text" placeholder="Номер" defaultValue={get("phone_number")}/>
                <Select defaultValue={get("category")}>
                    {Object.keys(Category).map(key => <option value={key}>{Category[key as CategoryKey]}</option>)}
                </Select>
                <TextInput required name="email" type="email" placeholder="Эл. почта" defaultValue={get("email")}/>
            </>
        case "service":
            return <>
                <TextInput required name="name" type="text" placeholder="Название" defaultValue={get("name")}/>
                <TextInput required name="price" type="number" placeholder="Номер" defaultValue={get("price")}/>
                <TextInput required name="duration" type="time" placeholder="Эл. почта" defaultValue={get("duration")}/>
            </>
        case "visit":
            return <>
                <TextInput required name="client_id" type="number" placeholder="ID клиента" defaultValue={get("client_id")}/>
                <TextInput required name="service_id" type="number" placeholder="ID сервиса" defaultValue={get("service_id")}/>
                <TextInput required name="date" type="date" placeholder="Дата" defaultValue={get("date")}/>
                <TextInput required name="time" type="time" placeholder="Время" defaultValue={get("time")}/>
                <VariantInput name="servic_fullfilled" label="Услуга оказана?" defaultTrue={init ? init.service_fullfilled as boolean : true}/>
            </>
        default:
            throw new Error("Nonexistent table name")
    }
}