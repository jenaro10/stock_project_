import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDTO {
    readonly _id: string;

    @IsNotEmpty()
    @IsString()
    readonly role: string
    @IsNotEmpty()
    @IsString()
    readonly name: string
    @IsNotEmpty()
    @IsString()
    readonly username: string;
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}