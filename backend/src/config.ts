import { registerAs } from "@nestjs/config";

export default registerAs('config', () => {
    return {
        MONGO: {
            URI: process.env.MONGO,
            dbName: process.env.MONGO_DB
        },
    }
})