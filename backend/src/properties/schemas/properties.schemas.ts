import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";

@Schema({ _id: false })
export class LaptopProperties {
    @Prop({type: String, require: true })
    OS: String
    @Prop({type: String, require: true })
    resolutionScreen: String
    @Prop({type: Number, require: true })
    ram: number
    @Prop({type: String, require: true })
    processor: String
    @Prop({type: String, require: true })
    gpu: String
    @Prop({type: Number, require: true })
    hardDrive: number
}

export const laptopSchema = SchemaFactory.createForClass(LaptopProperties)

@Schema({ _id: false })
export class TvProperties {
    @Prop({type: String, require: true })
    displayResolution: string
    @Prop({type: Number, require: true })
    screenSize: number
    @Prop({type: Boolean, require: true })
    remoteControl: boolean
    @Prop({type: Number, require: true })
    brightness: number
}

export const tvSchema = SchemaFactory.createForClass(TvProperties)

@Schema({ _id: false })
export class PrinterProperties {
}

export const printerSchema = SchemaFactory.createForClass(PrinterProperties)

@Schema({ _id: false })
export class ProjectorProperties {
    @Prop({type: Boolean, require: true })
    remoteControl: boolean
    @Prop({type: Number, require: true })
    displayResolution: number
    @Prop({type: Number, require: true })
    brightness: number
}

export const projectorSchema = SchemaFactory.createForClass(ProjectorProperties)

@Schema({ _id: false })
export class ElectronicProperties {
    @Prop({require: true})
    color: String
    @Prop({require: true})
    wired: Boolean
    @Prop({require: true})
    serialNumber: String
    @Prop({require: true})
    brand: String
    @Prop({require: true})
    usbPorts: Number
    @Prop(raw({ type: laptopSchema, require: true }))
    laptop?: Record<string, LaptopProperties>;
    @Prop(raw({ type: tvSchema, require: true }))
    tv?: Record<string, TvProperties>;
    @Prop(raw({ type: printerSchema, require: true }))
    printer?: Record<string, PrinterProperties>;
    @Prop(raw({ type: projectorSchema, require: true }))
    projector?: Record<string, ProjectorProperties>;
}

const electronicSchema = SchemaFactory.createForClass(ElectronicProperties)

@Schema({ _id: false })
export class ChairProperties {
}

const chairSchema = SchemaFactory.createForClass(ChairProperties)

@Schema({ _id: false })
export class SofaProperties {
    @Prop({type: Number, require: true })
    numberOfCushion: Number
}

const sofaSchema = SchemaFactory.createForClass(SofaProperties)

@Schema({ _id: false })
export class TableProperties {
    @Prop({type: String, require: true })
    topMaterial: String
}

const tableSchema = SchemaFactory.createForClass(TableProperties)

@Schema({ _id: false })
export class LampProperties {
    @Prop({type: String, require: true })
    material: String
}

const lampSchema = SchemaFactory.createForClass(LampProperties)

@Schema({ _id: false })
export class FurnitureProperties {
    @Prop({require: true})
    color: String
    @Prop({require: true})
    form: String
    @Prop({require: false})
    legs?: Number
    @Prop({require: true})
    material: String
    @Prop({require: true})
    dimensions: String
    @Prop({require: true})
    cushioning: String
    @Prop(raw({ type: chairSchema, require: true }))
    chair?: Record<string, ChairProperties>;
    @Prop(raw({ type: sofaSchema, require: true }))
    sofa?: Record<string, SofaProperties>;
    @Prop(raw({ type: tableSchema, require: true }))
    table?: Record<string, TableProperties>;
    @Prop(raw({ type: lampSchema, require: true }))
    lamp?: Record<string, LampProperties>;
}

const furnitureSchema = SchemaFactory.createForClass(FurnitureProperties)

@Schema({ _id: false })
export class CarProperties {
}

const carSchema = SchemaFactory.createForClass(CarProperties)

@Schema({ _id: false })
export class BusProperties {
}

const busSchema = SchemaFactory.createForClass(BusProperties)

@Schema({ _id: false })
export class PlaneProperties {
}

const planeSchema = SchemaFactory.createForClass(PlaneProperties)

@Schema({ _id: false })
export class VehiclesProperties {
    @Prop({type: String, require: true })
    color: String
    @Prop({type: String, require: true })
    engine: String
    @Prop({type: Number, require: false })
    wheels?: Number
    @Prop({type: Number, require: true })
    seats: Number
    @Prop({type: String, require: true })
    cushioning: String
    @Prop({type: Boolean, require: true })
    airCondition: Boolean
    @Prop(raw({ type: carSchema, require: true }))
    car?: Record<string, CarProperties>;
    @Prop(raw({ type: busSchema, require: true }))
    bus?: Record<string, BusProperties>;
    @Prop(raw({ type: planeSchema, require: true }))
    plane?: Record<string, PlaneProperties>;
}

const vehicleSchema = SchemaFactory.createForClass(VehiclesProperties)

@Schema({ _id: false })
export class Movables {
    @Prop(raw({ type: electronicSchema, require: true }))
    electronic?: Record<string, ElectronicProperties>;

    @Prop(raw({ type: furnitureSchema, require: true }))
    furniture?: Record<string, FurnitureProperties>;

    @Prop(raw({ type: vehicleSchema, require: true }))
    vehicle?: Record<string, VehiclesProperties>;
}

const MovableSchema = SchemaFactory.createForClass(Movables)

@Schema({ _id: false })
export class BuildingProperties {
    @Prop({type: String, require: true })
    color: string
    @Prop({type: Number, require: true })
    floors: number
    @Prop({type: Number, require: true })
    rooms: number
    @Prop({type: Number, require: true })
    windows: number
    @Prop({type: Number, require: true })
    doors: Number
    @Prop({type: Boolean, require: true })
    parking: Boolean
}

const buildingSchema = SchemaFactory.createForClass(BuildingProperties)

@Schema({ _id: false })
export class HouseProperties {
    @Prop({type: String, require: true })
    color: string
    @Prop({type: Number, require: true })
    floors: number
    @Prop({type: Number, require: true })
    rooms: number
    @Prop({type: Number, require: true })
    windows: number
    @Prop({type: Number, require: true })
    doors: Number
    @Prop({type: Boolean, require: true })
    pool: Boolean
}

const houseSchema = SchemaFactory.createForClass(HouseProperties)


@Schema({ _id: false })
export class LandProperties {
    @Prop({type: Number, require: true })
    size: Number
}

const landSchema = SchemaFactory.createForClass(LandProperties)

@Schema({ _id: false })
export class EstablishmentProperties {
    @Prop(raw({ type: buildingSchema, require: true }))
    building?: Record<string, BuildingProperties>;
    @Prop(raw({ type: houseSchema, require: true }))
    house?: Record<string, HouseProperties>;
    @Prop(raw({ type: landSchema, require: true }))
    land?: Record<string, LandProperties>;
}

const establishmentSchema = SchemaFactory.createForClass(EstablishmentProperties)

@Schema({ _id: false })
export class NonMovables {
    @Prop(raw({ type: establishmentSchema, require: true }))
    establishment?: Record<string, EstablishmentProperties>;
}

const NonMovableSchema = SchemaFactory.createForClass(NonMovables)

@Schema()
export class PropertiesSchema {
    @Prop({ required: false, index: true })
    id: string;

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    description: string

    @Prop({ required: true })
    buyDate: Date

    @Prop({ required: true })
    creationDate: Date

    @Prop({ required: true })
    imageURL: string

    @Prop({ required: true })
    price: number

    @Prop({ required: true })
    propertyStatus: string

    @Prop({ required: true })
    locationBelongs: string

    @Prop({ required: true })
    actualLocation: string

    @Prop({ required: false })
    assignedTo: string

    @Prop({ type: MovableSchema })
    movable: Movables

    @Prop({ type: NonMovableSchema })
    nonMovable: NonMovables
}

export const PropSchema = SchemaFactory.createForClass(PropertiesSchema)