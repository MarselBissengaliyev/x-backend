/*
  Warnings:

  - You are about to drop the column `postId` on the `ScheduledPost` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ScheduledPost" DROP CONSTRAINT "ScheduledPost_postId_fkey";

-- AlterTable
ALTER TABLE "ScheduledPost" DROP COLUMN "postId";
