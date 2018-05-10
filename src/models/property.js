import mongoose, { Schema } from 'mongoose'

const PropertySchema = new Schema({
  key: {
    type: String,
    required: true,
  },
  value: String,
})

export default mongoose.model('Property', PropertySchema)
