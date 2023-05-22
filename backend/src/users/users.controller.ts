import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Post, Query, Request, Res, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from './dto/users.dto';
import { UserInterface } from './interfaces/user.interface';
import { UsersService } from "./users.service";
import 'dotenv/config'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {

    //Instancing the userService to get all the methods from there
    constructor(private userService: UsersService) { }


    //This handler creates an user
   
    @Post('/create')
    async createUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Request() req) {
      const role = 'EMPLOYEE'; // Asignar el rol "EMPLOYEE" de forma fija
      
      const user = await this.userService.createUser({ ...createUserDTO, role });
    
      res.status(HttpStatus.OK).json({
        message: 'received',
        user
      });
    }
    
    //This handler gets an user array
    @Get('/')
    async getUsers(@Res() res) {
        const users = await this.userService.getUsers();
        res.status(HttpStatus.OK).json({
            message: 'received',
            users
        })
    }

    //This handler gets an user
    @Get('/user')
    async getUser(@Res() res,@Query('userID') userID) {
        const user = await this.userService.getUser(userID);
        res.status(HttpStatus.OK).json({
            message: 'received',
            user
        })
    }

    //This handler deletes an user
    @UseGuards(JwtAuthGuard)
    @Delete('/delete')
    async deleteUser(@Res() res, @Query('userID') userID, @Request() req) {
        if (req.user.role === process.env.ROLE) {
            const user = await this.userService.deleteUser(userID)
            if (!user) throw new NotFoundException('User does not exist')
            return res.status(HttpStatus.OK).json({
                message: 'User deleted succesfully',
                user
            })
        } else {
            res.status(HttpStatus.UNAUTHORIZED).json({
                message: 'Not Authorized'
            })
        }
    }
}
