let acorn = require("acorn");
let fs = require('fs');
let lodash = require('lodash');

let obfToInt = JSON.parse(fs.readFileSync(`deob/mappings.json`, {encoding: 'utf8', flag: 'r'}))
let intToObf = new Map()
let intToObfScript = new Map()

for (let [script, names] of Object.entries(obfToInt)) {
    for (let [obf, int] of Object.entries(names)) {
        intToObf.set(int, `${script}.${obf}`)

        if (int.startsWith("Class")) {
            intToObfScript.set(int, script)
        }
    }
}

let result = {}

function generate(obfScriptName, obfClassName, obf, named) {
    if (obf instanceof acorn.Node && named instanceof acorn.Node) {
        if (obf.type === named.type && lodash.isEqual(Object.keys(obf), Object.keys(named))) {
            if (obf.type === "Identifier") {

                if (obf.name.startsWith("member") && !named.name.startsWith("member")) {
                    result[intToObf.get(obf.name)] = named.name
                } else if (obf.name.startsWith("Class") && !named.name.startsWith("Class")) {
                    result[intToObf.get(obf.name)] = named.name
                } else if (obf.name.length <= 2 && named.name.length > 2) {
                    result[`${obfClassName}.${obf.name}`] = named.name
                }
            }

            for (let key in obf) {
                if (key !== "start" && key !== "end") {
                    generate(obfScriptName, obfClassName, obf[key], named[key], result)
                }
            }
        }
    } else if (obf instanceof Array && named instanceof Array) {
        if (obf.length === named.length) {
            for (let i in obf) {
                generate(obfScriptName, obfClassName, obf[i], named[i], result)
            }
        }
    }
}

let obfScripts = new Map()

for (let scriptName of fs.readdirSync("deob")) {
    if (scriptName.endsWith(".js")) {
        scriptName = scriptName.substring(0, scriptName.length - 3)
        obfScripts.set(scriptName, acorn.parse(fs.readFileSync(`deob/${scriptName}.js`, {encoding: 'utf8', flag: 'r'}), {ecmaVersion: "latest", sourceType: "module"}))
    }
}

let namedScripts = new Map()

for (let scriptName of fs.readdirSync("src")) {
    if (scriptName.endsWith(".js")) {
        scriptName = scriptName.substring(0, scriptName.length - 3)
        namedScripts.set(scriptName, acorn.parse(fs.readFileSync(`src/${scriptName}.js`, {encoding: 'utf8', flag: 'r'}), {ecmaVersion: "latest", sourceType: "module"}))
    }
}

for (let scriptName of obfScripts.keys()) {
    generate(intToObfScript.get(scriptName), intToObf.get(scriptName), obfScripts.get(scriptName), namedScripts.get(scriptName))
}

fs.writeFileSync("mappings.json", JSON.stringify(Object.keys(result).sort(), null, 2), { encoding: "utf8", flag: "w" });
