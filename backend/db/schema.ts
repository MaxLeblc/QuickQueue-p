import { integer, text, boolean, serial, varchar, pgTable } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const user = pgTable("user", {
    id: serial("id").primaryKey(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
    plan: boolean("plan").default(false).notNull(),
    done: boolean("done").default(false).notNull(),
    createdAt: text("createdAt").default("now()").notNull(),
    updatedAt: text("updatedAt").default("now()").notNull(),
})

export const project = pgTable("project", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    tracking: text("tracking"),
    createdAt: text("createdAt").default("now()").notNull(),
    updatedAt: text("updatedAt").default("now()").notNull(),
    userId: integer("user_id").references(() => user.id),
})

export const config = pgTable("config", {
    backgroundColor: text("backgroundColor").default("#E3E3E3").notNull(),
    titleColor: text("titleColor").default("#000000").notNull(),
    textColor: text("textColor").default("#000000").notNull(),
    placeholderColor: text("placeholderColor").default("#ffffff").notNull(),
    inputBorderColor: text("inputBorderColor").default("#000000").notNull(),
    inputBorderWidth: text("inputBorderWidth").default("0px").notNull(),
    inputBorderRadius: text("inputBorderRadius").default("0").notNull(),
    heroFont: text("heroFont").default("inter").notNull(),
    heroFontWeight: text("heroFontWeight").default("400").notNull(),
    heroText: text("heroText").default("Signup to our waitlist").notNull(),
    subFont: text("subFont").default("inter").notNull(),
    subFontWeight: text("subFontWeight").default("400").notNull(),
    subText: text("subText").default("Get exclusive news, latest updates, and exceptional discounts. Join the list!").notNull(),
    placeholderText: text("placeholderText").default("Add your email").notNull(),
    buttonColor: text("buttonColor").default("#000000").notNull(),
    buttonBorderColor: text("buttonBorderColor").default("#000000").notNull(),
    buttonTextColor: text("buttonTextColor").default("#ffffff").notNull(),
    buttonBorderWidth: text("buttonBorderWidth").default("0px").notNull(),
    buttonBorderRadius: text("buttonBorderRadius").default("0").notNull(),
    buttonFont: text("buttonFont").default("inter").notNull(),
    buttonFontWeight: text("buttonFontWeight").default("400").notNull(),
    buttonText: text("buttonText").default("Submit").notNull(),
    successMessage: text("successMessage").default("You're on the waitlist!").notNull(),
    logo: varchar("logo").notNull(),
    showLogo: boolean("showLogo").default(true).notNull(),
})

export const userRelations = relations(user, ({ many }) => ({
    projects: many(project)
}))

export const projectRelations = relations(project, ({ one }) => ({
    userId: one(user, "id"),
    config: one(config),
}))