import dotenv from 'dotenv'
dotenv.config()

export default {
  port: 1337,
  dbUri: process.env.MONGODB_URI,
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  privateKey: process.env.PRIVATE_KEY,
  publicKey: process.env.PUBLIC_KEY
}
