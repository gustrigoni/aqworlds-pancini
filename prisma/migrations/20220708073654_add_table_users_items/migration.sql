-- CreateTable
CREATE TABLE "users_items" (
    "id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "equipped" BOOLEAN NOT NULL DEFAULT true,
    "bank" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "id" ON "users_items"("id");

-- CreateIndex
CREATE INDEX "users_items_item_id_idx" ON "users_items"("item_id");

-- CreateIndex
CREATE INDEX "users_items_user_id_idx" ON "users_items"("user_id");

-- AddForeignKey
ALTER TABLE "users_items" ADD CONSTRAINT "users_items_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_items" ADD CONSTRAINT "users_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
