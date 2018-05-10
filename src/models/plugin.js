import mongoose, { Schema } from 'mongoose'
import uuid from 'node-uuid'
import PropertySchema from './property'
import ObjectSchema from './object'

const PluginSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    required: true,
  },
  type: String,
  //properties: [PropertySchema],
  //objects: [ObjectSchema],
})

export default mongoose.model('Plugin', PluginSchema)
