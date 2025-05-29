import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import request from "supertest";
import app from "../../../../src/app";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Reset User Streak Route - Not Found", () => {
    it("should not be able to reset user streak with invalid id", async () => {
        const token = signJwt({ id: "invalid-id", role: "USER" });

        const response = await request(app)
            .patch("/users/streak/reset")
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
    });
});
