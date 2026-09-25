"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeUnlink = safeUnlink;
exports.getAvatarAbsolutePath = getAvatarAbsolutePath;
const fs = require("fs");
const path = require("path");
function safeUnlink(filePath) {
    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
    catch {
    }
}
function getAvatarAbsolutePath(filename) {
    return path.join(process.cwd(), 'uploads', 'avatars', filename);
}
//# sourceMappingURL=file.utils.js.map