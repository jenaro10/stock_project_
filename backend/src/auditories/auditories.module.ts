import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuditorySchema, AuditSchema } from './schemas/auditory.schemas';
import { AuditoryService } from './auditories.service';
import { AuditoryController } from './auditories.controller';
import { PropertiesSchema, PropSchema } from 'src/properties/schemas/properties.schemas';

@Module({
    imports: [
        MongooseModule.forFeature([
          {name: AuditorySchema.name, schema: AuditSchema},
          {name: PropertiesSchema.name, schema: PropSchema},
        ]),
      ],
      providers: [AuditoryService],
      exports: [AuditoryService],
      controllers: [AuditoryController]
})
export class AuditoryModule {}
