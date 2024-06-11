import db from "../../../db/drizzle"
import { userSchema } from "../../../db/schemas"
import IUserRepository from "../user.repository"
import { IUser } from "../../../types/IUser"

export default class UserDrizzleRepository implements IUserRepository {
    public async findUserById(userId: string): Promise<any | null> {
        return await db
            .select()
            .from(userSchema)
            .where({ id: userId })
            .execute()
    }

    public async findUserByEmail(email: string): Promise<any | null> {
        return await db
            .select()
            .from(userSchema)
            .where({ email: email })
            .execute()
    }

    public async createUser(userData: IUser): Promise<any> {
        return await db
            .insert()
            .into(userSchema)
            .values(userData)
            .returning("*")
            .execute()
    }

    public async updateUser(userData: IUser): Promise<any> {
        const { id, ...updateData } = userData
        return await db
            .update(userSchema)
            .set(updateData)
            .where({ id: id })
            .returning("*")
            .execute()
    }

    public async deleteUser(userId: string): Promise<void> {
        return await db
            .delete()
            .from(userSchema)
            .where({ id: userId })
            .execute()
    }
}
