/*
  Warnings:

  - You are about to drop the column `statement` on the `exercise` table. All the data in the column will be lost.
  - Added the required column `content` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `exercise` DROP COLUMN `statement`,
    ADD COLUMN `content` JSON NOT NULL;
