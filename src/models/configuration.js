import mongoose, { Schema } from 'mongoose'
import uuid from 'node-uuid'
import PropertySchema from './property'
import PluginSchema from './plugin'
import ObjectSchema from './object'

const ConfigurationSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    required: true,
  },
  //properties: [PropertySchema],
  //objects: [ObjectSchema],
  //plugins: [PluginSchema],
})

export default mongoose.model('Configuration', ConfigurationSchema)
