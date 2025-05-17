import { Icon } from "../generated/prisma";

export interface IIconsRepository {
    create(data: Icon): Promise<Icon>;
    delete(id: string): Promise<Icon>;
    list(): Promise<Icon[]>;
}