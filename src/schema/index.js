import { makeExecutableSchema } from 'graphql-tools'
import Configuration from './configuration'
import resolvers from '../resolvers'

const Query = `
  type Query {
    configuration(id: String!): Configuration
    configurations: [Configuration]
  }

  type Mutation {
    createConfiguration(id: String!): Configuration
  }
`

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    Query,
    ...Configuration
  ],
  resolvers,
})
