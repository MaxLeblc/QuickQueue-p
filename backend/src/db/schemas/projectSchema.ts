import { integer, text, serial, pgTable, json } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { userSchema } from "."

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
    author: one(userSchema, {
        fields: [ProjectSchema.authorId],
        references: [userSchema.id],
    }),
}))
