const prompts = require('prompts');
const colors = require("colors");
const db = require("../database");

module.exports = {
    return: true,
    run: async () => {
        const { rpc } = await prompts({
            type: "number",
            message: "Request Per Cycle",
            name: "rpc",
        })


        db.set("rpc", rpc)
        console.log(`[SUCCESS] RPC Added Successfully`.green);

    }
}

