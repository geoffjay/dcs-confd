import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { ApolloEngine } from 'apollo-engine'
import compression from 'compression'
import cors from 'cors'
import { database } from './utils'
import schema from './schema'
import config from './config'
import connectors from './connectors'

/* TODO: Read these references / resources
 * - https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035?_ga=2.186154478.655293200.1522366010-2103928960.1520885861
 *   - https://github.com/apollographql/apollo-tutorial-kit
 *
 * TODO: Add React UI with authentication
 * - https://github.com/katopz/react-apollo-graphql-github-example
 */

/* XXX: Example query from cURL / Postman:
 *
 * curl -X POST -H "Content-Type: application/json" \
 *  --data '{ "query": "{ configurations { id } }" }' \
 *  http://localhost:3000/graphql
 */

const engine = new ApolloEngine({
  apiKey: config.server.apiKey,
  // TODO: Add HTTPS
  /*
   *frontends: [{
   *  tls: {
   *    certificateFile: config.tls.cert,
   *    keyFile: config.tls.key,
   *    redirectFromUnencryptedPorts: [+(config.server.redirectPort)],
   *  },
   *}],
   */
})

database.open()

var app = express()

app.use(compression())
app.use('*', cors())
app.use(
  '/graphql',
  bodyParser.json(), // TODO: example used cors() here, try later
  graphqlExpress(req => {
    return {
      schema,
      context: {
        constructor: connectors,
      },
      tracing: true,
      cacheControl: true,
    }
  })
)
app.use(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/graphql' })
)

engine.listen({
  port: config.server.port,
  //graphqlPaths: ['/graphql', '/api/graphql'],
  expressApp: app,
  launcherOptions: {
    startupTimeout: 3000,
  },
}, () => {
  console.log(`Now browse to localhost:${config.server.port}/graphiql`)
})
