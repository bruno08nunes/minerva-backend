import request from "supertest";
import app from "../../../../src/app";

describe("[e2e] Increment User XP Route - Not Found", () => {
    it("should not be able to increment xp for and not found user", async () => {
        const response = await request(app).put(`/users/xp/invalid-id`).send({
            amount: 200
        });

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
    });
});
