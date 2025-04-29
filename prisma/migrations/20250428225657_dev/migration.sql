-- CreateTable
CREATE TABLE "User" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nonceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Nonce" (
    "_id" TEXT NOT NULL,
    "nonce" TEXT NOT NULL,
    "burned" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Nonce_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_nonceId_key" ON "User"("nonceId");

-- CreateIndex
CREATE UNIQUE INDEX "Nonce_nonce_key" ON "Nonce"("nonce");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_nonceId_fkey" FOREIGN KEY ("nonceId") REFERENCES "Nonce"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
