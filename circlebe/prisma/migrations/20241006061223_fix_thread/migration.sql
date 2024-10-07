/*
  Warnings:

  - You are about to drop the column `userId` on the `threads` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `threads` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "threads" DROP CONSTRAINT "threads_userId_fkey";

-- AlterTable
ALTER TABLE "threads" DROP COLUMN "userId",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
