import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class AuditorySchema {
    @Prop({ required: true })
    room: string;

    @Prop({ required: true })
    totalOfProperties: number;

    @Prop({ required: true })
    totalOfFailures: number;

    @Prop({ required: true })
    properties: []
}

export const AuditSchema = SchemaFactory.createForClass(AuditorySchema)