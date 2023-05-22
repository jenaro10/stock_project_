import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from "@nestjs/mongoose";
import config from "../config";
import 'dotenv/config'

@Global()
@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: () => {
                return {
                    uri: 'mongodb+srv://sebasromero:qah2KRWUpv0WY58P@cluster0.jwer9np.mongodb.net/?retryWrites=true&w=majority'
                }
            },
            inject: [config.KEY]
        })
    ],
    exports: [MongooseModule]
})
export class DatabaseModule {}
