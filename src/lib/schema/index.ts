import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt, GraphQLString } from "graphql";
import { UserType,SalaryWithUser } from '../types';

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType)
    },
    getUserById: {
      type: UserType,
      args: {
        id: {
          type: GraphQLInt
        }
      }

    },
    getSalary:{
      type: SalaryWithUser,
      args:{
        userId:{
          type: GraphQLInt
        }
      }
    }
  },
});

const MutationQuery = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    insertNewUser: {
      type: UserType,
      args: {
        name: {
          type: GraphQLString
        },
        username: {
          type: GraphQLString
        },
        password:{
          type: GraphQLString
        }
      }
    }

  }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: MutationQuery
});