-- CreateTable
CREATE TABLE "users_factions" (
    "id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "faction_id" INTEGER NOT NULL,
    "reputation" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_factions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "users_factions_faction_id_idx" ON "users_factions"("faction_id");

-- CreateIndex
CREATE INDEX "users_factions_user_id_idx" ON "users_factions"("user_id");

-- AddForeignKey
ALTER TABLE "users_factions" ADD CONSTRAINT "users_factions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_factions" ADD CONSTRAINT "users_factions_faction_id_fkey" FOREIGN KEY ("faction_id") REFERENCES "factions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
