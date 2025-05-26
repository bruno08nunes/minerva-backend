import { InMemoryFollowRepository } from "../../../src/repositories/in-memory/in-memory-follow-repository";
import { FollowServices } from "../../../src/services/follow-services";

let followRepository: InMemoryFollowRepository;
let service: FollowServices;

describe("Get Following Use Case", () => {
    beforeEach(() => {
        followRepository = new InMemoryFollowRepository();
        service = new FollowServices(followRepository);
    });

    it("should be able to get following", async () => {
        const followerId = "follower-id";
        const followingId = "following-id";

        await followRepository.createFollow(followerId, followingId);

        const following = await service.getFollowing(followerId);

        expect(following).toHaveLength(1);
        expect(following[0].followerId).toEqual(followerId);
    });
});