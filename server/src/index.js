import express from 'express';
//import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { ApolloServer, gql } from 'apollo-server-express';
import { createServer } from 'http';
//import bodyParser from 'body-parser';

import './config/db';
import constants from './config/constants';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mocks from './mocks';
import {decodeToken} from './services/auth';

const app = express();

async function auth(req, res, next) {
    try {
      const token = req.headers.authorization;
      if (token != null) {
        const user = await decodeToken(token);
        req.user = user; // eslint-disable-line
      } else {
        req.user = null; // eslint-disable-line
      }
      return next();
    } catch (error) {
      throw error;
    }
  }

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        endpoint: constants.GRAPHQL_PATH,
        setting: {
            'editor.theme': 'light'
        }
    },
    context: ({req}) => ({
        user: req.user,
    }),
});

server.applyMiddleware({
    app
});



app.use(auth);

const graphQLServer = createServer(app);

mocks().then(() => {
    graphQLServer.listen(constants.PORT, err => {
        if (err) {
          console.error(err);
        } else {
          console.log(`App running on port: ${constants.PORT}`);
        }
});
});