import Obj from './object'
import Property from './property'
import Plugin from './plugin'

const Configuration = `
  type Configuration {
    id: String!,
    properties: [Property]
    plugins: [Plugin]
    objects: [Obj]
  }
`

export default [Configuration, Obj, Property, Plugin]
