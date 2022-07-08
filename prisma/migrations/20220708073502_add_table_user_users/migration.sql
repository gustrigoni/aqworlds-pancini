-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "username" VARCHAR(45) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "access" INTEGER NOT NULL DEFAULT 1,
    "activation_flag" INTEGER NOT NULL DEFAULT 5,
    "age" INTEGER NOT NULL DEFAULT 13,
    "gender" TEXT NOT NULL DEFAULT 'M',
    "email" VARCHAR(255) NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "gold" INTEGER NOT NULL DEFAULT 0,
    "coins" INTEGER NOT NULL DEFAULT 0,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "color_hair" INTEGER NOT NULL DEFAULT 0,
    "color_flag" INTEGER NOT NULL DEFAULT 0,
    "color_eye" INTEGER NOT NULL DEFAULT 0,
    "color_base" INTEGER NOT NULL DEFAULT 0,
    "color_trim" INTEGER NOT NULL DEFAULT 0,
    "color_acessory" INTEGER NOT NULL DEFAULT 0,
    "upgrade_expired_at" TIMESTAMP(3),
    "bank_slots" INTEGER NOT NULL DEFAULT 5,
    "house_slots" INTEGER NOT NULL DEFAULT 20,
    "bag_slots" INTEGER NOT NULL DEFAULT 45,
    "hair_id" INTEGER,
    "hair_file" TEXT,
    "hair_name" TEXT,
    "last_area" TEXT,
    "current_server" VARCHAR(60),
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_password_key" ON "users"("password");
