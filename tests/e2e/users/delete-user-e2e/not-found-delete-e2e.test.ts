import request from "supertest";
import app from "../../../../src/app";
import { signJwt } from "../../../../src/utils/jwt";

describe("[e2e] Delete User Route - Not Found", () => {
    it("should not be able to delete user profile with invalid id", async () => {
        const token = signJwt({ id: "123", role: "USER" });
        const response = await request(app)
            .delete(`/users`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(404);
        expect(response.body.success).toBe(false);
    });
});
