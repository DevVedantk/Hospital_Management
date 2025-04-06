-- CreateTable
CREATE TABLE "otpmodel" (
    "id" TEXT NOT NULL,
    "otp" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "otpmodel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "otpmodel_id_key" ON "otpmodel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "otpmodel_otp_key" ON "otpmodel"("otp");

-- CreateIndex
CREATE UNIQUE INDEX "otpmodel_email_key" ON "otpmodel"("email");
