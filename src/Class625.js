import { Class424 } from 'Class424.js';
import { Class601 } from 'Class601.js';
import { Class86 } from 'Class86.js';
import { Class624 } from 'Class624.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class80 } from 'Class80.js';
import { Class76 } from 'Class76.js';
import { Class465 } from 'Class465.js';
export var Class625 = function () {
    var b = false;
    var a = function (c) {
        this.member2896;
        this.member625;
        if (c.member625 !== undefined && c.member2896 !== undefined) {
            this.member625 = c.member625;
            this.member2896 = c.member2896;
        } else {
            throw new Error('1613 ');
        }
        this.member7004 = -1;
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
        this.member9313 = undefined;
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
        this.member9329 = -1;
        this.params = null;
        this.member9330 = -1;
        this.member9331 = -1;
        this.member9332 = Class424.member6133;
        this.member9333 = Class601.member9093;
    };
    a.prototype.member682 = function () {
        return this.member625;
    };
    a.prototype.member9334 = function () {
        return this.member9328;
    };
    a.prototype.member7027 = function () {
        return this.member7004;
    };
    a.prototype.member9335 = function () {
        return this.member9304;
    };
    a.prototype.member3637 = function () {
        return this.text;
    };
    a.prototype.member9336 = function () {
        return this.member9305;
    };
    a.prototype.member9337 = function () {
        return this.member9306;
    };
    a.prototype.member9338 = function () {
        return this.member9307;
    };
    a.prototype.member9339 = function () {
        return this.member9326;
    };
    a.prototype.member9340 = function () {
        return this.member9327;
    };
    a.prototype.member9341 = function () {
        return this.member9308;
    };
    a.prototype.member9342 = function () {
        return this.member9309;
    };
    a.prototype.member8671 = function () {
        return this.member9311;
    };
    a.prototype.member9343 = function () {
        return this.member9310;
    };
    a.prototype.member8472 = function () {
        return this.member9329;
    };
    a.prototype.member9106 = function () {
        return this.member9325;
    };
    a.prototype.member9344 = function () {
        return this.params;
    };
    a.prototype.member9345 = function () {
        return this.member9313;
    };
    a.prototype.member9346 = function () {
        return this.member9314;
    };
    a.prototype.member9347 = function () {
        return this.member9330;
    };
    a.prototype.member9122 = function () {
        return this.member9331;
    };
    a.prototype.member9123 = function () {
        return this.member9332;
    };
    a.prototype.member9124 = function () {
        return this.member9333;
    };
    a.prototype.member9119 = function () {
        return this.member9324 !== undefined;
    };
    a.prototype.getParam = function (d, c) {
        if (this.params === null || this.params[d] === undefined) {
            return c;
        } else {
            return this.params[d];
        }
    };
    a.prototype.decode = function (d) {
        while (true) {
            var c = d.member609();
            if (c === undefined) {
                throw new Error('1614 ');
                break;
            }
            if (c === 0) {
                break;
            }
            this.member2932(d, c);
        }
    };
    a.prototype.member2932 = function (h, o) {
        if (o === 1) {
            this.member7004 = h.member1086();
        } else if (o === 2) {
            this.member9304 = h.member1086();
        } else if (o === 3) {
            this.text = h.member1089();
        } else if (o === 4) {
            this.member9305 = h.g3() << 8 | 255;
        } else if (o === 5) {
            this.member9306 = h.g3() << 8 | 255;
        } else if (o === 6) {
            this.member9307 = h.member609();
        } else if (o === 7) {
            var q = h.member609();
            if ((q & 1) === 0) {
                this.member9310 = false;
            }
            if ((q & 2) === 2) {
                this.member9311 = true;
            }
        } else if (o === 8) {
            this.member9312 = h.member609() === 1;
        } else if (o === 9) {
            this.member9318 = h.member608();
            if (this.member9318 === 65535) {
                this.member9318 = -1;
            }
            this.member9319 = h.member608();
            if (this.member9319 === 65535) {
                this.member9319 = -1;
            }
            this.member9316 = h.member1073();
            this.member9317 = h.member1073();
        } else if (o >= 10 && o <= 14) {
            if (this.member9313 === undefined) {
                this.member9313 = new Array(5);
            }
            this.member9313[o - 10] = h.member1089();
        } else if (o === 15) {
            this.member9348();
            var s = h.member609();
            this.member9325.member9127 = new Int32Array(s * 2);
            for (var k = 0; k < s * 2; k++) {
                this.member9325.member9127[k] = h.member1071() * Class86.member718;
            }
            var j = h.member1073();
            this.member9325.member9129 = (j & 16777215) << 8 | j >> 24 & 255;
            var n = h.member609();
            this.member9325.member9130 = new Uint32Array(n);
            for (var k = 0; k < n; k++) {
                j = h.member1073();
                this.member9325.member9130[k] = (j & 16777215) << 8 | j >> 24 & 255;
            }
            this.member9325.member9131 = new Int32Array(s);
            for (var k = 0; k < s; k++) {
                this.member9325.member9131[k] = h.member1070();
            }
            if (this.member9325.member9127[0] === this.member9325.member9127[this.member9325.member9127.length - 2] && this.member9325.member9127[1] === this.member9325.member9127[this.member9325.member9127.length - 1]) {
                var r = new Int32Array(this.member9325.member9127.length - 2);
                for (var k = 0; k < this.member9325.member9127.length - 2; k++) {
                    r[k] = this.member9325.member9127[k];
                }
                this.member9325.member9127 = r;
            }
            this.member9325.member9128 = Class624.member9303(this.member9325.member9127);
        } else if (o === 16) {
            this.member9328 = false;
        } else if (o === 17) {
            this.member9314 = h.member1089();
        } else if (o === 18) {
            this.member9315 = h.member1086();
        } else if (o === 19) {
            this.member9329 = h.member608();
        } else if (o === 20) {
            this.member9322 = h.member608();
            if (this.member9322 === 65535) {
                this.member9322 = -1;
            }
            this.member9323 = h.member608();
            if (this.member9323 === 65535) {
                this.member9323 = -1;
            }
            this.member9320 = h.member1073();
            this.member9321 = h.member1073();
        } else if (o === 21) {
            var j = h.member1073();
            this.member9309 = (j & 16777215) << 8 | j >> 24 & 255;
        } else if (o === 22) {
            var j = h.member1073();
            this.member9308 = (j & 16777215) << 8 | j >> 24 & 255;
        } else if (o === 23) {
            this.member9348();
            this.member9325.member9349 = h.member609();
            this.member9325.member9350 = h.member609();
            this.member9325.member9351 = h.member609();
        } else if (o === 24) {
            this.member9326 = h.member1071() * Class86.member718;
            this.member9327 = h.member1071() * Class86.member718;
        } else if (o === 25) {
            this.member9330 = h.member1086();
        } else if (o === 26 || o === 27) {
            this.member9318 = h.member608();
            if (this.member9318 === 65535) {
                this.member9318 = -1;
            }
            this.member9319 = h.member608();
            if (this.member9319 === 65535) {
                this.member9319 = -1;
            }
            var m = -1;
            if (o === 27) {
                m = h.member608();
                if (m === 65535) {
                    m = -1;
                }
            }
            var g = h.member609();
            this.member9324 = new Array(g + 2);
            for (var d = 0; d <= g; d++) {
                this.member9324[d] = h.member608();
                if (this.member9324[d] === 65535) {
                    this.member9324[d] = -1;
                }
            }
            this.member9324[g + 1] = m;
        } else if (o === 28) {
            this.member9331 = h.member609();
        } else if (o === 29) {
            this.member9332 = h.member609();
        } else if (o === 30) {
            this.member9333 = h.member609();
        } else if (o === 249) {
            var t = h.member609();
            if (this.params === null) {
                this.params = {};
            }
            for (var i = 0; i < t; i++) {
                var e = h.member609() === 1;
                var c = h.g3();
                if (e) {
                    this.params[c] = h.member1089();
                } else {
                    this.params[c] = h.member1074();
                }
            }
        } else if (false) {
        }
    };
    a.prototype.member2934 = function () {
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
    a.prototype.member9348 = function () {
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
    a.prototype.member8752 = function (k, j) {
        var c = j ? this.member9304 : this.member7004;
        if (c === -1) {
            return undefined;
        }
        var d = this.member2896.member8753(c);
        if (d === member47) {
            var e = this.member2896.member7535();
            var h = e.getFile(Class95.member811, c, 0, Class96.member840);
            if (h !== null) {
                var g = Class80.member606(h);
                g[0].member604();
                var i = g[0].member600();
                d = Class76(k, g[0].member556(), g[0].member557(), i, false);
                d.member563();
                this.member2896.member8754(d, c);
            }
        }
        return d;
    };
    a.prototype.member9120 = function () {
        if (this.member9324 === undefined || this.member2896.member8687() === null) {
            return this;
        }
        var g = -1;
        if (this.member9318 !== -1) {
            var e = this.member2896.member7539().member7394(this.member9318);
            if (e !== member47) {
                g = this.member2896.member8687().member2950(e);
            }
        } else if (this.member9319 !== -1) {
            var c = this.member2896.member7539().member7393(Class465.member4134, this.member9319);
            if (c !== member47) {
                g = this.member2896.member8687().member2943(c);
            }
        }
        if (g < 0 || g >= this.member9324.length - 1) {
            var d = this.member9324[this.member9324.length - 1];
            if (d !== -1) {
                return this.member2896.list(d);
            } else {
                return undefined;
            }
        }
        if (this.member9324[g] === -1) {
            return undefined;
        }
        return this.member2896.list(this.member9324[g]);
    };
    a.prototype.member9121 = function () {
        if (this.member2896.member8687() === null) {
            if (false) {
            }
            return false;
        }
        var d = -1;
        if (this.member9319 !== -1) {
            var c = this.member2896.member7539().member7393(Class465.member4134, this.member9319);
            if (c === member47) {
                if (false) {
                }
                return member47;
            }
            d = this.member2896.member8687().member2943(c);
        } else if (this.member9318 !== -1) {
            var e = this.member2896.member7539().member7394(this.member9318);
            if (e === member47) {
                if (false) {
                }
                return member47;
            }
            d = this.member2896.member8687().member2950(e);
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
            var c = this.member2896.member7539().member7393(Class465.member4134, this.member9323);
            if (c === member47) {
                if (false) {
                }
                return member47;
            }
            d = this.member2896.member8687().member2943(c);
        } else if (this.member9322 !== -1) {
            var e = this.member2896.member7539().member7394(this.member9322);
            if (e === member47) {
                if (false) {
                }
                return member47;
            }
            d = this.member2896.member8687().member2950(e);
        } else {
            return true;
        }
        if (d < this.member9320 || d > this.member9321) {
            return false;
        }
        return true;
    };
    return function (c) {
        return new a(c);
    };
}();