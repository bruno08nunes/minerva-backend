import { InMemoryUsersRepository } from "../../../src/repositories/in-memory/in-memory-users-repository";
import { UserService } from "../../../src/services/user-services";

let usersRepository: InMemoryUsersRepository;
let service: UserService;

describe("List User Ranking Use Case", () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        service = new UserService(usersRepository);
    });

    it("should be able to list user ranking", async () => {
        await usersRepository.create({
            name: "Bruno Nunes",
            username: "bruno08nunes",
            email: "bruno@email.com",
            password: "admin123",
        });

        const users = await service.listRanking(10);

        expect(users).toHaveLength(1);
        expect(users[0]?.username).toEqual("bruno08nunes");
    });

    it("should return an empty array if no users are found", async () => {
        const users = await service.listRanking(10);

        expect(users).toHaveLength(0);
    });
});
