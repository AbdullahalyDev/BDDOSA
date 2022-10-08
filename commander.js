const prompts = require("prompts");
const fs = require("fs");
const path = require("path");


const nbt = require("node-bash-title");

const commander = async () => {
    const files = fs.readdirSync(`./modules`).filter(v => v.endsWith(".js"));


    var choices = new Array();
    
    for (let i = 0; i < files.length; i++) {
        choices.push({
            title: files[i].replace(".js", ""),
            value: files[i]
        })
    }

    const { cmd } = await prompts({
        type: "autocomplete",
        message: "Command",
        name: "cmd",
        choices: choices
    })

    if (cmd == undefined || cmd == "") return commander();

    if (!fs.existsSync(`./modules/${cmd}`)) return commander();

    const module = require(`./modules/${cmd}`);
    try {
        await module.run()
    }
    catch (err) {
        console.log(`[ERROR] ${err}`.red);
        commander();
    };


    if (module.return) return commander();

};

module.exports = commander;