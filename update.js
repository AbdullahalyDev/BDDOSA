const download = require('download');
const colors = require("colors");
const fs = require("fs");
const pckg = require("./pckgmanger");
const AdmZip = require("adm-zip");
const https = require("https");

const update = async () => {
    console.log("Update Starting".yellow);
    download("https://BDDOSAAK.abdullahaly1.repl.co/latest", "./updates")
        .then(() => {
            console.log("Update Downloaded".green);

            console.log("Unpacking Update Package".yellow);
            const zip = new AdmZip("./updates/latest.zip");
            zip.extractAllTo("./", true);
            console.log("Update Unpacked".green);

            console.log("Delete Update Pack".yellow);

            fs.unlinkSync("./updates/latest.zip");

            console.log("Update Pack Deleted".green);

            console.log("BDDOSA Will Restart in 5s...".green);
            setTimeout(() => {
                return;
            }, 5*1000);

        })
        .catch((e) => {
            console.log(`Update Error: ${e}`.red)
        })
}
module.exports = update