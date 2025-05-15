import { InMemoryUsersRepository } from "../../../src/repositories/in-memory/in-memory-users-repository";
import { UserService } from "../../../src/services/user-services";

let usersRepository: InMemoryUsersRepository;
let service: UserService;

describe("Update User Profile Use Case", () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        service = new UserService(usersRepository);
    });

    it("should be able to update a user profile", async () => {
        const createdUser = await usersRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
        });
        const updatedUser = await service.updateUserProfile(createdUser.id, {
            name: "Bruno Nunes Updated",
            profilePictureId: "new-profile-picture-id",
        });
        expect(updatedUser.name).toEqual("Bruno Nunes Updated");
    });

    it("should not be able to update user with wrong id", async () => {
        await usersRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
        });

        expect(async () => {
            await service.updateUserProfile("wrong-id", {
                name: "Bruno Nunes Updated",
                profilePictureId: "new-profile-picture-id",
            });
        }).rejects.toThrow("Resource not found.");
    });

    it("should not be able to update user with invalid data", async () => {
        const createdUser = await usersRepository.create({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
        });

        expect(async () => {
            await service.updateUserProfile(createdUser.id, {}); // Arrumar o teste pq tem como atualizar com dados vazios
        }).rejects.toThrow("Bad request.");
    });
});
