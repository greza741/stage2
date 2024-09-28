/*
  Warnings:

  - You are about to drop the column `bgimage` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "bgimage",
ADD COLUMN     "bgImage" TEXT DEFAULT 'https://c.files.bbci.co.uk/5DFC/production/_84606042_satan-promo.jpg';
