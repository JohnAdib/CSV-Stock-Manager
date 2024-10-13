-- CreateTable
CREATE TABLE "Stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quantity" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "description" TEXT,
    "store" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CsvFileLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fileName" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "uploadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalRecords" INTEGER NOT NULL,
    "successCount" INTEGER NOT NULL,
    "ignoredCount" INTEGER NOT NULL,
    "failedCount" INTEGER NOT NULL,
    "status" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_sku_key" ON "Stock"("sku");

-- CreateIndex
CREATE INDEX "Stock_quantity_idx" ON "Stock"("quantity");

-- CreateIndex
CREATE INDEX "Stock_store_idx" ON "Stock"("store");

-- CreateIndex
CREATE INDEX "Stock_quantity_store_idx" ON "Stock"("quantity", "store");

-- CreateIndex
CREATE INDEX "CsvFileLog_uploadedAt_idx" ON "CsvFileLog"("uploadedAt");

-- CreateIndex
CREATE INDEX "CsvFileLog_status_idx" ON "CsvFileLog"("status");
