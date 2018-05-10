import mongoose, { Schema } from 'mongoose'
import uuid from 'node-uuid'
import PropertySchema from './property'

const ObjectSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4,
    required: true,
  },
  type: String,
  namespace: String,
  //properties: [PropertySchema],
  //objects: [ObjectSchema],
})

export default mongoose.model('Object', ObjectSchema)
