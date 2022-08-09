import express from 'express'
import config from 'config'
import connect from './utils/connect'


const port = config.get<Number>('port')

const app = express()

app.listen(port, async () => {
  await connect()
  console.log(`listening on port ${port}`)
})
