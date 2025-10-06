-- DropForeignKey
ALTER TABLE `exercise` DROP FOREIGN KEY `Exercise_lessonId_fkey`;

-- DropIndex
DROP INDEX `Exercise_lessonId_fkey` ON `exercise`;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
