import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Property } from "./interfaces/property.interface";
import { CreatePropertyDTO } from "./dto/properties.dto";
import { PropertiesSchema } from './schemas/properties.schemas';

@Injectable()
export class PropertiesService {

    constructor(@InjectModel(PropertiesSchema.name) private readonly propertyModel: Model<Property>){}

    async getProperties(): Promise<Property[]>{
        const properties = await this.propertyModel.find()
        return properties
    }

    async getProperty(propertyID: string): Promise<Property> {
        const property = await this.propertyModel.findById(propertyID)
        return property
    }

    createProperty(createProperty: CreatePropertyDTO): Promise<Property>{
        const newProperty = new this.propertyModel(createProperty)
        return newProperty.save()
    }

    async deleteProperty(propertyID: string): Promise<Property> {
        const deletedProduct = await this.propertyModel.findByIdAndDelete(propertyID);
        return deletedProduct
    }

    async updateProperty(propertyID: string, createPropertyDTO: CreatePropertyDTO): Promise<Property> {
        const updatedProperty = await this.propertyModel.findByIdAndUpdate(propertyID, createPropertyDTO, {new: true})
        return updatedProperty;
    }


}
