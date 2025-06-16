-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('easy', 'medium', 'hard');

-- CreateTable
CREATE TABLE "patient" (
    "id" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "height" DECIMAL(65,30) NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sharecode" TEXT NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor" (
    "id" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sharecode" TEXT NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "poses" (
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "wake_th" DECIMAL(65,30) NOT NULL DEFAULT 0.6,
    "anger_th" DECIMAL(65,30) NOT NULL DEFAULT 6,

    CONSTRAINT "poses_pkey" PRIMARY KEY ("link")
);

-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "poses" JSONB NOT NULL,
    "patient_id" TEXT NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posescores" (
    "game_id" TEXT NOT NULL,
    "img_link" TEXT NOT NULL,
    "score" BIGINT NOT NULL,
    "DATA" JSONB NOT NULL,

    CONSTRAINT "posescores_pkey" PRIMARY KEY ("img_link","game_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "patient_email_key" ON "patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_email_key" ON "doctor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_sharecode_key" ON "doctor"("sharecode");

-- CreateIndex
CREATE UNIQUE INDEX "poses_name_key" ON "poses"("name");

-- AddForeignKey
ALTER TABLE "patient" ADD CONSTRAINT "patient_sharecode_fkey" FOREIGN KEY ("sharecode") REFERENCES "doctor"("sharecode") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posescores" ADD CONSTRAINT "posescores_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posescores" ADD CONSTRAINT "posescores_img_link_fkey" FOREIGN KEY ("img_link") REFERENCES "poses"("link") ON DELETE RESTRICT ON UPDATE CASCADE;
