-- CreateTable
CREATE TABLE "patient" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "Age" TEXT,
    "MobileNo" TEXT,
    "Address" TEXT,
    "BloodGroup" TEXT,
    "BirthDate" TEXT,
    "Gender" TEXT,
    "MedicalHistory" TEXT,
    "Verified" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "patient_id_key" ON "patient"("id");

-- CreateIndex
CREATE UNIQUE INDEX "patient_email_key" ON "patient"("email");
