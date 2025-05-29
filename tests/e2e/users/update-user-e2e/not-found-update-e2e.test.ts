import request from "supertest";
import app from "../../../../src/app";

describe("[e2e] Update User Route - Not Found", () => {
    it("should not be able to update user profile with invalid id", async () => {
        const response = await request(app).put(`/users/invalid-id`).send({
            username: "bruno",
        });

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
    });
});
