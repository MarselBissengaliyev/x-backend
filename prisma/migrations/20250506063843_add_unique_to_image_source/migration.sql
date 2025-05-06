/*
  Warnings:

  - A unique constraint covering the columns `[imageSource]` on the table `ScheduledPost` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ScheduledPost_imageSource_key" ON "ScheduledPost"("imageSource");
