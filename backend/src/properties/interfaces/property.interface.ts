import { Document } from "mongoose";

export class Property extends Document{
    _id: string
    name: string;
    description: string;
    imageURL: string;
    price: number;
    propertyStatus: string;
    locationBelongs: string;
    actualLocation: string;
    asignTo: string
    movable: JSON;
    nonMovable: JSON;
}

export interface ElectronicProperties {
    color: string
    brand: string
    serialNumber: string
    wired: boolean
    usbPorts: number
}

export interface FurnitureProperties {
    color: string
    form: string
    legs?: number
    material: string
    dimensions: string
    cushioning: string
}

export interface VehiclesProperties {
    color: string
    engine: string
    wheels?: number
    seats: number
    cushioning: string
    airCondition: boolean
}

export interface NonMovableProperties {
    color: string
    floors: number
    rooms: number
    windows: number
}
