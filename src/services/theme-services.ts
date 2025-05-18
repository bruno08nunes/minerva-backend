import { IThemesRepository } from "../repositories/themes-repository";
import BadRequestError from "../utils/errors/bad-request-error";
import NotFoundError from "../utils/errors/not-found";

export class ThemeService {
    constructor(private themeRepository: IThemesRepository) {}

    async createTheme(data: { name: string, iconId: string, description: string }) {
        return this.themeRepository.create(data);
    }

    async updateTheme(
        id: string,
        data: { name?: string; iconId?: string; description?: string }
    ) {
        if (!data.name && !data.description && !data.iconId) {
            throw new BadRequestError();
        }

        const theme = await this.themeRepository.findById(id);

        if (!theme) {
            throw new NotFoundError();
        }

        const updatedTheme = await this.themeRepository.update(id, data);

        return updatedTheme;
    }

    async deleteTheme(id: string) {
        const theme = await this.themeRepository.findById(id);

        if (!theme) {
            throw new NotFoundError();
        }

        const deletedTheme = await this.themeRepository.delete(id);

        return deletedTheme;
    }

    async listThemes() {
        return this.themeRepository.list();
    }
}
