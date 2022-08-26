import { Express, Request, Response } from 'express'
import { createUserSessionHandler, getUserSessionsHandler } from './controllers/session.controller'

import { createUserHandler } from './controllers/user.controller'
import validateResource from './middlewares/validateResource'
import { createSession } from './schema/session.schema'
import { createUserSchema } from './schema/user.schema'

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200))

  app.post('/api/users', validateResource(createUserSchema), createUserHandler)

  app.post('/api/sessions', validateResource(createSession), createUserSessionHandler)

  app.get('/api/sessions', getUserSessionsHandler, () => {

  })
}

export default routes

// arreglar error de env
