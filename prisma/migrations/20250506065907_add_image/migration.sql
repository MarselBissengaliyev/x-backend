-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "isUsed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
