import ConfigurationModel from '../models/configuration'
import ObjectModel from '../models/object'
import PropertyModel from '../models/property'
import PluginModel from '../models/plugin'
import { database } from '../utils'

class Configuration {
  constructor() {
    this.create = (args) => {
      console.log(`Create configuration with ID ${args.id}`)
      const model = new ConfigurationModel(args)
      const config = model.save()
      if (!config) {
        throw new Error('Error: Create Configuration failed')
      }
      return config
    }

    this.read = (id) => {
      console.log(`Read configuration with ID ${id}`)
      const config = ConfigurationModel.findOne({ id }, (err, data) => {
        return data
      })
      return config
    }

    this.update = (configuration) => {
      console.log(`Update configuration with ID ${id}`)
    }

    this.delete = (id) => {
      console.log(`Delete configuration with ID ${id}`)
    }
  }
}

class Obj {
  constructor() {
  }
}

class Property {
  constructor() {
  }
}

class Plugin {
  constructor() {
  }
}

export { Configuration, Obj, Property, Plugin }
