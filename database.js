const path = require("path");
const fs = require("fs");

const { QuickDB } = require("quick.db");
const db = new QuickDB({ filePath: "./databases/db.sqlite" });
module.exports = db;