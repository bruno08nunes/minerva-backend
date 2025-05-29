import request from "supertest";
import app from "../../../../src/app";
import { signJwt } from "../../../../src/utils/jwt";

describe("[e2e] Update User Streak Route - Not Found", () => {
    it("should not be able to update user streak with invalid id", async () => {
        const token = signJwt({ id: "invalid-id", role: "USER" });

        const response = await request(app)
            .patch("/users/streak")
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
    });
});
