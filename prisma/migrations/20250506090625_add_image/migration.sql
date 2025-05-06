/*
  Warnings:

  - You are about to drop the column `imageId` on the `ScheduledPost` table. All the data in the column will be lost.
  - Added the required column `scheduledPostId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ScheduledPost" DROP CONSTRAINT "ScheduledPost_imageId_fkey";

-- DropIndex
DROP INDEX "ScheduledPost_imageId_key";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "scheduledPostId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ScheduledPost" DROP COLUMN "imageId";

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_scheduledPostId_fkey" FOREIGN KEY ("scheduledPostId") REFERENCES "ScheduledPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
