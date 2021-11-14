import { Model } from 'objection';


class UsersModel extends Model {
    static get tableName() {
        return 'users';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                username: { type: 'string' },
                password: { type: 'string' }
            }

        }
    }
}

export default UsersModel