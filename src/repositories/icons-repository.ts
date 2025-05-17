import { Icon, Prisma } from "../generated/prisma";

export interface IIconsRepository {
    findById(id: string): Promise<Icon | null>;
    create(data: Prisma.IconCreateInput): Promise<Icon>;
    delete(id: string): Promise<Icon>;
    list(): Promise<Icon[]>;
}