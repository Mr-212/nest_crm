import { DataSource } from "typeorm";


export const DATA_SOURCE = [
    {
        provider: 'DATA_SOURCE',
        useFactory: async() => {
            const source  = new DataSource( {
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                username: process.env.DB_USER,
                password: <PASSWORD>,
                database: process.env.DB_NAME,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
                logging: true,
            });

            return source.initialize();
        }
    },
    {

    }

];