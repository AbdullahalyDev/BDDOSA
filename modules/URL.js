const prompts = require('prompts');
const colors = require("colors");
const db = require("../database");

module.exports = {
    return: true,
    run: async () => {
        const { url } = await prompts({
            type: "text",
            message: "URL",
            name: "url",
        })


        db.set("url", url)
        console.log(`[SUCCESS] URL Added Successfully`.green);

    }
}

