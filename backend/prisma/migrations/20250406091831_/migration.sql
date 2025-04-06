-- CreateTable
CREATE TABLE "BookRoom" (
    "id" TEXT NOT NULL,
    "PatientName" TEXT NOT NULL,
    "RoomType" TEXT NOT NULL,
    "AdmitDate" TEXT NOT NULL,

    CONSTRAINT "BookRoom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BookRoom_id_key" ON "BookRoom"("id");
