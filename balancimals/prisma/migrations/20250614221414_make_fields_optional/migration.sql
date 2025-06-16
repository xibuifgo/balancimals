-- DropForeignKey
ALTER TABLE "patient" DROP CONSTRAINT "patient_sharecode_fkey";

-- AlterTable
ALTER TABLE "patient" ALTER COLUMN "difficulty" SET DEFAULT 'easy',
ALTER COLUMN "sharecode" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "patient" ADD CONSTRAINT "patient_sharecode_fkey" FOREIGN KEY ("sharecode") REFERENCES "doctor"("sharecode") ON DELETE SET NULL ON UPDATE CASCADE;
