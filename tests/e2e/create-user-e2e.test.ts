import request from "supertest";
import app from "../../src/app";

test("[e2e] CreateLesson", async () => {
    const response = await request(app)
        .post("/register")
        .send({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
            username: "bruno08nunes",
        });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
});
