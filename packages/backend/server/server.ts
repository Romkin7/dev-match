'use strict';
import { config } from 'dotenv';
import { server } from '@hapi/hapi';
import { routes } from './routes';

config();

const initServer = async () => {
    const hapiServer = server({
        port: process.env.PORT,
        host: process.env.HOST,
    });
    hapiServer.route(routes);
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
