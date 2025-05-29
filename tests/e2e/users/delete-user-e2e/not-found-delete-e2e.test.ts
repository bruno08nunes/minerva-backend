import request from "supertest";
import app from "../../../../src/app";

describe("[e2e] Delete User Route - Not Found", () => {
    it("should not be able to delete user profile with invalid id", async () => {
        const response = await request(app).delete(`/users/invalid-id`);

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
    });
});
