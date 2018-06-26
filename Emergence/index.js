import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolver from './resolver';
import models from './models';

const schema = makeExecutableSchema({
  typeDefs,
  resolver,
});

const app = express();
const graphqlEndpoint = '/graphql';

app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));
models.sequelize.sync({}).then((x) => {
  app.listen(8081);
});
