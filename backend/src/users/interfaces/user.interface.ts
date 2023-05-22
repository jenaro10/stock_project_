import { Document } from "mongoose";

export interface UserInterface extends Document{
    _id: String;
    role: String;
    name: String;
    username: String;
    password: String;
}