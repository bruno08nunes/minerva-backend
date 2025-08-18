import { Prisma } from "../generated/prisma";
import { IIconsRepository } from "../repositories/icons-repository";
import NotFoundError from "../utils/errors/not-found";

export class IconServices {
    constructor(private iconsRepository: IIconsRepository) {}

    async getIconById(id: string) {
        const icon = await this.iconsRepository.findById(id);

        if (!icon) {
            throw new NotFoundError();
        }

        return icon;
    }

    async createIcon(data: Prisma.IconCreateInput) {
        return this.iconsRepository.create({ url: data.url });
    }

    async editIcon(id: string, data: { url?: string; description?: string }) {
        return this.iconsRepository.edit(id, data);
    }

    async deleteIcon(id: string) {
        const icon = await this.iconsRepository.findById(id);

        if (!icon) {
            throw new NotFoundError();
        }

        const deletedIcon = await this.iconsRepository.delete(id);

        return deletedIcon;
    }

    async listIcons() {
        return this.iconsRepository.list();
    }
}
