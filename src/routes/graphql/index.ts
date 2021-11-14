import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema, resolvers } from '../../lib';


const router = express.Router();


router.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: resolvers
}))


export default router;



