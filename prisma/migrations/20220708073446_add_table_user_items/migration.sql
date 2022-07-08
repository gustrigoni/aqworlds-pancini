-- CreateTable
CREATE TABLE "items" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "cost" INTEGER NOT NULL DEFAULT 0,
    "file" TEXT,
    "linkage" TEXT,
    "type" VARCHAR(15) NOT NULL,
    "equipment" VARCHAR(15) NOT NULL,
    "icon" VARCHAR(15) NOT NULL,
    "coins" BOOLEAN NOT NULL DEFAULT false,
    "upgrade" BOOLEAN NOT NULL DEFAULT false,
    "staff" BOOLEAN NOT NULL DEFAULT false,
    "temporary" BOOLEAN NOT NULL DEFAULT false,
    "house" BOOLEAN NOT NULL DEFAULT false,
    "enhacement_id" INTEGER NOT NULL DEFAULT 1,
    "faction_id" INTEGER,
    "class_id" INTEGER,
    "dps" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);
