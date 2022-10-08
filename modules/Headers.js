const prompts = require('prompts');
const colors = require("colors");
const db = require("../database");

module.exports = {
    return: true,
    run: async () => {
        const { headers } = await prompts({
            type: "text",
            message: "Headers (json - OneLine)",
            name: "headers",
        })


        const convert = JSON.parse(headers);
        db.set("headers", convert)
        console.log(`[SUCCESS] Headers Added Successfully`.green);

    }
}