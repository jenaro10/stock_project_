import { Injectable } from '@nestjs/common';
import 'dotenv/config'
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { UserInterface } from "./interfaces/user.interface";
import { CreateUserDTO } from "./dto/users.dto";
import { UsersSchema } from './schemas/users.schemas';

@Injectable()
export class UsersService {
    //This is the Mongodb connection
    constructor(@InjectModel(UsersSchema.name) private readonly userModel: Model<UserInterface>){}

    //This method returns an user array
    async getUsers(): Promise<UserInterface[]> {
        const users = await this.userModel.find() //This find method is from mongoose
        const newArray = []
        users.forEach(user => {
            if (user.role !== process.env.ROLE) {
                newArray.push(user)
            }
        })
        return newArray
    }

    //This method returns a user
    async getUser(userID: string): Promise<UserInterface> {
        const user = await this.userModel.findById(userID)
        return user
    }

    //This method shows the specific info about an user
    async getUserInfo(usernameGived: string): Promise<UserInterface> {
        const user = await this.userModel.findOne({username: usernameGived})
        if (user != undefined) {
            return user.toObject()
        } else {
            return null
        }
    }

    //This method allows to create an user
    createUser(createUserDTO: CreateUserDTO): Promise<UserInterface> {
        const user = new this.userModel(createUserDTO);
        return user.save()
    }

    //This method allows to delete an user
    async deleteUser(userID: string): Promise<UserInterface> {
        const userDeleted = await this.userModel.findByIdAndDelete(userID)
        return userDeleted
    }

    //This method allows to update an user
    async updateUser(userID: string, createUserDTO: CreateUserDTO): Promise<UserInterface> {
        const updatedUser = await this.userModel.findByIdAndUpdate(userID, createUserDTO, {new: true})
        return updatedUser;
    }
}
