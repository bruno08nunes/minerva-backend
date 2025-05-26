import { InMemoryFollowRepository } from "../../../src/repositories/in-memory/in-memory-follow-repository";
import { FollowServices } from "../../../src/services/follow-services";

let followRepository: InMemoryFollowRepository;
let service: FollowServices;

describe("Get Followers Use Case", () => {
    beforeEach(() => {
        followRepository = new InMemoryFollowRepository();
        service = new FollowServices(followRepository);
    });

    it("should be able to get followers", async () => {
        const followerId = "follower-id";
        const followingId = "following-id";

        await followRepository.createFollow(followerId, followingId);

        const followers = await service.getFollowers(followingId);

        expect(followers).toHaveLength(1);
        expect(followers[0].followerId).toEqual(followerId);
    });
});