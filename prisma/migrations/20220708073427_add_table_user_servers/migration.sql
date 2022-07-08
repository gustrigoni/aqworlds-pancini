-- CreateTable
CREATE TABLE "servers" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "online" BOOLEAN NOT NULL DEFAULT true,
    "upgrade" BOOLEAN NOT NULL DEFAULT false,
    "chat" BOOLEAN NOT NULL DEFAULT true,
    "count" INTEGER NOT NULL DEFAULT 1,
    "max" INTEGER NOT NULL DEFAULT 2500,
    "uptime" TEXT DEFAULT '0',
    "MOTD" TEXT NOT NULL DEFAULT 'Hello world!',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "servers_pkey" PRIMARY KEY ("id")
);
