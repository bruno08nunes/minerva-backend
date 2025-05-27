import { InMemoryUsersRepository } from "../../../src/repositories/in-memory/in-memory-users-repository";
import { UserService } from "../../../src/services/user-services";

let usersRepository: InMemoryUsersRepository;
let service: UserService;

describe("Update User Streak Use Case", () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        service = new UserService(usersRepository);
    });
    
    it("should be able to update user streak", async () => {
        const createdUser = await usersRepository.create({
            name: "Bruno Nunes",
            username: "brunonunes",
            email: "bruno@email.com",
            password: "admin123",
        });

        await service.updateUserStreak(createdUser.id);

        const updatedUser = await usersRepository.findById(createdUser.id);

        expect(updatedUser?.streak).toEqual(1);
    });

    it("should not be able to update user streak with non-existing user", async () => {
        await expect(service.updateUserStreak("non-existing-id")).rejects.toThrow(
            "Resource not found."
        );
    });
});
