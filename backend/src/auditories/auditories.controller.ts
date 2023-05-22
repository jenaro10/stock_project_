import { Controller, Get, HttpStatus, Post, Query, Res, UseGuards, Body } from '@nestjs/common';
import { AuditoryService } from './auditories.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('auditory')
export class AuditoryController {
    constructor(private auditoryService: AuditoryService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    async getAuditories(@Res() res, @Body() body) {
      const room = body.room;
      const auditory = await this.auditoryService.getAuditoriesByRoom(room);
      res.status(HttpStatus.OK).json({
        message: 'received',
        auditory
      });
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAuditory(@Res() res){
        const auditory = await this.auditoryService.getAllAuditories()
        res.status(HttpStatus.OK).json({
            message: 'received',
            auditory
        }) 
    }

}
