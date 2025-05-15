import { encryptPassword } from "../../../src/utils/crypto";
import { InMemoryUsersRepository } from "../../../src/repositories/in-memory/in-memory-users-repository";
import { UserService } from "../../../src/services/user-services";
import InvalidCredentialsError from "../../../src/utils/errors/invalid-credentials";

let usersRepository: InMemoryUsersRepository;
let service: UserService;

describe("Get User Profile Use Case", () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        service = new UserService(usersRepository);
    });

    it("should be able to login", async () => {
        await usersRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: await encryptPassword("admin123"),
        });

        const user = await service.login("bruno@email.com", "admin123");

        expect(user.id).toEqual(expect.any(String));
    });

    it("should not be able to login with wrong email", async () => {
        await expect(
            service.login("bruno@email.com", "admin123")
        ).rejects.toBeInstanceOf(InvalidCredentialsError);
    });

    it("should not be able to login with wrong password", async () => {
        await usersRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: await encryptPassword("admin123"),
        });

        await expect(
            service.login("bruno@email.com", "wrong-password")
        ).rejects.toBeInstanceOf(InvalidCredentialsError);
    });
});
