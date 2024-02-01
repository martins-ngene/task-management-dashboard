/*
  Warnings:

  - You are about to drop the column `dueDate` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `isCompleted` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `isInProgress` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `isNew` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - Added the required column `deadline` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "dueDate",
DROP COLUMN "isCompleted",
DROP COLUMN "isInProgress",
DROP COLUMN "isNew",
ADD COLUMN     "deadline" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userId";
