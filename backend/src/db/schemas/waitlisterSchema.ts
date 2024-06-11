import { integer, text, serial, pgTable, json } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { projectSchema } from "."

export const waitlisterSchema = pgTable('waitlister', {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    projectId: integer("project_id"),
    createdAt: text("createdAt").default("now()").notNull(),
    updatedAt: text("updatedAt").default("now()").notNull()
})

export const waitlisterRelations = relations(waitlisterSchema, ({ one }) => ({
    project: one(projectSchema, {
        fields: [waitlisterSchema.projectId],
        references: [projectSchema.id]
    })
}))
