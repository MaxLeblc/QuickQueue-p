import { ProjectSchema } from "./projectSchema"
import { text, boolean, serial, pgTable } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const UserSchema = pgTable("user", {
    id: serial("id").primaryKey(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
    planId: text("plan_id").default("free-tier"),
    stripeId: text("stripe_id"),
    stripeLink: text("stripe_link"),
    done: boolean("done").default(false).notNull(),
    createdAt: text("createdAt").default("now()").notNull(),
    updatedAt: text("updatedAt").default("now()").notNull(),
})

export const userRelations = relations(UserSchema, ({ many }) => ({
    projects: many(ProjectSchema)
}))
