import { Progress } from "../generated/prisma";

export interface CreateProgressType {
    userId: string;
    lessonId: string;
    isCompleted: boolean;
}

export interface IProgressRepository {
    find(userId: string, lessonId: string): Promise<Progress | null>;
    create(data: CreateProgressType): Promise<Progress>;
    update(data: CreateProgressType): Promise<Progress>;
    progress(data: CreateProgressType): Promise<Progress>;
}