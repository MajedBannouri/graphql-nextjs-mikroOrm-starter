"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210614175823 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210614175823 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('alter table "user" add column "password" text not null;');
            this.addSql('alter table "user" add constraint "user_password_unique" unique ("password");');
            this.addSql('alter table "user" add constraint "user_password_unique" unique ("password");');
        });
    }
}
exports.Migration20210614175823 = Migration20210614175823;
//# sourceMappingURL=Migration20210614175823.js.map