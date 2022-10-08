const prompts = require('prompts');
const colors = require("colors");
const db = require("../database");

module.exports = {
    return: true,
    run: async () => {
        const { ct } = await prompts({
            type: "number",
            message: "Cycle Time",
            name: "ct",
        })


        db.set("ct", ct)
        console.log(`[SUCCESS] CT Added Successfully`.green);

    }
}