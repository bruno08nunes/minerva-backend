import request from "supertest";
import app from "../../../../src/app";
import { signJwt } from "../../../../src/utils/jwt";

describe("[e2e] Increment User XP Route - Not Found", () => {
    it("should not be able to increment xp for and not found user", async () => {
        const token = signJwt({ id: "123", role: "USER" });

        const response = await request(app)
            .put(`/users/xp`)
            .send({
                amount: 200,
            })
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
    });
});
