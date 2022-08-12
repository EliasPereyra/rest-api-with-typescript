import express from 'express'
import config from 'config'
import connect from './utils/connect'
import logger from './utils/logger'

const port = config.get<Number>('port')

const app = express()

app.listen(port, async () => {
  await connect()
  logger.info(`App running with success`)
})
