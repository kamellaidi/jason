BEGIN; -- début de la transaction

DROP TABLE IF EXISTS "list";

CREATE TABLE "list" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "name" VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ
);

-- seeding

INSERT INTO "list" ("name") -- on précise les colonnes qu'on va renseigner
  VALUES 
    ('Kamel'),
    ('Jason'),
    ('Bob'); 

COMMIT; -- fin de la transaction