const db = require("./database");

const key = require("./key");
const colors = require("colors");

const { exec } = require("child_process");

const pckg = async () => {
    return key();
};

module.exports = pckg;