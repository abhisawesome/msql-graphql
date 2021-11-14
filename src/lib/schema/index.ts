import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt } from "graphql";
import { UserType } from '../types';

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

    }
  },
});


export const schema = new GraphQLSchema({
  query: RootQuery
});