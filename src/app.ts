import express from 'express'
import config from 'config'

import connectDB from './utils/connect'
import logger from './utils/logger'

const port = config.get<Number>('port')

const app = express()

app.listen(port, async () => {
  await connectDB()
  logger.info(`App running with success at http://localhost:${port}`)
})
