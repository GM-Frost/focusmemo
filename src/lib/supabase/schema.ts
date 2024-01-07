// Creating Table for Project

import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const workspaces = pgTable("workspaces", {
  //pattern recognition
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }),
  workspaceOwner: uuid("workspace_owner").notNull(),
  title: text("title").notNull(),
  iconId: text("data"),
  inThrash: text("in_trash"),
  logo: text("logo"),
  bannerUrl: text("banner_url"),
});

//creating folder in database
export const folders = pgTable("folders", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }),

  title: text("title").notNull(),
  iconId: text("data"),
  inThrash: text("in_trash"),
  logo: text("logo"),
  bannerUrl: text("banner_url"),
  workspaceId: uuid("workspace_id").references(() => workspaces.id, {
    onDelete: "cascade",
  }),
});

//creating files in database
export const files = pgTable("files", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }),

  title: text("title").notNull(),
  iconId: text("data"),
  inThrash: text("in_trash"),
  logo: text("logo"),
  bannerUrl: text("banner_url"),
  workspaceId: uuid("workspace_id").references(() => workspaces.id, {
    onDelete: "cascade",
  }),
  folderId: uuid("folder_id").references(() => folders.id, {
    onDelete: "cascade",
  }),
});
