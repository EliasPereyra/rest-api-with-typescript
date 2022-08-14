import mongoose from 'mongoose'
import config from 'config'
import logger from './logger'

function connectDB() {
  const dbUri = config.get<string>('dbUri')

  // if you're using a version of mongoose previous to v.6
  // you might specify in the options the newUrlParser and unifiedTopology
  return mongoose.connect(dbUri)
    .then(() => {
      logger.info('Connected to DB successfully')
    })
    .catch(error => {
      logger.error(error, 'Could not connect to DB')
      process.exit(1)
    })
}

export default connectDB
