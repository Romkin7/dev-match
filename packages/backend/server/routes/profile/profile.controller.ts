import hapi from '@hapi/hapi';
import { createClienConnection } from '../../conf/databaseConnection';
export const profileRoutes = [
    {
        method: 'GET',
        path: '/api/profile',
        handler: async (request: hapi.Request, h: any) => {
            const client = await createClienConnection();
            let res: any = await client.query('SELECT * FROM Profiles');
            client.end();
            return { profiles: res.rows };
        },
    },
];
