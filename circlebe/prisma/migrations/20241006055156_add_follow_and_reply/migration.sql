/*
  Warnings:

  - You are about to drop the column `userId` on the `threads` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `threads` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "like" DROP CONSTRAINT "like_threadId_fkey";

-- DropForeignKey
ALTER TABLE "like" DROP CONSTRAINT "like_userId_fkey";

-- DropForeignKey
ALTER TABLE "threads" DROP CONSTRAINT "threads_userId_fkey";

-- AlterTable
ALTER TABLE "threads" DROP COLUMN "userId",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "follow" (
    "id" SERIAL NOT NULL,
    "followerId" INTEGER NOT NULL,
    "followingId" INTEGER NOT NULL,
    "isFollowing" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "follow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reply" (
    "id" SERIAL NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "likesCount" INTEGER DEFAULT 0,
    "repliesCount" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "threadId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "reply_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "follow_followerId_followingId_key" ON "follow"("followerId", "followingId");

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reply" ADD CONSTRAINT "reply_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "threads"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reply" ADD CONSTRAINT "reply_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like" ADD CONSTRAINT "like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "like" ADD CONSTRAINT "like_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "threads"("id") ON DELETE CASCADE ON UPDATE CASCADE;
