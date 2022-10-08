const { obfuscate } = require("js-confuser");
const { exec } = require("child_process");

const rcedit = require('rcedit')
const colors = require("colors");
const fs = require("fs");

const package = fs.readdirSync("./").filter(s => s.endsWith(".json") && s.includes("package"));
const files = fs.readdirSync("./").filter(s => s.endsWith(".js") && s != "encode.js");
const modules = fs.readdirSync("./modules");

if (!fs.existsSync("./out")) {
    fs.mkdirSync("./out")
}
if (!fs.existsSync("./out/databases")) {
    fs.mkdirSync("./out/databases")
}
if (!fs.existsSync("./out/modules")) {
    fs.mkdirSync("./out/modules")
}
if (!fs.existsSync("./out/updates")) {
    fs.mkdirSync("./out/updates")
}

fs.writeFileSync("./out/Updater.bat", "npm update");


package.forEach(async (f) => {
    const b = fs.readFileSync(`./${f}`).toString();
    fs.writeFileSync(`./out/${f}`, b);
})


files.forEach(async (a) => {
    const b = fs.readFileSync(`./${a}`).toString();
    obfuscate(b, {
        target: "node",
        preset: "high",
        stringEncoding: false
    })
        .then((d) => {
            console.log(`${a} Encoded`.green)
            fs.writeFileSync(`./out/${a}`, d);
        })
})

modules.forEach(async (m) => {
    const b = fs.readFileSync(`./modules/${m}`).toString();
    obfuscate(b, {
        target: "node",
        preset: "high",
        stringEncoding: false
    })
        .then((d) => {
            console.log(`${m} Encoded`.green)
            fs.writeFileSync(`./out/modules/${m}`, d);
        })
})


exec('pkg .', (err, stdout, stderr) => {
    console.log("EXE File Created".green);
    rcedit("./out/bddosa.exe", {
        icon: "./assets/WebitLogo.ico"
    })
});
