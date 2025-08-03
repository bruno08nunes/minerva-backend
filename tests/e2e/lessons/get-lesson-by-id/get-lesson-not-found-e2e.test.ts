import request from "supertest";
import app from "../../../../src/app";

describe("[e2e] Get Lesson Route", () => {
    it("should not be able to get a lesson with an invalid ID", async () => {
        const response = await request(app).get(
            "/lessons/99999999-9999-9999-9999-999999999999"
        );

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toBe("Resource not found.");
    });
});
