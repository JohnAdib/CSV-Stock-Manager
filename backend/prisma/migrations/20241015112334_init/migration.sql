-- CreateTable
CREATE TABLE "Stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "description" TEXT,
    "store" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "csvFileId" INTEGER,
    CONSTRAINT "Stock_csvFileId_fkey" FOREIGN KEY ("csvFileId") REFERENCES "CsvFileLog" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CsvFileLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fileName" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "totalItems" INTEGER NOT NULL,
    "validItemsCount" INTEGER NOT NULL,
    "invalidItemsCount" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_sku_key" ON "Stock"("sku");

-- CreateIndex
CREATE INDEX "Stock_quantity_idx" ON "Stock"("quantity");

-- CreateIndex
CREATE INDEX "Stock_store_idx" ON "Stock"("store");

-- CreateIndex
CREATE INDEX "Stock_quantity_store_idx" ON "Stock"("quantity", "store");
