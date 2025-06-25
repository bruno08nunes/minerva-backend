import request from "supertest";
import app from "../../../../src/app";
import { PrismaUsersRepository } from "../../../../src/repositories/prisma/prisma-users-repository";
import { signJwt } from "../../../../src/utils/jwt";

const userRepository = new PrismaUsersRepository();

describe("[e2e] Create Exercise Route", () => {
    it("should not be able to create with not being admin", async () => {
        const { id: userId, role: userRole } = await userRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        const token = signJwt({ id: userId, role: userRole });

        const response = await request(app)
            .post(`/exercises`)
            .set("Authorization", `Bearer ${token}`)
            .send({});
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Access denied: Admins only");
    });

    it("should not be able to create with invalid token", async () => {
        const token = "invalid-token";

        const response = await request(app)
            .post(`/exercises`)
            .set("Authorization", `Bearer ${token}`)
            .send({});
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Invalid token");
    });
    
    it("should not be able to create without token", async () => {
        const response = await request(app)
            .post(`/exercises`)
            .send({});
        
        expect(response.status).toBe(401);
        expect(response.body.message).toBe("Token not provided");
    });
});
