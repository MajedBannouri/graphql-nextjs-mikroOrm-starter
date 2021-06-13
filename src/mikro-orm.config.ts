import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[jt]s$/,
  },
  entities: [Post],
  dbName: process.env.DB_NAME,
  user: process.env.USER_NAME,
  password: "123456",
  debug: !__prod__,
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];
