import request from "supertest";
import app from "../../../../src/app";

describe("[e2e] Get User By Username Route - Validation", () => {
    it("should not be able to get user by invalid username", async () => {
        const response = await request(app).get("/users/bruno08nunes");

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
    });
});