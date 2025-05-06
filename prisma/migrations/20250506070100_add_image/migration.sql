/*
  Warnings:

  - You are about to drop the column `imageSource` on the `ScheduledPost` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imageId]` on the table `ScheduledPost` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ScheduledPost_imageSource_key";

-- AlterTable
ALTER TABLE "ScheduledPost" DROP COLUMN "imageSource",
ADD COLUMN     "imageId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledPost_imageId_key" ON "ScheduledPost"("imageId");

-- AddForeignKey
ALTER TABLE "ScheduledPost" ADD CONSTRAINT "ScheduledPost_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
