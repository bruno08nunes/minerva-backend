import { InMemoryUsersRepository } from "../../../src/repositories/in-memory/in-memory-users-repository";
import { UserService } from "../../../src/services/user-services";

let usersRepository: InMemoryUsersRepository;
let service: UserService;

describe("Reset User Streak Use Case", () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        service = new UserService(usersRepository);
    });

    it("should be able to reset user streak", async () => {
        const createdUser = await usersRepository.create({
            name: "Bruno Nunes",
            username: "brunonunes",
            email: "bruno@email.com",
            password: "admin123",
            streak: 5,
        });

        await service.resetUserStreak(createdUser.id);

        const updatedUser = await usersRepository.findById(createdUser.id);

        expect(updatedUser?.streak).toEqual(0);
    });

    it("should not be able to reset user streak with non-existing user", async () => {
        await expect(service.resetUserStreak("non-existing-id")).rejects.toThrow(
            "Resource not found."
        );
    });
});
