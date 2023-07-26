/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `Pictures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pictures` ADD COLUMN `url` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Products_name_key` ON `Products`(`name`);
