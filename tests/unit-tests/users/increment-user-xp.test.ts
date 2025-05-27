import { InMemoryUsersRepository } from "../../../src/repositories/in-memory/in-memory-users-repository";
import { UserService } from "../../../src/services/user-services";

let usersRepository: InMemoryUsersRepository;
let service: UserService;

describe("Increment User XP Use Case", () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        service = new UserService(usersRepository);
    });

    it("should be able to increment user XP", async () => {
        const createdUser = await usersRepository.create({
            name: "Bruno Nunes",
            username: "brunonunes",
            email: "bruno@email.com",
            password: "admin123",
            semanalXP: 100,
            totalXP: 100,
        });

        await service.incrementUserXp(createdUser.id, 50);

        const updatedUser = await usersRepository.findById(createdUser.id);

        expect(updatedUser?.semanalXP).toEqual(150);
        expect(updatedUser?.totalXP).toEqual(150);
    });

    it("should not be able to increment user XP with non-existing user", async () => {
        await expect(
            service.incrementUserXp("non-existing-id", 50)
        ).rejects.toThrow("Resource not found.");
    });

    it("should not be able to increment user XP with invalid amount", async () => {
        const createdUser = await usersRepository.create({
            name: "Bruno Nunes",
            username: "brunonunes",
            email: "bruno@email.com",
            password: "admin123",
        });

        await expect(
            service.incrementUserXp(createdUser.id, -50)
        ).rejects.toThrow("Bad request.");
    });
});
