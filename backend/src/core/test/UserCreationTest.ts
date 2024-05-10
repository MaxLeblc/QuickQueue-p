import { UserFactory } from "../domains/User"
import bcrypt from "bcrypt"
import { v4 as uui } from "uuid"

describe("USER DOMAIN OBJECT", () => {

    it("should create a new User", () => {
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync("password", salt)
        const userProps = {
            id: uui(),
            email: "test@email",
            password: hashPassword,
        }

        const user = UserFactory.createUser(userProps)

        expect(user.id).toBeDefined()
        expect(user.email).toBe(userProps.email)
        expect(user.password).toBe(userProps.password)
    })
})