import request from "supertest";
import app from "../../../../src/app";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Update Theme Route", () => {
    it("should not be able to update a theme that does not exist", async () => {
        const updatedThemeData = {
            name: "Updated Test Theme",
            description: "This is an updated test theme",
        };

        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
            role: "ADMIN",
        });

        const token = signJwt({ id: id, role: role });

        const response = await request(app)
            .put("/themes/00000000-0000-0000-0000-000000000000")
            .set("Authorization", `Bearer ${token}`)
            .send(updatedThemeData);

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Resource not found.");
    });
});
