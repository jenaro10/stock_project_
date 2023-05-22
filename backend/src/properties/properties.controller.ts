import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, UseGuards, Request, Query, NotFoundException } from '@nestjs/common';
import { CreatePropertyDTO } from "./dto/properties.dto";
import { PropertiesService } from './properties.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import 'dotenv/config'

@Controller('properties')
export class PropertiesController {

    constructor(private propertyService: PropertiesService){}

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    async createProperty(@Res() res, @Body() createPropertyDTO: CreatePropertyDTO, @Request() req){
        if (req.user.role === 'ADMIN') {
            createPropertyDTO.assignedTo = req.user.name
            const property = await this.propertyService.createProperty(createPropertyDTO)
            // this.propertyService.updateProperty(property.id, createPropertyDTO)
            res.status(HttpStatus.OK).json({
                message: 'received',
                property
            })
        }else{
            res.status(HttpStatus.OK).json({
                message: 'Not Authorized',
            })
        }
    }

    @Get()
    async getProperties(@Res() res) {
        const properties = await this.propertyService.getProperties();
        res.status(HttpStatus.OK).json({
            message: 'received',
            properties
        })
    }

    @Get('/property')
    async getProperty(@Res() res, @Query('propertyID') propertyID) {
        const property = await this.propertyService.getProperty(propertyID)
        res.status(HttpStatus.OK).json({
            message: 'received',
            property
        })
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/delete')
    async deleteProperty(@Res() res, @Query('propertyID') propertyID, @Request() req) {
        if (req.user.role === 'ADMIN') {
            const propertyDeleted = await this.propertyService.deleteProperty(propertyID)
            if (!propertyDeleted) throw new NotFoundException('Property does not exist')
            return res.status(HttpStatus.OK).json({
                message: 'Property deleted succesfully',
                propertyDeleted
            }) 
        }else{ 
            res.status(HttpStatus.OK).json({
                message: 'Not Authorized',
            })
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('/update')
    async updateProperty(@Res() res, @Body() createPropertyDTO: CreatePropertyDTO, @Query('propertyID') propertyID, @Request() req) {
        if (req.user.role === 'ADMIN') {
            const updatedProperty = await this.propertyService.updateProperty(propertyID, createPropertyDTO)
            if (!updatedProperty) throw new NotFoundException('Property does not exist')
            return res.status(HttpStatus.OK).json({
                message: 'Property updated succesfully',
                updatedProperty
            }) 
        }else{
            res.status(HttpStatus.OK).json({
                message: 'Not Authorized',
            })
        }
    }
}
