/*
  Warnings:

  - Added the required column `amount` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Achievement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `achievement` ADD COLUMN `amount` INTEGER NOT NULL,
    ADD COLUMN `type` ENUM('PROGRESS', 'STREAK', 'FOLLOW', 'RANKING') NOT NULL;
