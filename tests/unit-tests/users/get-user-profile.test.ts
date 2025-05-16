import { InMemoryUsersRepository } from "../../../src/repositories/in-memory/in-memory-users-repository";
import { UserService } from "../../../src/services/user-services";

let usersRepository: InMemoryUsersRepository;
let service: UserService;

describe("Get User Profile Use Case", () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        service = new UserService(usersRepository);
    });

    it("should be able to get user profile by id", async () => {
        const createdUser = await usersRepository.create({
            name: "Bruno Nunes",
            username: "brunonunes",
            email: "bruno@email.com",
            password: "admin123",
        });

        const user = await service.getUserById(createdUser.id);

        expect(user.name).toEqual("Bruno Nunes");
    });

    it("should not be able to get user profile with wrong id", async () => {
        await expect(service.getUserById("non-existing-id")).rejects.toThrow(
            "Resource not found."
        );
    });

    it("should be able to get user profile by username", async () => {
        const createdUser = await usersRepository.create({
            name: "Bruno Nunes",
            username: "brunonunes",
            email: "bruno@email.com",
            password: "admin123",
        });

        const user = await service.getUserByUsername(createdUser.username);

        expect(user.name).toEqual("Bruno Nunes");
    });

    it ("should not be able to get user profile with wrong username", async () => {
        await expect(service.getUserByUsername("non-existing-username")).rejects.toThrow(
            "Resource not found."
        );
    });
});
