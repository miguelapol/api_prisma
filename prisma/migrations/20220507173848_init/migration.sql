-- CreateTable
CREATE TABLE "Commander" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" TEXT NOT NULL DEFAULT E'en',
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" VARCHAR(255) NOT NULL,
    "ashCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Commander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Commander_name_key" ON "Commander"("name");
