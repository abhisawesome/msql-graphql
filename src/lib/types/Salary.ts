import { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLFloat } from "graphql";
import { UserType } from './index'
export const SalaryType = new GraphQLObjectType({
    name: "Salary",
    fields: () => ({
        id: { type: GraphQLID },
        salary: { type: GraphQLFloat },
        user_id: { type: GraphQLInt }
    }),
});

export const SalaryWithUser = new GraphQLObjectType({
    name: "SalaryWithUser",
    fields: () => (
        {
            id: { type: GraphQLID },
            users: {
                type: UserType
            },
            salary: {
                type: SalaryType
            }
        }
    )
})