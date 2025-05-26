import { InMemoryFollowRepository } from "../../../src/repositories/in-memory/in-memory-follow-repository";
import { FollowServices } from "../../../src/services/follow-services";

let followRepository: InMemoryFollowRepository;
let service: FollowServices;

describe("Delete Follow Use Case", () => {
    beforeEach(() => {
        followRepository = new InMemoryFollowRepository();
        service = new FollowServices(followRepository);
    });

    it("should be able to delete a follow", async () => {
        const followerId = "follower-id";
        const followingId = "following-id";

        await followRepository.createFollow(followerId, followingId);

        const deletedFollow = await service.deleteFollow(followerId, followingId);

        const exists = await followRepository.hasFollower(followerId, followingId);

        expect(deletedFollow).not.toBeNull();
        expect(deletedFollow.followerId).toEqual(followerId);
        expect(exists).toBe(false);
    });
});