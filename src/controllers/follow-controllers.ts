import { Request, Response } from "express";
import { PrismaFollowRepository } from "../repositories/prisma/prisma-follow-repository";
import { FollowServices } from "../services/follow-services";

const service = new FollowServices(new PrismaFollowRepository());

export async function getFollowersController(req: Request, res: Response) {
    const userId = req.params.id;

    const followers = await service.getFollowers(userId);
    res.json({
        data: followers,
        message: "Followers retrieved successfully",
        success: true,
    });
}

export async function getFollowingController(req: Request, res: Response) {
    const userId = req.params.id;

    const following = await service.getFollowing(userId);
    res.json({
        data: following,
        message: "Followers retrieved successfully",
        success: true,
    });
}

export async function createFollowController(req: Request, res: Response) {
    const { followerId, followingId } = req.body;

    const follow = await service.createFollow(followerId, followingId);

    res.json({
        data: follow,
        message: "Follow created successfully",
        success: true,
    });
}

export async function deleteFollowController(req: Request, res: Response) {
    const { followerId, followingId } = req.body;

    const follow = await service.deleteFollow(followerId, followingId);

    res.json({
        data: follow,
        message: "Follow deleted successfully",
        success: true,
    });
}