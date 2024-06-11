import { UserSchema } from "./userSchema"
import { IProject } from "../../types/IProject"
import { ConfigSchema } from "./configSchema"
import { integer, text, serial, pgTable, json } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const WaitlisterSchema = pgTable('waitlister', {
    id: serial("id").primaryKey(),
    createdAt: text("createdAt").default("now()").notNull(),
    updatedAt: text("updatedAt").default("now()").notNull(),
    email: text("email").notNull(),
    projectId: integer("project_id")
})


export const ProjectSchema = pgTable("project", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    tracking: text("tracking"),
    createdAt: text("createdAt").default("now()").notNull(),
    updatedAt: text("updatedAt").default("now()").notNull(),
    authorId: integer("author_id"),
    // TODO: default config colors and stuff
    config: json("config").default({})
})

export const projectRelations = relations(ProjectSchema, ({ one }) => ({
    author: one(UserSchema, {
        fields: [ProjectSchema.authorId],
        references: [UserSchema.id],
    }),
}))

export const waitlisterRelations = relations(WaitlisterSchema, ({ one }) => ({
    project: one(ProjectSchema, {
        fields: [WaitlisterSchema.projectId],
        references: [ProjectSchema.id],
    }),
}))