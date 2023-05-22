import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class UsersSchema extends Document {

    @Prop({required: false, index: true})
    id: String;

    @Prop({required: false})
    role: String;

    @Prop({required: true})
    name: String;

    @Prop({required: true})
    username: String;

    @Prop({required: true})
    password: String;
}

export const USchema = SchemaFactory.createForClass(UsersSchema)