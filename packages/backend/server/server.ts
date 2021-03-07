'use strict';
import { config } from 'dotenv';
import { server } from '@hapi/hapi';

config();

const initServer = async () => {
    const hapiServer = server({
        port: process.env.PORT,
        host: process.env.HOST,
    });
    initServer.register(
        {
            register: require('hapi-plugin-pg'),
            options: {
                connectionString:
                    'postgres: //USERNAME:PASSWORD@localhost:5432/DATBASE_NAME',
            },
        },
        (err) => {
            if (err) {
                throw err;
            }
        },
    );
    await hapiServer.start();
    console.log(
        `DevMatch server is running on on %s, ${hapiServer.info.uri}...`,
    );
};

process.on('unhandledRejection', (error) => {
    console.log(error);
    process.exit(1);
});

initServer();
