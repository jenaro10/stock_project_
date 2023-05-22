import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PropertiesModule } from './properties/properties.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'
import { enviroments } from "./enviroments";
import { AuditoryModule } from './auditories/auditories.module';
import config from "./config";
import 'dotenv/config'

@Module({
  imports: [AuthModule, UsersModule, PropertiesModule, AuditoryModule, DatabaseModule, ConfigModule.forRoot({
    envFilePath: enviroments[process.env.NODE_ENV] || '.env',
    load: [config],
    isGlobal: true,
    validationSchema: Joi.object({
      MONGO_URI: 'mongodb+srv://sebasromero:qah2KRWUpv0WY58P@cluster0.jwer9np.mongodb.net/?retryWrites=true&w=majority'
    })
  })],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
