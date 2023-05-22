declare global {
    namespace NodeJS {
        interface ProcessEnv {
            USERNAME: string
            PASSWORD: string
            SECRET: string
            MONGO_URI: string
            MONGO_DB: string
            ROLE: string
            NODE_ENV: 'development' | 'production'
        }
    }
}
  
export {}