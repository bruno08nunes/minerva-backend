/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Theme` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Topic` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Theme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `theme` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `topic` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Theme_slug_key` ON `Theme`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `Topic_slug_key` ON `Topic`(`slug`);
