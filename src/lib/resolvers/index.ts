import { PartialModelObject } from 'objection';
import { models } from '../../db';

const { UsersModel } = models;

interface paramModel {
    id: Number
}

export default {
    getAllUsers: async () => {
        const userResponse = await UsersModel.query().select();
        return userResponse;
    },
    getUserById: async ({ id }: paramModel) => {
        const userResponse = await UsersModel.query().select().findOne({ id: id });
        return userResponse
    },
    insertNewUser: async (parms:any) => {
        const { name, username, password } = parms;
        const input = {
            password,
            name,
            username
        }
        // @ts-ignore
        const userResponse = await UsersModel.query().insert(input);
        return userResponse
    }
}