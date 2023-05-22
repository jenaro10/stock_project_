import { HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from "@nestjs/jwt";
import { UserInterface } from 'src/users/interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService){}

    //If we find a user, we are gonna take out all the information about it and show it
    async validateUser(username: string, password: string): Promise<any>{
        const user = await this.usersService.getUserInfo(username)
        
        if (user && user.password === password){
            const {password, username,...rest} = user
            return rest;
        }
    }

    async login(user: UserInterface): Promise<any>{
        const payload = {name: user.name, sub: user._id, role: user.role}
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
