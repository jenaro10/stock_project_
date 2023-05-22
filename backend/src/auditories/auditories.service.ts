import { Injectable } from '@nestjs/common';
import { AuditorySchema } from './schemas/auditory.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Auditory } from './interfaces/auditory.interface';
import { Model } from 'mongoose';
import { PropertiesSchema } from 'src/properties/schemas/properties.schemas';
import { Property } from 'src/properties/interfaces/property.interface';

@Injectable()
export class AuditoryService {

    constructor(@InjectModel(AuditorySchema.name) private readonly auditoryModel: Model<Auditory>,
    @InjectModel(PropertiesSchema.name) private propertyModel: Model<Property>
    )
    {}
    

    async auditory(room: string): Promise<string[]>{
        const properties = await this.getProperties()
    
            const auditory = new this.auditoryModel({
                room,
                totalOfProperties: properties.length,
                totalOfFailures: 0,
                properties: properties
            })

            var resp: string[] = []

            properties.map(property => {
                if (room === property.locationBelongs){
                    if (property.actualLocation !== property.locationBelongs){
                        auditory.totalOfFailures = (auditory.totalOfFailures).valueOf() +1
                        resp.push("The "+property.name+" with id "+property._id+ " has a different location than assigned, it's supposed to be in "+
                        room+" and it's in "+ property.actualLocation)
                    }else{
                        resp.push("Passed.")
                    }
                }{
                    resp.push("Different room to check.")
                }
                
            })
            auditory.save()
            return resp
    }

    
    async getAllAuditories(): Promise<Auditory[]> {
        return this.auditoryModel.find().exec();
    }
    
     async getAuditoriesByRoom(room: string): Promise<Auditory[]> {
    return this.auditoryModel.find({ room }).exec();
  }
    
    async getProperties(): Promise<Property[]>{
        const properties = await this.propertyModel.find()
        return properties
    }



}
