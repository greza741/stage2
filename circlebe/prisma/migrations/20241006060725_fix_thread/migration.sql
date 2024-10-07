/*
  Warnings:

  - You are about to drop the column `authorId` on the `threads` table. All the data in the column will be lost.
  - Added the required column `userId` to the `threads` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "threads" DROP CONSTRAINT "threads_authorId_fkey";

-- AlterTable
ALTER TABLE "threads" DROP COLUMN "authorId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "threads" ADD CONSTRAINT "threads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
