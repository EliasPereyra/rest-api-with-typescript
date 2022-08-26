import { Request, Response } from "express";
import { signJwt } from "../services/jwt.utils";
import { createSession } from "../services/session.service";
import { validatePassword } from "../services/user.service";
import config from 'config'

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate the user's password
  const user = await validatePassword(req.body)

  if (!user) {
    return res.status(401).send("Invalid email or password")
  }

  // create a session
  const session = await createSession(user._id, req.get("user-agent") || "")

  // create an access token
  const accessToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>('accessTokenTtl') }  // 15 minutes
  )

  // create a refresh token
  const refreshToken = signJwt(
    { ...user, session: session._id },
    { expiresIn: config.get<string>('refreshTokenTtl') }  // 15 minutes
  )

  // return access & refresh tokens
  return {
    accessToken,
    refreshToken
  }
}
