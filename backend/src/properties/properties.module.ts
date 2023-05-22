import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { MongooseModule } from "@nestjs/mongoose";
import { PropertiesSchema,PropSchema } from "./schemas/properties.schemas";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: PropertiesSchema.name, schema: PropSchema}
    ])
  ],
  providers: [PropertiesService],
  exports: [PropertiesService],
  controllers: [PropertiesController]
})
export class PropertiesModule {}
