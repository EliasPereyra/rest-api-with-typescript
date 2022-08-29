import { Express, Request, Response } from 'express'
import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from './controllers/session.controller'

import { createUserHandler } from './controllers/user.controller'
import requireUser from './middlewares/requireUser'
import validateResource from './middlewares/validateResource'
import { createSession } from './schema/session.schema'
import { createUserSchema } from './schema/user.schema'

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200))

  app.post('/api/users', validateResource(createUserSchema), createUserHandler)

  app.get('/api/sessions', requireUser, getUserSessionsHandler)

  app.post('/api/sessions', validateResource(createSession), createUserSessionHandler)

  app.delete('/api/sessions/:id', requireUser, deleteSessionHandler)
}

export default routes

// arreglar error de env
