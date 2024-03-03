import { CP1252 } from 'Class122.js';
import { ScriptVarType } from 'Class463.js';
export var EnumType = function (g) {
    var EnumType = {};
    var x;
    var a = -1;
    if (g.member625 !== undefined && g.myList !== undefined) {
        a = g.member625;
        x = g.myList;
    } else {
        throw new Error('1790 ');
    }
    var inputtype;
    EnumType.getInputType = function () {
        return inputtype;
    };
    var inputtype_legacy;
    EnumType.getLegacyInputType = function () {
        return inputtype_legacy;
    };
    var outputtype;
    EnumType.getOutputType = function () {
        return outputtype;
    };
    var outputtype_legacy;
    EnumType.getLegacyOutputType = function () {
        return outputtype_legacy;
    };
    var defaultint = 0;
    var defaultstr = 'null';
    var val_sparse = null;
    var val_dense = null;
    var val_count = 0;
    EnumType.getOutputCount = function () {
        return val_count;
    };
    var r = null;
    var decode = function (packet) {
        while (true) {
            var opcode = packet.g1();
            if (opcode === undefined) {
                throw new Error('1791 ');
                break;
            }
            if (opcode === 0) {
                break;
            }
            decodeNext(packet, opcode);
        }
    };
    EnumType.decode = decode;
    var decodeNext = function (packet, opcode) {
        if (opcode === 1) {
            inputtype_legacy = CP1252.decodeChar(packet.g1());
        } else if (opcode === 2) {
            outputtype_legacy = CP1252.decodeChar(packet.g1());
        } else if (opcode === 3) {
            defaultstr = packet.gjstr();
        } else if (opcode === 4) {
            defaultint = packet.g4s();
        } else if (opcode === 5 || opcode === 6) {
            val_count = packet.g2();
            val_sparse = {};
            for (var i = 0; i < val_count; i++) {
                var key = packet.g4s();
                var value;
                if (opcode === 5) {
                    value = packet.gjstr();
                } else {
                    value = packet.g4s();
                }
                val_sparse[key] = value;
            }
        } else if (opcode === 7 || opcode === 8) {
            var capacity = packet.g2();
            val_count = packet.g2();
            val_dense = new Array(capacity);
            for (var i = 0; i < val_count; i++) {
                var F = packet.g2();
                if (opcode === 7) {
                    val_dense[F] = packet.gjstr();
                } else {
                    val_dense[F] = packet.g4s();
                }
            }
        } else if (opcode === 101) {
            var typeCode = packet.gSmart1or2();
            inputtype = ScriptVarType.getByID(typeCode);
            if (inputtype !== null) {
                inputtype_legacy = inputtype.legacyChar.charCodeAt(0);
            } else {
                console.log('Null input type: ' + typeCode);
            }
        } else if (opcode === 102) {
            var typeCode = packet.gSmart1or2();
            outputtype = ScriptVarType.getByID(typeCode);
            if (outputtype !== null) {
                outputtype_legacy = outputtype.legacyChar.charCodeAt(0);
            } else {
                console.log('Null output type: ' + typeCode);
            }
        } else if (false) {
        }
    };
    var i = function (C) {
        var B = k(C);
        if (B === undefined) {
            return defaultint;
        } else {
            return B;
        }
    };
    EnumType.member9452 = i;
    var h = function (C) {
        var B = k(C);
        if (B === undefined) {
            return defaultstr;
        } else {
            return B;
        }
    };
    EnumType.member9450 = h;
    var k = function (B) {
        if (val_dense !== null) {
            if (B < 0 || B >= val_dense.length) {
                return undefined;
            } else {
                return val_dense[B];
            }
        } else if (val_sparse !== null) {
            return val_sparse[B];
        } else {
            return undefined;
        }
    };
    var e = function (B) {
        if (val_count === 0) {
            return false;
        }
        if (r === null) {
            s();
        }
        return r[B] !== undefined;
    };
    EnumType.member9453 = e;
    var b = function (B) {
        if (val_count === 0) {
            return undefined;
        }
        if (r === null) {
            s();
        }
        return r[B];
    };
    EnumType.member9455 = b;
    var getOutputCount = function () {
        return val_count;
    };
    EnumType.getOutputCount = getOutputCount;
    var s = function () {
        r = {};
        if (val_dense !== null) {
            for (var E = 0; E < val_dense.length; E++) {
                if (val_dense[E] === undefined) {
                    continue;
                }
                var C = val_dense[E];
                var D = r[C];
                if (D === undefined) {
                    D = new Array(0);
                    r[C] = D;
                }
                D[D.length] = E;
            }
        } else if (val_sparse !== null) {
            for (var B in val_sparse) {
                var C = val_sparse[B];
                var D = r[C];
                if (D === undefined) {
                    D = new Array(0);
                    r[C] = D;
                }
                D[D.length] = B;
            }
        } else {
            throw new Error('1792 ');
        }
    };
    g = undefined;
    return EnumType;
};