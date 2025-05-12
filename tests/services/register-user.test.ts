import { comparePassword } from "../../src/utils/crypto";
import { InMemoryUsersRepository } from "../../src/repositories/in-memory/in-memory-users-repository";
import { UserService } from "../../src/services/user-services";
import UserAlreadyExistsError from "../../src/utils/errors/user-already-exists";

let usersRepository: InMemoryUsersRepository;
let service: UserService;

describe("Register Use Case", () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository();
        service = new UserService(usersRepository);
    });

    it("should be able to register", async () => {
        const createdUser = await service.createUser({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
        });
        
        expect(createdUser.id).toEqual(expect.any(String));
    });
    
    it("should not be able to register with same email", async () => {
        await service.createUser({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
        });

        await expect(
            service.createUser({
                name: "Bruno Nunes",
                email: "bruno@email.com",
                password: "admin123",
            })
        ).rejects.toBeInstanceOf(UserAlreadyExistsError);
    });

    it("should hash password upon registration", async () => {
        const createdUser = await service.createUser({
            name: "Bruno Nunes",
            email: "bruno@email.com",
            password: "admin123",
        });

        const isPasswordCorrect = await comparePassword("admin123", createdUser.password);
        
        expect(isPasswordCorrect).toBe(true);
    });
});
