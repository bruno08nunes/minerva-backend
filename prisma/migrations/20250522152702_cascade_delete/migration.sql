-- DropForeignKey
ALTER TABLE `choice` DROP FOREIGN KEY `Choice_exerciseId_fkey`;

-- DropForeignKey
ALTER TABLE `exercise` DROP FOREIGN KEY `Exercise_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `follow` DROP FOREIGN KEY `Follow_followerId_fkey`;

-- DropForeignKey
ALTER TABLE `follow` DROP FOREIGN KEY `Follow_followingId_fkey`;

-- DropForeignKey
ALTER TABLE `progress` DROP FOREIGN KEY `Progress_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `progress` DROP FOREIGN KEY `Progress_userId_fkey`;

-- DropForeignKey
ALTER TABLE `userachievement` DROP FOREIGN KEY `UserAchievement_achievementId_fkey`;

-- DropForeignKey
ALTER TABLE `userachievement` DROP FOREIGN KEY `UserAchievement_userId_fkey`;

-- DropIndex
DROP INDEX `Choice_exerciseId_fkey` ON `choice`;

-- DropIndex
DROP INDEX `Exercise_lessonId_fkey` ON `exercise`;

-- DropIndex
DROP INDEX `Follow_followingId_fkey` ON `follow`;

-- DropIndex
DROP INDEX `Progress_lessonId_fkey` ON `progress`;

-- DropIndex
DROP INDEX `UserAchievement_achievementId_fkey` ON `userachievement`;

-- DropIndex
DROP INDEX `UserAchievement_userId_fkey` ON `userachievement`;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Choice` ADD CONSTRAINT `Choice_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `Exercise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Progress` ADD CONSTRAINT `Progress_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Progress` ADD CONSTRAINT `Progress_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAchievement` ADD CONSTRAINT `UserAchievement_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAchievement` ADD CONSTRAINT `UserAchievement_achievementId_fkey` FOREIGN KEY (`achievementId`) REFERENCES `Achievement`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Follow` ADD CONSTRAINT `Follow_followerId_fkey` FOREIGN KEY (`followerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Follow` ADD CONSTRAINT `Follow_followingId_fkey` FOREIGN KEY (`followingId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
