"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(date) {
    return date.toLocaleDateString("en-US", {
        dateStyle: "medium"
    });
}
exports.formatDate = formatDate;
