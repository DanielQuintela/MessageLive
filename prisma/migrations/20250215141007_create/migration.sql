-- CreateTable
CREATE TABLE "Room" (
    "id_room" TEXT NOT NULL,
    "name_room" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "user_connected" TEXT,
    "cretedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id_room")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_creator_fkey" FOREIGN KEY ("creator") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
