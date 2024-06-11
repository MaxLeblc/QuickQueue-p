import * as UserSchema from "../../../db/schemas/userSchema"
import { drizzle } from "drizzle-orm"
import { IUser } from "../../../types/IUser"
import { IUserRepository } from "../user.repository"

const db = drizzle(client, {schema:{UserSchema}})

export class UserDrizzleRepository implements IUserRepository {
    async createUser(user: IUser): Promise<IUser> {
        return await UserSchema.insert(user)
    }
}