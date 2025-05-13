import { InMemoryUsersRepository } from "../../src/repositories/in-memory/in-memory-users-repository";
import { UserService } from "../../src/services/user-services";

let usersRepository: InMemoryUsersRepository;
let service: UserService;

describe("Delete User Profile Use Case", () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        service = new UserService(usersRepository);
    });

    it("should be able to delete a user account", async () => {
        const createdUser = await usersRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
        });
        const user = await service.deleteUser(createdUser.id);
        expect(user.id).toEqual(createdUser.id);
    });

    it("should not be able to delete user with wrong id", async () => {
        await usersRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
        });
        expect(async () => {
            await service.deleteUser("wrong-id");
        }).rejects.toThrow("Resource not found.");
    });
});
