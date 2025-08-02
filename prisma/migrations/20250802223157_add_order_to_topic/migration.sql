/*
  Warnings:

  - Added the required column `order` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `topic` ADD COLUMN `order` INTEGER NOT NULL;
