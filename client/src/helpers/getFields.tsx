import Select, { ForeignSelect } from "../components/Select";
import TextInput from "../components/TextInput";
import VariantInput from "../components/VariantInput";
import Category, { CategoryKey } from "../model/Category";
import { AnyTableKey, ModelUnion } from "../types";
import fetchApi from "./fetchApi";

export default function getFields(table: AnyTableKey, init?: ModelUnion) {
    const get = (field: keyof ModelUnion): string | undefined => init && init[field] as string
    switch(table) {
        case "client":
            return <>
                <TextInput required name="fio" type="text" placeholder="ФИО" defaultValue={get("fio")}/>
                <TextInput required name="phone_number" type="tel" placeholder="Номер" defaultValue={get("phone_number")}/>
                <Select defaultValue={get("category")} name="category" required>
                    {Object.keys(Category).map(key => <option key={key} value={key}>{Category[key as CategoryKey]}</option>)}
                </Select>
                <TextInput required name="email" type="email" placeholder="Эл. почта" defaultValue={get("email")}/>
            </>
        case "service":
            return <>
                <TextInput required name="name" type="text" placeholder="Название" defaultValue={get("name")}/>
                <TextInput required name="price" type="number" placeholder="Номер" defaultValue={get("price")}/>
                <TextInput required name="duration" type="number" placeholder="Длительность" defaultValue={get("duration")}/>
            </>
        case "visit":
            return <>
                <ForeignSelect target="client" name="client_id" defaultValue={get("client_id")}/>
                <ForeignSelect target="service" name="service_id" defaultValue={get("service_id")}/>
                <TextInput required name="date" type="date" placeholder="Дата" defaultValue={get("date")}/>
                <TextInput required name="time" type="time" placeholder="Время" defaultValue={get("time")}/>
                <VariantInput name="servic_fullfilled" label="Услуга оказана?" defaultTrue={init ? init.service_fullfilled as boolean : true}/>
            </>
        default:
            throw new Error("Nonexistent table name")
    }
}