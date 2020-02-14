"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isPlainObject_1 = __importDefault(require("lodash/isPlainObject"));
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const isMockEqual = (match1, match2) => {
    const on1 = match1.$meta ? match1.$meta.originalNormal : undefined;
    const on2 = match2.$meta ? match2.$meta.originalNormal : undefined;
    if (!isPlainObject_1.default(on1) || !isPlainObject_1.default(on2)) {
        return on1 === on2;
    }
    if (!on1 || !on2)
        return false;
    return (on1.url === on2.url &&
        on1.path === on2.path &&
        on1.method === on2.method &&
        isEqual_1.default(on1.query, on2.query) &&
        isEqual_1.default(on1.body, on2.body) &&
        isEqual_1.default(on1.headers, on2.headers) &&
        isEqual_1.default(on1.cookies, on2.cookies));
};
exports.isMockEqual = isMockEqual;
//# sourceMappingURL=isMockEqual.js.map