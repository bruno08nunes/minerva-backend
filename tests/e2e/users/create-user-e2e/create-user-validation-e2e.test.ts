import request from "supertest";
import app from "../../../../src/app";

describe("[e2e] Register User Route - Validation", () => {
    it("should validate invalid data", async () => {
        const response = await request(app).post("/register").send({
            name: "",
            email: "not-an-email",
            password: "123",
            username: "in*valid!",
        });

        expect(response.status).toBe(400);
    });
});
