import request from "supertest";
import app from "../../../../src/app";

describe("[e2e] Register User Route - Duplicate Username", () => {
    it("should not allow duplicate username", async () => {
        await request(app).post("/register").send({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        const response = await request(app).post("/register").send({
            name: "Bruno Nunes",
            email: "bruno2@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

        expect(response.status).toBe(409);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toMatch("User already exists.");
    });
});
