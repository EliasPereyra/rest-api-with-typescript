import { Session } from "inspector";
import { FilterQuery } from "mongoose";
import SessionModel, { SchemaDocument } from "../models/session.model";

export async function createSession(userId: string, userAgent: string) {
  const session = await SessionModel.create({ user: userId, userAgent })

  return session.toJSON()
}

export async function findSessions(query: FilterQuery<SchemaDocument>) {
  return SessionModel.find(query).lean()
}

export async function updateSession(
  query: FilterQuery<SchemaDocument>,
  update: FilterQuery<SchemaDocument>
) {
  return SessionModel.updateOne(query, update)
}
