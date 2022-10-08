const prompts = require("prompts");
const axios = require("axios").default;
const colors = require("colors");
const mac = require("getmac");
const https = require("https");


const db = require("./database");

const commander = require("./commander");


const keyInput = async () => {

    return commander();

}


module.exports = keyInput
