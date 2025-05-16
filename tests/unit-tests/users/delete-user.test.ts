import { InMemoryUsersRepository } from "../../../src/repositories/in-memory/in-memory-users-repository";
import { UserService } from "../../../src/services/user-services";

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
            username: "brunonunes",
            email: "bruno@email.com",
            password: "admin123",
        });

        const deletedUser = await service.deleteUser(createdUser.id);

        const user = await usersRepository.findById(createdUser.id);

        expect(deletedUser.id).toEqual(createdUser.id);
        expect(user).toBeNull();
    });

    it("should not be able to delete user with wrong id", async () => {
        expect(async () => {
            await service.deleteUser("wrong-id");
        }).rejects.toThrow("Resource not found.");
    });
});
