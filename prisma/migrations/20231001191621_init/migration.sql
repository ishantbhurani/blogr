-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL DEFAULT concat('post_', replace(cast(gen_random_uuid() as Text), '-', '')),
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "bannerUrl" TEXT,
    "categories" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
