import { PartialModelObject } from 'objection';
import { models } from '../../db';

const { UsersModel, SalaryModel } = models;

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
    insertNewUser: async (parms: any) => {
        const { name, username, password } = parms;
        const input = {
            password,
            name,
            username
        }
        // @ts-ignore
        const userResponse = await UsersModel.query().insert(input);
        return userResponse
    },
    getSalary: async (params: any) => {
        const userResponse = await UsersModel.query()
            .select()
            .findOne({ id: params.userId });
        const salaryResponse:any = await SalaryModel.query()
            .select()
            .findOne({ user_id: params.userId });
        return {
            id: salaryResponse?.id,
            users: userResponse,
            salary: salaryResponse
        }
    }
}