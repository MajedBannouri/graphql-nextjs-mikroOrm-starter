import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";
import dotenv from "dotenv";
import { User } from "./entities/User";
dotenv.config();

export default {
  migrations: {
    path: path.join(__dirname, "./migration"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[jt]s$/,
  },
  entities: [Post, User],
  dbName: process.env.DB_NAME,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  debug: !__prod__,
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];
