import { Topic } from "../generated/prisma";

export interface ITopicRepository {
    findById(id: string): Promise<Topic | null>;
    findBySlug(slug: string): Promise<Topic | null>;
    create(topic: { name: string, iconId: string, description: string, slug: string }): Promise<Topic>;
    update(id: string, topic: { name?: string, iconId?: string, description?: string, slug?: string }): Promise<Topic>;
    delete(id: string): Promise<Topic>;
    list(): Promise<Topic[]>;
}
