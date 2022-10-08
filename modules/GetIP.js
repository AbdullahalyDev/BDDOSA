const prompts = require('prompts');
const colors = require("colors");
const db = require("../database");
const nclookup = require("nslookup");

const commander = require("../commander");

module.exports = {
    return: false,
    run: async () => {
        const { url } = await prompts({
            type: "text",
            message: "URL",
            name: "url",
        })

        nclookup(url, async (err, adds) => {
            if (err) {
                return console.log(`${err}`.red);
            }

            var c = new Array();

            for (let i = 0; i < adds.length; i++) {
                if (adds[i] != undefined) c.push({ title: adds[i], value: adds[i] });
            }

            c.push({ title: "Exit", value: "exit" })


            const { ip } = await prompts({
                type: "select",
                name: "ip",
                message: "Choose",
                choices: c
            })

            // if (ip == "exit") return;

            db.set("url", ip)

            console.log("URL Addedd Successfully".green);
            commander();

        })

    }
}