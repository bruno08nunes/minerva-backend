import { InMemoryFollowRepository } from "../../../src/repositories/in-memory/in-memory-follow-repository";
import { FollowServices } from "../../../src/services/follow-services";

let followRepository: InMemoryFollowRepository;
let service: FollowServices;

describe("Create Follow Use Case", () => {
    beforeEach(() => {
        followRepository = new InMemoryFollowRepository();
        service = new FollowServices(followRepository);
    });

    it("should be able to create a follow", async () => {
        const followerId = "follower-id";
        const followingId = "following-id";

        const follow = await service.createFollow(followerId, followingId);

        expect(follow).not.toBeNull();
        expect(follow.followerId).toEqual(followerId);
    });
});