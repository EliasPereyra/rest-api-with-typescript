import dotenv from 'dotenv'
dotenv.config()

export default {
  port: 1337,
  dbUri: process.env.MONGODB_URI,
  saltWorkFactor: 10
}
