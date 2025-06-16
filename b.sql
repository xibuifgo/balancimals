CREATE TABLE "pose_score" (
  "game_ID" text NOT NULL,
  "image_link" text NOT NULL,
  "score" bigint NOT NULL,
  "DATA" jsonb NOT NULL,
  PRIMARY KEY ("image_link", "game_ID")
);

CREATE TABLE "poses" (
  "link" text NOT NULL,
  "name" text NOT NULL,
  "description" text NOT NULL,
  "wake_threshold" double precision,
  "anger_threshold" double precision,
  PRIMARY KEY ("image_link")
);

CREATE TABLE "doctor" (
  "id" text,
  "sharecode" text,
  "first_name" text,
  "last_name" text,
  "username" text,
  "password" text,
  "email" text,
  PRIMARY KEY ("id")
);

CREATE TABLE "patient" (
  "patient_ID" bigint NOT NULL,
  "first_name" text,
  "last_name" text,
  "height" double precision,
  "weight" double precision,
  "birthday" date,
  "difficulty" text,
  "email" text,
  "password" text,
  "sharecode" text,
  PRIMARY KEY ("patient_ID"),
  CONSTRAINT "FK_patient.sharecode"
    FOREIGN KEY ("sharecode")
      REFERENCES "doctor"("sharecode")
);

CREATE TABLE "game_data" (
  "session_ID" bigint,
  "date" date,
  "poses" json,
  "patient_ID" bigint,
  PRIMARY KEY ("session_ID"),
  CONSTRAINT "FK_game_data.patient_ID"
    FOREIGN KEY ("patient_ID")
      REFERENCES "patient"("patient_ID")
);