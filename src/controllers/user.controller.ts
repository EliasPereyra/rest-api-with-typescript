import { Request, Response } from 'express'
import { createUser } from '../services/user.service'

import logger from '../utils/logger'

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body)
  }
  catch (e: any) {
    logger.error(e)
    return res.status(409).send(e.message)
  }
}
