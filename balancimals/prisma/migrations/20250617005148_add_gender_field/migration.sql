/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `doctor` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "patient" ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'male';

-- CreateIndex
CREATE UNIQUE INDEX "doctor_username_key" ON "doctor"("username");
