import { Explanation, Prisma } from "../generated/prisma";

export interface CreateExplanationType {
  title: string;
  content: Prisma.InputJsonValue;
  topicId: string;
};

export interface IExplanationRepository {
    findById(id: string): Promise<Explanation | null>;
    list(): Promise<Explanation[]>;
    listByTopic(topicId: string): Promise<Explanation[]>;
    create(data: CreateExplanationType): Promise<Explanation>;
    update(id: string, data: CreateExplanationType): Promise<Explanation>;
    delete(id: string): Promise<Explanation>;
}