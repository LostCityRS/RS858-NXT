import { Js5ConfigGroup } from 'Class131.js';
import { Class86 } from 'Class86.js';
import { Class158 } from 'Class158.js';
import { Class95 } from 'Class95.js';
import { Class271 } from 'Class271.js';
import { Priority } from 'Class96.js';
import { Class198 } from 'Class198.js';
export var Class399 = function () {
    var b = function (c) {
        this.member1643;
        this.member1642;
        this.member1644 = undefined;
        this.member2563 = NULL;
        this.member4614 = null;
        this.member4615 = null;
        this.member4616 = [];
        if (c.member1643 !== undefined && c.member1642 !== undefined) {
            this.member1643 = c.member1643;
            this.member1642 = c.member1642;
            this.member1644 = c.member1644;
        } else {
            throw new Error('1408 ');
        }
    };
    b.prototype.member4617 = function () {
        return this.member2563;
    };
    b.prototype.member3250 = function () {
        return this.member2563 !== NULL;
    };
    b.prototype.load = function (B, h, g) {
        var z = 1;
        if (this.member1644 !== undefined) {
            z = this.member1644.member3251.length;
        }
        if (this.member4614 === null) {
            this.member4614 = new Array(z);
        }
        if (this.member4615 === null) {
            this.member4615 = {};
        }
        var s = true;
        if (this.member1644 === undefined) {
            this.member4614[0] = this.member4618(B, g, this.member1643, this.member1642);
            if (this.member4614[0] === null) {
                s = false;
            }
        } else {
            for (var J = 0; J < this.member1644.member3251.length; J++) {
                if (this.member4614[J] !== null && this.member4614[J] !== undefined) {
                    continue;
                }
                this.member4614[J] = this.member4618(B, g, this.member1644.member3251[J].member1643, this.member1644.member3251[J].member1642);
                if (this.member4614[J] === null) {
                    s = false;
                }
            }
        }
        if (!s) {
            return false;
        }
        var e = true;
        for (var o = 0; o < this.member4614.length; o++) {
            var C = this.member4614[o];
            for (var J = 0; J < C.length; J++) {
                var c = C[J];
                if (c.member4148 === undefined || c.member4148 === NULL) {
                    c.member4148 = h.getConfigType(Js5ConfigGroup.LOCTYPE.member1204, c.member2506);
                    if (c.member4148 === undefined || c.member4148 === NULL) {
                        e = false;
                    }
                }
            }
        }
        if (!e) {
            return false;
        }
        for (var J = 0; J < this.member4616.length; J++) {
            var I = this.member4616[J];
            var G = this.member4615[I.x * Class86.member726 + I.member756];
            if (G === null || G === undefined) {
                continue;
            }
            I.member2535 = G.member4148.getWallWidth();
        }
        this.member4615 = null;
        this.member4616.length = 0;
        for (var o = 0; o < this.member4614.length; o++) {
            var C = this.member4614[o];
            for (var J = 0; J < C.length; J++) {
                var c = C[J];
                var q = this.member1643 * Class86.member729 + c.x;
                var m = this.member1642 * Class86.member729 + c.member756;
                c.member2523 = c.member4148.member4484(g, c.level, q, m, c.member2520);
            }
        }
        if (this.member1644 === undefined) {
            this.member2563 = this.member4614[0];
            for (var J = 0; J < this.member2563.length; J++) {
                var c = this.member2563[J];
                if (g.member4112(this.member1643 * Class86.member729 + c.x, this.member1642 * Class86.member729 + c.member756)) {
                    c.level--;
                }
            }
        } else {
            this.member2563 = new Array(0);
            for (var d = 0; d < Class86.member414; d++) {
                for (var j = 0; j < Class86.member716; j++) {
                    for (var i = 0; i < Class86.member716; i++) {
                        var k = this.member1644.member3252[d][j][i];
                        if (k !== undefined) {
                            var r = k.member4620 % Class86.member716 * Class86.member717;
                            var y = r + (Class86.member717 - 1);
                            var n = k.member4621 % Class86.member716 * Class86.member717;
                            var v = n + (Class86.member717 - 1);
                            var C = this.member4614[k.member3253];
                            for (var u = 0; u < C.length; u++) {
                                var c = C[u];
                                if (c.level === k.level && c.x >= r && c.x <= y && c.member756 >= n && c.member756 <= v) {
                                    var H = c.x % Class86.member717;
                                    var F = c.member756 % Class86.member717;
                                    var A = Class158.member1638(H, F, k.member1668, c.member4148.getWidth(0), c.member4148.getLength(0), c.member2520);
                                    var x = Class158.member1639(H, F, k.member1668, c.member4148.getWidth(0), c.member4148.getLength(0), c.member2520);
                                    var E = j * Class86.member717 + A;
                                    var D = i * Class86.member717 + x;
                                    var t = d;
                                    if (g.member4112(this.member1643 * Class86.member729 + E, this.member1642 * Class86.member729 + D)) {
                                        t--;
                                    }
                                    this.member2563.push({
                                        level: t,
                                        x: E,
                                        member756: D,
                                        member2506: c.member2506,
                                        member2519: c.member2519,
                                        member2520: c.member2520 + k.member1668 & 3,
                                        member2527: c.member2527,
                                        member2521: c.member2521,
                                        member2523: c.member2523,
                                        member4148: c.member4148,
                                        member2535: c.member2535,
                                        member2536: c.member2536
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }
        this.member4614 = null;
        return true;
    };
    b.prototype.member512 = function () {
        this.member2563 = null;
        this.member4614 = null;
    };
    b.prototype.member4618 = function (h, c, j, g) {
        var e = j | g << 7;
        var i = true;
        if (h.member1551(Class95.member809, e, Class271.member3206) === false) {
            i = false;
        }
        if (h.member1551(Class95.member809, e, Class271.member3207) === false) {
            i = false;
        }
        if (!i) {
            return NULL;
        } else {
            var d = new Array(0);
            this.member4622(h, c, e, Class271.member3206, d, false);
            this.member4622(h, c, e, Class271.member3207, d, true);
            return d;
        }
    };
    b.prototype.member4622 = function (s, e, g, r, t, d) {
        var h = s.getFile(Class95.member809, g, r, Priority.member841);
        if (h === undefined) {
            return;
        }
        var q = -1;
        while (true) {
            var k = 0;
            var v = h.gSmart1or2();
            while (v === 32767) {
                k += v;
                v = h.gSmart1or2();
            }
            k += v;
            if (k === 0) {
                break;
            }
            q += k;
            var z = 0;
            while (true) {
                var c = h.gSmart1or2();
                if (c === 0) {
                    break;
                }
                z += c - 1;
                var j = z & 63, n = z >> 6 & 63, m = z >> 12;
                var u = h.g1();
                var o = u >> 2;
                var i = new a(m, n, j, q, o, u & 3, o === Class198.member2332, !d, o === Class198.member2339);
                t.push(i);
                if (Class198.member2353(o)) {
                    this.member4615[n * Class86.member726 + j] = i;
                }
                if (Class198.member2357(o) || i.member2536) {
                    this.member4616.push(i);
                }
                if (o === Class198.member2332) {
                    t.push(new a(m, n, j, q, o, u + 1 & 3, false, !d, false));
                } else if (o === Class198.member2339) {
                    t.push(new a(m, n, j, q, o, u + 2 & 3, false, !d, false));
                }
            }
        }
    };
    var a = function (d, k, j, c, m, e, g, h, i) {
        this.level = d;
        this.x = k;
        this.member756 = j;
        this.member2506 = c;
        this.member2519 = m;
        this.member2520 = e;
        this.member2527 = g;
        this.member2521 = h;
        this.member2536 = i;
        this.member4148 = NULL;
        this.member2535 = undefined;
    };
    return function (c) {
        return new b(c);
    };
}();