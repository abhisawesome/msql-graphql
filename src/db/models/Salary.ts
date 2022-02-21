import { Model } from 'objection';


class SalaryModel extends Model {
    static get tableName() {
        return 'salary';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                salary: { type: 'float' },
                user_id: {
                    type: 'integer',
                }
            }

        }
    }
}

export default SalaryModel