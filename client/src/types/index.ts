import Client from "../model/Client";
import Service from "../model/Service";
import Visit from "../model/Visit";

export type AnyModel = Partial<Record<keyof Visit | keyof Client | keyof Service, Visit[keyof Visit] | Client[keyof Client] | Service[keyof Service]>>

export enum AnyTable { client = "Клиенты", visit = "Посещения", service = "Услуги" }

export type AnyTableKey = "client" | "visit" | "service"

export type ModelUnion = Client & Visit & Service