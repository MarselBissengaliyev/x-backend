/*
  Warnings:

  - You are about to drop the `ContentSetting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContentSetting" DROP CONSTRAINT "ContentSetting_accountId_fkey";

-- AlterTable
ALTER TABLE "ScheduledPost" ADD COLUMN     "autoPost" BOOLEAN DEFAULT false,
ADD COLUMN     "cronExpression" TEXT,
ADD COLUMN     "imageSource" TEXT,
ADD COLUMN     "promotedOnly" BOOLEAN DEFAULT false,
ADD COLUMN     "promptHashtags" TEXT,
ADD COLUMN     "promptImage" TEXT,
ADD COLUMN     "promptText" TEXT,
ADD COLUMN     "targetUrl" TEXT,
ADD COLUMN     "useAiOnImage" BOOLEAN;

-- DropTable
DROP TABLE "ContentSetting";
