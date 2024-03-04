let acorn = require("acorn");
let escodegen = require("escodegen");
let estraverse = require("estraverse");
let fs = require('fs');
let lodash = require('lodash');

let scripts = new Map()

for (let scriptName of ["bootstrap", "d", "f", "g", "h"]) {
    scripts.set(scriptName, acorn.parse(fs.readFileSync(`obf/${scriptName}.js`, {encoding: 'utf8', flag: 'r'}), {ecmaVersion: "latest"}))
}

function isMemberName(name) {
    return /^_[a-z]{2,3}$/.test(name)
}

function compare(a, b, classNamesA, classNamesB, matches) {
    if (a instanceof acorn.Node && b instanceof acorn.Node) {
        if (a.type !== b.type || !lodash.isEqual(Object.keys(a), Object.keys(b))) {
            return false
        }

        if (a.type === "Identifier") {
            if (isMemberName(a.name) && isMemberName(b.name)) {
                matches.set(a.name, b.name) // member match
            }

            if (classNamesA.has(a.name) && classNamesB.has(b.name)) {
                matches.set(a.name, b.name) // class match
            }

            return true
        }

        if (a.type === "Literal" && /^[0-9]+ $/.test(a.value) && /^[0-9]+ $/.test(b.value)) {
            return true // error
        }

        if (a.type === "Literal" && /^_[a-z]{1,2}$/.test(a.value) && /^_[a-z]{1,2}$/.test(b.value)) {
            return true // shader
        }

        for (let key in a) {
            if (key === "start" || key === "end") {
                continue
            }

            if (!compare(a[key], b[key], classNamesA, classNamesB, matches)) {
                return false
            }
        }

        return true
    } else if (a instanceof Array && b instanceof Array) {
        if (a.length !== b.length) {
            return false
        }

        for (let i in a) {
            if (!compare(a[i], b[i], classNamesA, classNamesB, matches)) {
                return false
            }
        }

        return true
    } else {
        if (!lodash.isEqual(a, b)) {
            return false
        }
    }

    return true
}

// replace rsa key
for (let scriptName of scripts.keys()) {
    estraverse.traverse(scripts.get(scriptName), {
        leave: node => {
            if (node.type === "Literal" && node.value === "d5a49df7082f4b86850cbf20fee32bf72011ebf3361dd89a7d5714ac40dcfb2e4eef47f09a5e5c9bd84c204656ca4f4e392d37418f341ed20ae43f2e125bcaf4222b08ac7353a75ad57ecce3ae2f43238f95b6f89e13b582b039c9cbc7c1bfab35f397581b9ede95d6c1aa910968ac55b820a1c73101dbfff7fdff0d19142d65") {
                node.value = "9213f2a0dfb05a12aad1c715e47bf8a6dbcd7fa8ccb510c7c6bb297e7f1b0e85ec557a1eec69748e8cd0657191c4e451c710d0af84dbf11c9df9b06bb48337342625953f8eff3991bb8a80e9d416933087fca0bf53d3693a26c8f0b0dad4b7b67a20e65240e1c93dfafe6033a78ea0c450d220372dc499a95b65dca5c6db060b";
            }
        }
    })
}

// replace script opcodes
let opcodeIndex = 0
let opcodes = JSON.parse(fs.readFileSync("opcodes.json", {encoding: "utf8", flag: "r"}))

estraverse.traverse(scripts.get("bootstrap"), {
    leave: node => {
        if (node.type === "Property" && node.key.type === "Identifier" && node.key.name === "_qwe") {
            node.value.value = opcodes[opcodeIndex++]
        }
    }
})

// collect class names
let allClassNames = new Map()

for (let scriptName of ["d", "f", "g", "h", "bootstrap"]) {
    let classNames = new Set()

    for (let cls of scripts.get(scriptName).body) {
        if (cls.type !== "VariableDeclaration") continue
        let name = cls.declarations[0].id.name
        if (name.length > 3) continue
        if (name === "run") continue
        classNames.add(name)
    }

    allClassNames.set(scriptName, classNames)
}

// match workers to main file
let linkedNames = new Map()
linkedNames.set("bootstrap", new Map()) // none, everything links to bootstrap

for (let workerName of ["d", "f", "g", "h"]) {
    let mainClassNames = allClassNames.get("bootstrap")
    let workerClassNames = allClassNames.get(workerName)

    // match worker classes to main classes
    let classMatches = []

    for (let workerClass of scripts.get(workerName).body) {
        if (workerClass.type !== "VariableDeclaration") continue
        let workerClassName = workerClass.declarations[0].id.name
        if (!workerClassNames.has(workerClassName)) continue

        for (let mainClass of scripts.get("bootstrap").body) {
            if (mainClass.type !== "VariableDeclaration") continue
            let mainClassName = mainClass.declarations[0].id.name
            if (!mainClassNames.has(mainClassName)) continue
            let matches = new Map()

            if (compare(workerClass, mainClass, workerClassNames, mainClassNames, matches)) {
                classMatches.push([workerClassName, mainClassName, matches])
            }
        }
    }

    // remove anything that's ambiguous
    let ambiguousWorkerClasses = new Set()
    let ambiguousMainClasses = new Set()

    for (let classMatch of classMatches) {
        if (classMatches.some(otherClassMatch => otherClassMatch !== classMatch && (otherClassMatch[0] === classMatch[0] || otherClassMatch[1] === classMatch[1]))) {
            ambiguousWorkerClasses.add(classMatch[0])
            ambiguousMainClasses.add(classMatch[1])
        }
    }

    // combine unambiguous matches
    let combined = new Map()

    for (let [workerClassName, mainClassName, matches] of classMatches) {
        if (ambiguousWorkerClasses.has(workerClassName) || ambiguousMainClasses.has(mainClassName)) {
            continue
        }

        matches.forEach((v, k) => combined.set(k, v))
    }

    linkedNames.set(workerName, combined)
}

linkedNames.get("d").set("_cr", "_dyc")
linkedNames.get("g").set("_cr", "_dyc")
linkedNames.get("h").set("_cr", "_dyc")
linkedNames.get("f").set("_mml", "_han")
linkedNames.get("f").set("_mmm", "_hap")
linkedNames.get("f").set("_mmo", "_haq")
linkedNames.get("f").set("_mmq", "_har")
linkedNames.get("g").set("_mml", "_han")
linkedNames.get("g").set("_mmm", "_hap")
linkedNames.get("g").set("_mmo", "_haq")
linkedNames.get("g").set("_mmq", "_har")
linkedNames.get("f").set("_gpr", "_eng")
linkedNames.get("f").set("_gge", "_eis")
linkedNames.get("f").set("_bxn", "_cvd")
linkedNames.get("f").set("_bxp", "_cvc")
linkedNames.get("f").set("_bxw", "_mxy")
linkedNames.get("f").set("_bxr", "_gbe") // 90% sure
linkedNames.get("f").set("_bxs", "_fcc")
linkedNames.get("f").set("_gpw", "_enk")
linkedNames.get("f").set("_ero", "_dsd")
linkedNames.get("f").set("_gpv", "_enj")
linkedNames.get("f").set("_gpy", "_enm")
linkedNames.get("f").set("_mme", "_hae")
linkedNames.get("f").set("_non", "_idy")
linkedNames.get("f").set("_noq", "_ieb")
linkedNames.get("f").set("_hnj", "_ffd")
linkedNames.get("f").set("_rik", "_xdu")
linkedNames.get("f").set("_ril", "_xdw")
linkedNames.get("f").set("_mrj", "_hfp")
linkedNames.get("f").set("_mrl", "_hfv")
linkedNames.get("f").set("_hzq", "_gbf")
linkedNames.get("f").set("_nnu", "_ibs")
linkedNames.get("f").set("_nnw", "_ibt")
linkedNames.get("f").set("_ccn", "_brd")
linkedNames.get("f").set("_bxt", "_boh")
linkedNames.get("f").set("_hzs", "_gbg")
linkedNames.get("f").set("_nfu", "_hvt");
linkedNames.get("f").set("_ngb", "_hwc");
linkedNames.get("f").set("_ngd", "_hwe");
linkedNames.get("f").set("_cvu", "_dtv");
linkedNames.get("f").set("_nfy", "_hvz");
linkedNames.get("f").set("_nga", "_hwb");
linkedNames.get("f").set("_hnp", "_fqt");
linkedNames.get("f").set("_nfw", "_hvv");
linkedNames.get("f").set("_ot", "_nk");


// rename to unique names, respecting linkedWorkerNames
let mappings = new Map()
let obfToInt = {}
let nextMemberIndex = 0
let nextClassIndex = 0

for (let scriptName of ["d", "f", "g", "h", "bootstrap"]) {
    let classNames = allClassNames.get(scriptName)
    let linked = linkedNames.get(scriptName)
    obfToInt[scriptName] = {}

    estraverse.traverse(scripts.get(scriptName), {
        leave: node => {
            if (node.type === "Identifier") {
                let key = `${scriptName}.${node.name}`

                if (linked.has(node.name)) {
                    key = `bootstrap.${linked.get(node.name)}`
                }

                if (isMemberName(node.name)) {
                    if (!mappings.has(key)) {
                        mappings.set(key, `member${nextMemberIndex++}`) // todo: field/method depending on context
                    }

                    obfToInt[scriptName][node.name] = mappings.get(key)
                    node.name = mappings.get(key)
                }

                if (classNames.has(node.name)) {
                    if (!mappings.has(key)) {
                        mappings.set(key, `Class${nextClassIndex++}`)
                    }

                    obfToInt[scriptName][node.name] = mappings.get(key)
                    node.name = mappings.get(key)
                }
            }
        }
    })
}

// split into one file per class
for (let scriptName of ["bootstrap", "d", "f", "g", "h"]) { // prioritize using classes from bootstrap
    let body = []

    for (let element of scripts.get(scriptName).body) {
        if (element.type === "VariableDeclaration" && element.declarations[0].id.name.startsWith("Class")) {
            let name = element.declarations[0].id.name

            body.push({
                type: "ImportDeclaration",
                source: {type: "Literal", value: `${name}.js`},
                specifiers: [{
                    type: "ImportSpecifier",
                    imported: {type: "Identifier", name: name},
                    local: {type: "Identifier", name: name}
                }]
            })

            if (!scripts.has(name)) {
                scripts.set(name, {
                    "type": "Program",
                    body: [{
                        "type": "ExportNamedDeclaration",
                        declaration: element
                    }]
                })
            }
        } else {
            body.push(element)
        }
    }

    scripts.get(scriptName).body = body
}

// add imports
for (let scriptName of scripts.keys()) {
    if (["d", "f", "g", "h", "bootstrap"].includes(scriptName)) continue
    let script = scripts.get(scriptName)
    let usedClasses = new Set()

    for (let element of script.body) {
        estraverse.traverse(script, {
            leave: node => {
                if (node.type === "Identifier" && node.name.startsWith("Class") && node.name !== scriptName) {
                    usedClasses.add(node.name)
                }
            }
        })
    }

    let body = []

    for (let usedClass of usedClasses) {
        body.push({
            type: "ImportDeclaration",
            source: {type: "Literal", value: `${usedClass}.js`},
            specifiers: [{
                type: "ImportSpecifier",
                imported: {type: "Identifier", name: usedClass},
                local: {type: "Identifier", name: usedClass}
            }]
        })
    }

    body.push(...script.body)
    script.body = body
}

// merge else if
for (let scriptName of scripts.keys()) {
    estraverse.traverse(scripts.get(scriptName), {
        leave: node => {
            if (node.type === "IfStatement")
                if (
                    node.type === "IfStatement" &&
                    node.alternate !== null &&
                    node.alternate.type === "BlockStatement" &&
                    node.alternate.body.length === 1 &&
                    node.alternate.body[0].type === "IfStatement"
                ) {
                    node.alternate = node.alternate.body[0]
                }
        }
    });
}

// rename locals todo: broken
if (false) for (let scriptName of scripts.keys()) {
    let mapping = new Map()
    let nextLocalIndex = 0

    estraverse.traverse(scripts.get(scriptName), {
        leave: node => {
            if (node.type === "VariableDeclaration") {
                for (let declaration of node.declarations) {
                    if (/^[a-zA-Z]{1,2}$/.test(declaration.id.name)) {
                        mapping.set(declaration.id.name, `var${nextLocalIndex++}`)
                    }
                }
            }
        }
    })

    estraverse.traverse(scripts.get(scriptName), {
        leave: node => {
            if (node.type === "Identifier") {
                let name = node.name

                if (mapping.has(name)) {
                    node.name = mapping.get(name)
                }
            }
        }
    })
}

// output unnamed deob
fs.rmSync("deob", {recursive: true, force: true});
fs.mkdirSync("deob")
fs.writeFileSync("deob/mappings.json", JSON.stringify(obfToInt, null, 2), {encoding: "utf8", flag: "w"});

for (let scriptName of scripts.keys()) {
    fs.writeFileSync(`deob/${scriptName}.js`, escodegen.generate(scripts.get(scriptName)), {encoding: "utf8", flag: "w"});
}

// name
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

let names = JSON.parse(fs.readFileSync(`mappings.json`, {encoding: 'utf8', flag: 'r'}))

for (let scriptName of scripts.keys()) {
    let declarationCounts = new Map()

    estraverse.traverse(scripts.get(scriptName), {
        enter: node => {
            if (node.type === "VariableDeclaration") {
                for (let declaration of node.declarations) {
                    let name = declaration.id.name
                    declarationCounts.set(name, (declarationCounts.get(name) ?? 0) + 1)
                }
            }

            if (node.type === "FunctionDeclaration" || node.type === "FunctionExpression") {
                for (let param of node.params) {
                    declarationCounts.set(param.name, (declarationCounts.get(param.name) ?? 0) + 1)
                }
            }

            if (node.type === "Identifier") {
                let rename = null

                if (node.name.startsWith("member")) {
                    rename = names[intToObf.get(node.name)]
                } else if (node.name.startsWith("Class")) {
                    rename = names[intToObf.get(node.name)]
                } else if (node.name.length <= 2) {
                    rename = names[`${intToObf.get(scriptName)}.${node.name}.${declarationCounts.get(node.name) ?? 0}`]
                }

                if (rename !== null && rename !== undefined) {
                    node.name = rename
                }
            }
        }
    })
}

// output named deob
fs.rmSync("src", {recursive: true, force: true});
fs.mkdirSync("src")

for (let scriptName of scripts.keys()) {
    fs.writeFileSync(`src/${scriptName}.js`, escodegen.generate(scripts.get(scriptName)), {encoding: "utf8", flag: "w"});
}
