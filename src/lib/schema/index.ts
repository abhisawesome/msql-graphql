import { GraphQLObjectType, GraphQLSchema, GraphQLList } from "graphql";
import { UserType } from '../types';

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType)
    },
  },
});


export const schema = new GraphQLSchema({
  query: RootQuery
});