import { Document } from "mongoose";
import { Property } from "src/properties/interfaces/property.interface";

export interface Auditory extends Document{
    room: String;
    totalOfProperties: Number;
    totalOfFailures: Number;
    properties: Property[]
}
