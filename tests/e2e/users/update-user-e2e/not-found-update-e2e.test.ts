import request from "supertest";
import app from "../../../../src/app";
import { signJwt } from "../../../../src/utils/jwt";

describe("[e2e] Update User Route - Not Found", () => {
    it("should not be able to update user profile with invalid id", async () => {
        const token = signJwt({ id: "123", role: "USER" });
        const response = await request(app)
            .put(`/users`)
            .send({
                username: "bruno",
            })
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
    });
});
