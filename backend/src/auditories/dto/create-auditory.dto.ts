import { CreatePropertyDTO } from "src/properties/dto/properties.dto";

export class CreateAuditoryDTO extends CreatePropertyDTO{
    room: String;
    totalOfProperties: Number;
    totalOfFailures: Number;
    properties: CreatePropertyDTO[]
}