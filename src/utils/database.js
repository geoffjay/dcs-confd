import mongoose from 'mongoose'
import config from '../config'

export default {
  open () {
    mongoose.Promise = global.Promise

    mongoose.connect(config.database.uri, (err) => {
      if (err) {
        return err
      }
      return true
    })

    mongoose.connection.on('error', function (err) {
      console.log('Error: Could not connect to MongoDB'.red)
    }).on('open', function () {
      console.log('Connection established with MongoDB')
    })
  },
  close () {
    mongoose.connection.close()
  }
}
