import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { UsersSchema, USchema } from "./schemas/users.schemas";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: UsersSchema.name, schema: USchema}
    ])
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
