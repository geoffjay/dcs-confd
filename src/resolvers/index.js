import { find, filter } from 'lodash'
//import { Configuration, Obj, Property, Plugin } from '../model'
import ConfigurationModel from '../models/configuration'
import ObjectModel from '../models/object'
import PropertyModel from '../models/property'
import PluginModel from '../models/plugin'
import { Configuration, Obj, Property, Plugin } from '../connectors'

const configurations = [
  {
    id: 'test',
    properties: [
      { key: 'prop0', value: 'property 0' },
      { key: 'prop1', value: 'property 1' },
    ],
    objects: [
      {
        id: 'objA',
        properties: [
          { key: 'objAprop0', value: 'obj A property 0' },
          { key: 'objAprop1', value: 'obj A property 1' },
        ],
        objects: [
          { id: 'objAobjB' }
        ]
      },
    ],
    plugins: [],
  }
]

const resolvers = {
  Query: {
    configuration: (_, { id }) => {
      const config = new Configuration()
      return config.read(id)
    },
    configurations: (_, args, ctx) => {
      console.log(ctx.constructor)
      return configurations
    }
  },
  Mutation: {
    /*
     *createConfiguration: async (_, args) => {
     *  const config = new Configuration()
     *  const res = await config.create(args)
     *  return prepare(await config.read({ _id: res.insertedIds[1]}))
     *},
     */
    createConfiguration(_, args, ctx) {
      const config = new ctx.constructor.Configuration()
      //config.create(args).then((res) => console.log(res))
      config.create(args).then(function(res) {
        return config.read(res._id)
      })
      //return res
    },
  },
  Configuration: {
    //objects:
    //properties: (_, { key }) => find(),
    //plugins:
  },
  Obj: {
    //objects:
    //properties:
  },
  Plugin: {
    //objects:
    //properties:
  },
  Property: {
    //value: (_, { configId, key }) => {
      //find(configurations[configId].properties, { key }),
    //}
  }
}

export default resolvers
