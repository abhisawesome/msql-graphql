import { GraphQLObjectType, GraphQLSchema, GraphQLList } from "graphql";
import { UserType } from '../types';
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      resolve: () => {
        return [{ id: 1, name: 'one', username: '1', password: 'pass' }]
      }
    },
  },
});


export const schema = new GraphQLSchema({
  query: RootQuery
});