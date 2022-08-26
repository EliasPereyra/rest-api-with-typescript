import express from 'express'
import config from 'config'

import connectDB from './utils/connect'
import logger from './utils/logger'
import routes from './routes'
import deserializeUser from './middlewares/deserializeUser'

const port = config.get<Number>('port')
const app = express()

app.use(deserializeUser)
app.use(express.json())

app.listen(port, async () => {
  await connectDB()
  logger.info(`App running with success at http://localhost:${port}`)

  routes(app)
})
