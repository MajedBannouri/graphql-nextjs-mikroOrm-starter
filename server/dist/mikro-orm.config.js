"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = require("./entities/User");
dotenv_1.default.config();
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./migration"),
        pattern: /^[\w-]+\d+\.[jt]s$/,
    },
    entities: [Post_1.Post, User_1.User],
    dbName: process.env.DB_NAME,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    debug: !constants_1.__prod__,
    type: "postgresql",
};
//# sourceMappingURL=mikro-orm.config.js.map