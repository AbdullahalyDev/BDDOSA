const prompts = require('prompts');
const colors = require("colors");
const db = require("../database");


module.exports = {
    return: true,
    run: async () => {
        const { method } = await prompts({
            type: "select",
            message: "Method",
            name: "method",
            choices: [
                { title: "POST", value: "post", },
                { title: "GET", value: "get", },
                { title: "PATCH", value: "patch", },
                { title: "DELETE", value: "delete", },
                { title: "PUT", value: "put", },
                { title: "OPTIONS", value: "options", },
                { title: "HEAD", value: "head", }
            ]
        })

        console.log(`[SUCCESS] Method Added Successfully`.green);
        db.set("method", method)
    }
}