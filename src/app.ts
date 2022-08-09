import express from 'express'
import config from 'config'

const port = config.get<Number>('port')

const app = express()

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
