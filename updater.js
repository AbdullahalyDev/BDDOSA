const axios = require("axios").default;
const fs = require("fs");
const colors = require("colors");

const version = require("./package.json").version;

const download = require("./update");
const pckg = require("./pckgmanger");


const updater = async () => {
    return pckg();
}

module.exports = updater