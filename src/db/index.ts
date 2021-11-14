import Knex from "knex";
import { Model, raw } from 'objection'
import * as models from './models';


const connect = () => {
    const knex = Knex({
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: 'password',
            database: 'graphql-integration'
        },

        pool: { min: 0, max: 7 }
    })
    Model.knex(knex);
    console.log('Connected!')
}


export default connect;


export { models, raw }


