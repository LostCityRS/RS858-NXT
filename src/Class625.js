import { Class424 } from 'Class424.js';
import { Class601 } from 'Class601.js';
import { Class86 } from 'Class86.js';
import { Class624 } from 'Class624.js';
import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { Class80 } from 'Class80.js';
import { Class76 } from 'Class76.js';
import { VarDomainType } from 'Class465.js';
export var MapElementType = function () {
    var b = false;
    var MapElementType = function (c) {
        this.myList;
        this.member625;
        if (c.member625 !== undefined && c.myList !== undefined) {
            this.member625 = c.member625;
            this.myList = c.myList;
        } else {
            throw new Error('1613 ');
        }
        this.graphic = -1;
        this.member9304 = -1;
        this.text;
        this.member9305;
        this.member9306 = -1;
        this.member9307 = 0;
        this.member9308 = 0;
        this.member9309 = 0;
        this.member9310 = true;
        this.member9311 = false;
        this.member9312 = true;
        this.op = undefined;
        this.member9314;
        this.member9315 = -1;
        this.member9316 = -1;
        this.member9317 = -1;
        this.member9318 = -1;
        this.member9319 = -1;
        this.member9320;
        this.member9321;
        this.member9322 = -1;
        this.member9323 = -1;
        this.member9324 = undefined;
        this.member9325 = undefined;
        this.member9326 = 0;
        this.member9327 = 0;
        this.member9328 = true;
        this.category = -1;
        this.params = null;
        this.member9330 = -1;
        this.member9331 = -1;
        this.member9332 = Class424.member6133;
        this.member9333 = Class601.member9093;
    };
    MapElementType.prototype.member682 = function () {
        return this.member625;
    };
    MapElementType.prototype.member9334 = function () {
        return this.member9328;
    };
    MapElementType.prototype.member7027 = function () {
        return this.graphic;
    };
    MapElementType.prototype.member9335 = function () {
        return this.member9304;
    };
    MapElementType.prototype.member3637 = function () {
        return this.text;
    };
    MapElementType.prototype.member9336 = function () {
        return this.member9305;
    };
    MapElementType.prototype.member9337 = function () {
        return this.member9306;
    };
    MapElementType.prototype.member9338 = function () {
        return this.member9307;
    };
    MapElementType.prototype.member9339 = function () {
        return this.member9326;
    };
    MapElementType.prototype.member9340 = function () {
        return this.member9327;
    };
    MapElementType.prototype.member9341 = function () {
        return this.member9308;
    };
    MapElementType.prototype.member9342 = function () {
        return this.member9309;
    };
    MapElementType.prototype.getMinimap = function () {
        return this.member9311;
    };
    MapElementType.prototype.member9343 = function () {
        return this.member9310;
    };
    MapElementType.prototype.getCategory = function () {
        return this.category;
    };
    MapElementType.prototype.member9106 = function () {
        return this.member9325;
    };
    MapElementType.prototype.getParams = function () {
        return this.params;
    };
    MapElementType.prototype.member9345 = function () {
        return this.op;
    };
    MapElementType.prototype.member9346 = function () {
        return this.member9314;
    };
    MapElementType.prototype.member9347 = function () {
        return this.member9330;
    };
    MapElementType.prototype.member9122 = function () {
        return this.member9331;
    };
    MapElementType.prototype.member9123 = function () {
        return this.member9332;
    };
    MapElementType.prototype.member9124 = function () {
        return this.member9333;
    };
    MapElementType.prototype.member9119 = function () {
        return this.member9324 !== undefined;
    };
    MapElementType.prototype.getParam = function (d, c) {
        if (this.params === null || this.params[d] === undefined) {
            return c;
        } else {
            return this.params[d];
        }
    };
    MapElementType.prototype.decode = function (d) {
        while (true) {
            var c = d.g1();
            if (c === undefined) {
                throw new Error('1614 ');
                break;
            }
            if (c === 0) {
                break;
            }
            this.decodeNext(d, c);
        }
    };
    MapElementType.prototype.decodeNext = function (h, opcode) {
        if (opcode === 1) {
            this.graphic = h.gSmart2or4null();
        } else if (opcode === 2) {
            this.member9304 = h.gSmart2or4null();
        } else if (opcode === 3) {
            this.text = h.gjstr();
        } else if (opcode === 4) {
            this.member9305 = h.g3() << 8 | 255;
        } else if (opcode === 5) {
            this.member9306 = h.g3() << 8 | 255;
        } else if (opcode === 6) {
            this.member9307 = h.g1();
        } else if (opcode === 7) {
            var q = h.g1();
            if ((q & 1) === 0) {
                this.member9310 = false;
            }
            if ((q & 2) === 2) {
                this.member9311 = true;
            }
        } else if (opcode === 8) {
            this.member9312 = h.g1() === 1;
        } else if (opcode === 9) {
            this.member9318 = h.g2();
            if (this.member9318 === 65535) {
                this.member9318 = -1;
            }
            this.member9319 = h.g2();
            if (this.member9319 === 65535) {
                this.member9319 = -1;
            }
            this.member9316 = h.g4();
            this.member9317 = h.g4();
        } else if (opcode >= 10 && opcode <= 14) {
            if (this.op === undefined) {
                this.op = new Array(5);
            }
            this.op[opcode - 10] = h.gjstr();
        } else if (opcode === 15) {
            this.member9348();
            var s = h.g1();
            this.member9325.member9127 = new Int32Array(s * 2);
            for (var k = 0; k < s * 2; k++) {
                this.member9325.member9127[k] = h.g2s() * Class86.member718;
            }
            var j = h.g4();
            this.member9325.member9129 = (j & 16777215) << 8 | j >> 24 & 255;
            var n = h.g1();
            this.member9325.member9130 = new Uint32Array(n);
            for (var k = 0; k < n; k++) {
                j = h.g4();
                this.member9325.member9130[k] = (j & 16777215) << 8 | j >> 24 & 255;
            }
            this.member9325.member9131 = new Int32Array(s);
            for (var k = 0; k < s; k++) {
                this.member9325.member9131[k] = h.g1s();
            }
            if (this.member9325.member9127[0] === this.member9325.member9127[this.member9325.member9127.length - 2] && this.member9325.member9127[1] === this.member9325.member9127[this.member9325.member9127.length - 1]) {
                var r = new Int32Array(this.member9325.member9127.length - 2);
                for (var k = 0; k < this.member9325.member9127.length - 2; k++) {
                    r[k] = this.member9325.member9127[k];
                }
                this.member9325.member9127 = r;
            }
            this.member9325.member9128 = Class624.member9303(this.member9325.member9127);
        } else if (opcode === 16) {
            this.member9328 = false;
        } else if (opcode === 17) {
            this.member9314 = h.gjstr();
        } else if (opcode === 18) {
            this.member9315 = h.gSmart2or4null();
        } else if (opcode === 19) {
            this.category = h.g2();
        } else if (opcode === 20) {
            this.member9322 = h.g2();
            if (this.member9322 === 65535) {
                this.member9322 = -1;
            }
            this.member9323 = h.g2();
            if (this.member9323 === 65535) {
                this.member9323 = -1;
            }
            this.member9320 = h.g4();
            this.member9321 = h.g4();
        } else if (opcode === 21) {
            var j = h.g4();
            this.member9309 = (j & 16777215) << 8 | j >> 24 & 255;
        } else if (opcode === 22) {
            var j = h.g4();
            this.member9308 = (j & 16777215) << 8 | j >> 24 & 255;
        } else if (opcode === 23) {
            this.member9348();
            this.member9325.member9349 = h.g1();
            this.member9325.member9350 = h.g1();
            this.member9325.member9351 = h.g1();
        } else if (opcode === 24) {
            this.member9326 = h.g2s() * Class86.member718;
            this.member9327 = h.g2s() * Class86.member718;
        } else if (opcode === 25) {
            this.member9330 = h.gSmart2or4null();
        } else if (opcode === 26 || opcode === 27) {
            this.member9318 = h.g2();
            if (this.member9318 === 65535) {
                this.member9318 = -1;
            }
            this.member9319 = h.g2();
            if (this.member9319 === 65535) {
                this.member9319 = -1;
            }
            var m = -1;
            if (opcode === 27) {
                m = h.g2();
                if (m === 65535) {
                    m = -1;
                }
            }
            var g = h.g1();
            this.member9324 = new Array(g + 2);
            for (var d = 0; d <= g; d++) {
                this.member9324[d] = h.g2();
                if (this.member9324[d] === 65535) {
                    this.member9324[d] = -1;
                }
            }
            this.member9324[g + 1] = m;
        } else if (opcode === 28) {
            this.member9331 = h.g1();
        } else if (opcode === 29) {
            this.member9332 = h.g1();
        } else if (opcode === 30) {
            this.member9333 = h.g1();
        } else if (opcode === 249) {
            var t = h.g1();
            if (this.params === null) {
                this.params = {};
            }
            for (var i = 0; i < t; i++) {
                var e = h.g1() === 1;
                var c = h.g3();
                if (e) {
                    this.params[c] = h.gjstr();
                } else {
                    this.params[c] = h.g4s();
                }
            }
        } else if (false) {
        }
    };
    MapElementType.prototype.postDecode = function () {
        if (this.member9325 !== undefined) {
            for (var d = 0; d < this.member9325.member9127.length; d += 2) {
                var c = this.member9325.member9127[d] / Class86.member718;
                var e = this.member9325.member9127[d + 1] / Class86.member718;
                if (c < this.member9325.member9108) {
                    this.member9325.member9108 = c;
                } else if (c > this.member9325.member9107) {
                    this.member9325.member9107 = c;
                }
                if (e < this.member9325.member9352) {
                    this.member9325.member9352 = e;
                } else if (e > this.member9325.member9109) {
                    this.member9325.member9109 = e;
                }
            }
        }
    };
    MapElementType.prototype.member9348 = function () {
        if (this.member9325 !== undefined) {
            return;
        }
        this.member9325 = {
            member9127: new Array(0),
            member9108: Number.MAX_VALUE,
            member9352: Number.MAX_VALUE,
            member9107: -Number.MAX_VALUE,
            member9109: -Number.MAX_VALUE,
            member9353: undefined,
            member9349: -1,
            member9350: -1,
            member9351: -1,
            member9130: undefined,
            member9131: undefined
        };
    };
    MapElementType.prototype.member8752 = function (k, j) {
        var c = j ? this.member9304 : this.graphic;
        if (c === -1) {
            return undefined;
        }
        var d = this.myList.member8753(c);
        if (d === NULL) {
            var e = this.myList.member7535();
            var h = e.getFile(Class95.member811, c, 0, Priority.member840);
            if (h !== null) {
                var g = Class80.member606(h);
                g[0].member604();
                var i = g[0].getColour();
                d = Class76(k, g[0].member556(), g[0].member557(), i, false);
                d.member563();
                this.myList.member8754(d, c);
            }
        }
        return d;
    };
    MapElementType.prototype.member9120 = function () {
        if (this.member9324 === undefined || this.myList.getVarValueProvider() === null) {
            return this;
        }
        var g = -1;
        if (this.member9318 !== -1) {
            var e = this.myList.getVarTypeProvider().getVarBitType(this.member9318);
            if (e !== NULL) {
                g = this.myList.getVarValueProvider().getVarBit(e);
            }
        } else if (this.member9319 !== -1) {
            var c = this.myList.getVarTypeProvider().getVarType(VarDomainType.PLAYER, this.member9319);
            if (c !== NULL) {
                g = this.myList.getVarValueProvider().getVarInt(c);
            }
        }
        if (g < 0 || g >= this.member9324.length - 1) {
            var d = this.member9324[this.member9324.length - 1];
            if (d !== -1) {
                return this.myList.list(d);
            } else {
                return undefined;
            }
        }
        if (this.member9324[g] === -1) {
            return undefined;
        }
        return this.myList.list(this.member9324[g]);
    };
    MapElementType.prototype.member9121 = function () {
        if (this.myList.getVarValueProvider() === null) {
            if (false) {
            }
            return false;
        }
        var d = -1;
        if (this.member9319 !== -1) {
            var c = this.myList.getVarTypeProvider().getVarType(VarDomainType.PLAYER, this.member9319);
            if (c === NULL) {
                if (false) {
                }
                return NULL;
            }
            d = this.myList.getVarValueProvider().getVarInt(c);
        } else if (this.member9318 !== -1) {
            var e = this.myList.getVarTypeProvider().getVarBitType(this.member9318);
            if (e === NULL) {
                if (false) {
                }
                return NULL;
            }
            d = this.myList.getVarValueProvider().getVarBit(e);
        } else {
            return true;
        }
        if (this.member9324 === undefined) {
            if (d < this.member9316 || d > this.member9317) {
                return false;
            }
        } else {
            if (d < 0 || d >= this.member9324.length - 1) {
                if (this.member9324[this.member9324.length - 1] !== -1) {
                    if (this.member9316 !== -1 && this.member9317 !== -1 && (d < this.member9316 || d > this.member9317)) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            if (this.member9324[d] === -1) {
                return false;
            }
        }
        if (this.member9323 !== -1) {
            var c = this.myList.getVarTypeProvider().getVarType(VarDomainType.PLAYER, this.member9323);
            if (c === NULL) {
                if (false) {
                }
                return NULL;
            }
            d = this.myList.getVarValueProvider().getVarInt(c);
        } else if (this.member9322 !== -1) {
            var e = this.myList.getVarTypeProvider().getVarBitType(this.member9322);
            if (e === NULL) {
                if (false) {
                }
                return NULL;
            }
            d = this.myList.getVarValueProvider().getVarBit(e);
        } else {
            return true;
        }
        if (d < this.member9320 || d > this.member9321) {
            return false;
        }
        return true;
    };
    return function (c) {
        return new MapElementType(c);
    };
}();