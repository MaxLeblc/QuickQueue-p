import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from './schemas'

const sql = neon(process.env.NEON_DATABASE_URL!)

const db = drizzle(sql, { schema: schema })

export default db
