import { Express, Request, Response } from 'express'

import requireUser from './middlewares/requireUser'
import validateResource from './middlewares/validateResource'

import { createProductHandler, deleteProductHandler, getProductHandler, updateProductHandler } from './controllers/product.controller'
import { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } from './controllers/session.controller'
import { createUserHandler } from './controllers/user.controller'

import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema } from './schema/product.schema'
import { createSession } from './schema/session.schema'
import { createUserSchema } from './schema/user.schema'

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200))

  app.post('/api/users', validateResource(createUserSchema), createUserHandler)

  app.get('/api/sessions', requireUser, getUserSessionsHandler)

  app.post('/api/sessions', validateResource(createSession), createUserSessionHandler)

  app.delete('/api/sessions/:id', requireUser, deleteSessionHandler)

  app.post('/api/products', [requireUser, validateResource(createProductSchema), createProductHandler])

  app.put('/api/products/product:id', [requireUser, validateResource(updateProductSchema), updateProductHandler])

  app.get('/api/products/product:id', validateResource(getProductSchema), getProductHandler)

  app.delete('/api/products/product:id', [requireUser, validateResource(deleteProductSchema)], deleteProductHandler)
}

export default routes
