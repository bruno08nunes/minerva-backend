import request from "supertest";
import app from "../../../../src/app";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Update Theme Route", () => {
    it("should not be able to update a theme without being a ADMIN", async () => {
        const updatedThemeData = {
            name: "Updated Test Theme",
            description: "This is an updated test theme",
        };

        const { id, role } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        const token = signJwt({ id: id, role: role });

        const response = await request(app)
            .put(`/themes/theme`)
            .set("Authorization", `Bearer ${token}`)
            .send(updatedThemeData);

        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Access denied: Admins only");
    });

    it("should not be able to update a theme without being logged", async () => {
        const updatedThemeData = {
            name: "Updated Test Theme",
            description: "This is an updated test theme",
        };

        const response = await request(app)
            .put(`/themes/"theme`)
            .send(updatedThemeData);

        expect(response.status).toBe(401);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Token not provided");
    });

    it("should not be able to update a theme with invalid token", async () => {
        const updatedThemeData = {
            name: "Updated Test Theme",
            description: "This is an updated test theme"
        };

        const token = "invalid-token";

        const response = await request(app)
            .put(`/themes/theme`)
            .set("Authorization", `Bearer ${token}`)
            .send(updatedThemeData);

        expect(response.status).toBe(403);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Invalid token");
    });
});
