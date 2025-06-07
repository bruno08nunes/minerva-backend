import { Theme } from "../generated/prisma";

export interface IThemesRepository {
    findById(id: string): Promise<Theme | null>;
    findBySlug(slug: string): Promise<Theme | null>;
    create(theme: { name: string, iconId: string, description: string, slug: string }): Promise<Theme>;
    update(id: string, theme: { name?: string, iconId?: string, description?: string, slug?: string }): Promise<Theme>;
    delete(id: string): Promise<Theme>;
    list(): Promise<Theme[]>;
}
