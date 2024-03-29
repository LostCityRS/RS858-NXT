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

function generate(obfScriptName, obfClassName, obf, named, declarationCounts) {
    if (obf instanceof acorn.Node && named instanceof acorn.Node) {
        if (obf.type === named.type && lodash.isEqual(Object.keys(obf), Object.keys(named))) {
            if (obf.type === "Identifier") {
                if (obf.name.startsWith("member") && !named.name.startsWith("member")) {
                    result[intToObf.get(obf.name)] = named.name
                } else if (obf.name.startsWith("Class") && !named.name.startsWith("Class")) {
                    result[intToObf.get(obf.name)] = named.name
                } else if (obf.name.length <= 2 && named.name !== obf.name) {
                    result[`${obfClassName}.${obf.name}.${declarationCounts.get(obf.name) ?? 0}`] = named.name
                }
            }

            if (obf.type === "VariableDeclaration") {
                for (let declaration of obf.declarations) {
                    declarationCounts.set(declaration.id.name, (declarationCounts.get(declaration.id.name) ?? 0) + 1)
                }
            }

            if (obf.type === "FunctionDeclaration" || obf.type === "FunctionExpression") {
                for (let param of obf.params) {
                    declarationCounts.set(param.name, (declarationCounts.get(param.name) ?? 0) + 1)
                }
            }

            for (let key in obf) {
                if (key !== "start" && key !== "end") {
                    generate(obfScriptName, obfClassName, obf[key], named[key], declarationCounts)
                }
            }
        }
    } else if (obf instanceof Array && named instanceof Array) {
        if (obf.length === named.length) {
            for (let i in obf) {
                generate(obfScriptName, obfClassName, obf[i], named[i], declarationCounts)
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
let fileMapping = new Map()

for (let scriptName of fs.readdirSync("src", { recursive: true })) {
    if (scriptName.endsWith(".js")) {
        scriptName = scriptName.replaceAll("\\", "/")
        scriptName = scriptName.substring(0, scriptName.length - 3)
        let content = fs.readFileSync(`src/${scriptName}.js`, {encoding: 'utf8', flag: 'r'});
        let obfId = content.match(/\/\/ (\d+)/)
        let originalName = obfId != null ? `Class${obfId[1]}` : scriptName
        fileMapping.set(originalName, scriptName)

        try {
            namedScripts.set(originalName, acorn.parse(content, {ecmaVersion: "latest", sourceType: "module"}))
        } catch (e) {
            console.error(`error while parsing ${scriptName}`)
            throw e
        }
    }
}

for (let scriptName of obfScripts.keys()) {
    generate(intToObfScript.get(scriptName), intToObf.get(scriptName), obfScripts.get(scriptName), namedScripts.get(scriptName), new Map())
}

for (let scriptName of obfScripts.keys()) {
    let obfClassName = intToObf.get(scriptName)
    let namedClassName = fileMapping.get(scriptName)

    if (namedClassName && namedClassName.includes("/")) {
        result[obfClassName] = namedClassName
    }
}

fs.writeFileSync("mappings.json", JSON.stringify(result, Object.keys(result).sort(), 2), {encoding: "utf8", flag: "w"});
