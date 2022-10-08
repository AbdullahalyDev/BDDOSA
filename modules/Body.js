const prompts = require('prompts');
const colors = require("colors");
const db = require("../database");

module.exports = {
    return: true,
    run: async () => {
        const { body } = await prompts({
            type: "text",
            message: "Body",
            name: "body",
        })


        db.set("body", body)
        console.log(`[SUCCESS] Body Added Successfully`.green);

    }
}

const s = '{"lol": true}'