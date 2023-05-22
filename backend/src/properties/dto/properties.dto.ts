import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ElectronicProperties, FurnitureProperties, VehiclesProperties, NonMovableProperties } from "../interfaces/property.interface";

export class CreatePropertyDTO {
    _id: string;
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    description: string;
    @IsNotEmpty()
    @IsDateString()
    buyDate: Date;
    @IsNotEmpty()
    @IsDateString()
    creationDate: Date;
    @IsNotEmpty()
    @IsString()
    imageURL: string;
    @IsNotEmpty()
    @IsNumber()
    price: number;
    @IsNotEmpty()
    @IsString()
    propertyStatus: 'TOGIVE' | 'DAMAGED' | 'TOSELL' | 'TODONATE' | 'TOTHROW' | 'NEW' | 'BADSTATUS' | 'LOST' | 'TOFIX' | 'GOODSTATUS';
    @IsNotEmpty()
    @IsString()
    locationBelongs: string;
    @IsNotEmpty()
    @IsString()
    actualLocation: string;
    assignedTo: string
    movable?: {
        electronic?: {
            electronicProperties: ElectronicProperties;
            laptop?: Laptop;
            tv?: Tv;
            projector?: Projector;
            printer?: Printer;
        }
        furniture?: {
            furnitureProperties: FurnitureProperties;
            chair: Chair;
            sofa: Sofa;
            table: Table;
            lamp: Lamp;
        }
        vehicles?: {
            vehiclesProperties: VehiclesProperties;
            car?: Car;
            bus?: Bus;
            plane?: Plane;
        }
    }
    nonMovable?: {
        establishment: {
            building?: Building;
            house?: House;
            land?: Land;
        }
    } 
}


//Estados para dar de baja, regalar o donar o vender o desechar
//Estado del bien, mal estado, en buen estado, nuevo, en reparación o perdido

class Laptop {
    OS: string
    resolutionScreen: string
    ram: number
    processor: string
    gpu: string
    hardDrive: number
}

class Printer {
}

class Tv {
    resolutionScreen: number
    displayResolution: number
    screenSize: number
    remoteControl: boolean
}

class Projector {
    remoteControl: boolean
    displayResolution: number
    brightness: number
}

class Chair {
}

class Sofa {
    numberOfCushions: number
}

class Table {
    topMaterial: string
}

class Lamp {
    material: string
}

class Car {
}

class Bus {
}

class Plane {
}

class Building {
    nonMovableProperties: NonMovableProperties;
    doors: number
    parking: boolean
}

class House {
    nonMovableProperties: NonMovableProperties;
    doors:number
    pool: boolean
}

class Land {
    size: number
}