import Knex from "knex";
import { Model, raw } from 'objection'
import * as models from './models';
import { DB_CONFIG } from '../config';

const connect = () => {
    const knex = Knex({
        client: 'mysql2',
        connection: DB_CONFIG,
        pool: { min: 0, max: 7 }
    })
    Model.knex(knex);
    console.log('Connected!')
}


export default connect;


export { models, raw }


