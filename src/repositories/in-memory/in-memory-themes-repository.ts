import { randomUUID } from 'node:crypto';
import { Theme, Prisma } from "../../generated/prisma";
import { IThemesRepository } from "../themes-repository";

export class InMemoryThemesRepository implements IThemesRepository {
    private themes: Theme[] = [];

    async findById(id: string): Promise<Theme | null> {
        return this.themes.find((theme) => theme.id === id) || null;
    }

    async create(theme: { name: string, iconId: string, description: string }) {
        const { name, description, iconId } = theme;

        const newTheme: Theme = {
            id: randomUUID(),
            name,
            description,
            iconId,
        };

        this.themes.push(newTheme);
        return newTheme;
    }

    async update(
        id: string,
        data: { name?: string; iconId?: string; description?: string }
    ) {
        const themeIndex = this.themes.findIndex((theme) => theme.id === id);
        const theme = this.themes[themeIndex];

        this.themes[themeIndex] = {
            ...theme,
            ...data,
        } as Theme;

        return this.themes[themeIndex];
    }

    async delete(id: string): Promise<Theme> {
        const index = this.themes.findIndex((theme) => theme.id === id);
        const [deletedTheme] = this.themes.splice(index, 1);
        return deletedTheme;
    }

    async list(): Promise<Theme[]> {
        return this.themes;
    }
}
