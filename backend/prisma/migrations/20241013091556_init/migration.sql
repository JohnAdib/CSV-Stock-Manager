-- CreateTable
CREATE TABLE "Inventory" (
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
CREATE UNIQUE INDEX "Inventory_sku_key" ON "Inventory"("sku");

-- CreateIndex
CREATE INDEX "Inventory_quantity_idx" ON "Inventory"("quantity");

-- CreateIndex
CREATE INDEX "Inventory_store_idx" ON "Inventory"("store");

-- CreateIndex
CREATE INDEX "Inventory_quantity_store_idx" ON "Inventory"("quantity", "store");

-- CreateIndex
CREATE INDEX "CsvFileLog_uploadedAt_idx" ON "CsvFileLog"("uploadedAt");

-- CreateIndex
CREATE INDEX "CsvFileLog_status_idx" ON "CsvFileLog"("status");
