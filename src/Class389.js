import { CoordFine } from 'Class290.js';
import { Class37 } from 'Class37.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class304 } from 'Class304.js';
import { Class291 } from 'Class291.js';
import { Class198 } from 'Class198.js';
import { Cuboid } from 'Class166.js';
import { Class305 } from 'Class305.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class373 } from 'Class373.js';
import { Class86 } from 'Class86.js';
import { Class32 } from 'Class32.js';
import { Class387 } from 'Class387.js';
import { HillChange } from 'Class170.js';
import { Class382 } from 'Class382.js';
import { Class188 } from 'Class188.js';
import { Class388 } from 'Class388.js';
import { Class50 } from 'Class50.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class155 } from 'Class155.js';
import { Class133 } from 'Class133.js';
import { Class49 } from 'Class49.js';
import { Class130 } from 'Class130.js';
import { Class376 } from 'Class376.js';
import { Class371 } from 'Class371.js';
import { Class332 } from 'Class332.js';
import { Class347 } from 'Class347.js';
import { Class351 } from 'Class351.js';
export var Class389 = function () {
    var e = {};
    var d = 0;
    var b = 1;
    var g = 2;
    var c = CoordFine();
    var a = function (n, z, j, r, s, t, o, u, h, D, C, B, A, q, v, x, k, y, m, i) {
        this.member2506 = -1;
        this.member4453 = NULL;
        this.member4148 = NULL;
        this.member2522;
        this.member2523;
        this.member2519;
        this.member2520;
        this.member2527;
        this.member2532;
        this.member4454 = undefined;
        this.member4147;
        this.member4455;
        this.member4456;
        this.member4331 = -1;
        this.member2535 = -1;
        this.member2536 = false;
        this.member4149 = false;
        this.member4150 = false;
        this.member4457 = undefined;
        this.member4458 = undefined;
        this.member4459 = -1;
        this.member4460 = undefined;
        this.member1611 = Class37.create();
        this.member2285 = undefined;
        this.member4461 = undefined;
        this.member4462 = undefined;
        this.member4210 = 0;
        this.member1612 = new Float32Array(4);
        this.member2619 = NULL;
        this.member2621 = NULL;
        this.member4463 = undefined;
        this.member4464;
        this.member4465 = false;
        this.member4208 = false;
        this.member2529 = -1;
        this.member4466 = undefined;
        this.member1728 = undefined;
        this.member4467 = undefined;
        this.member4468 = 0;
        this.member4211 = undefined;
        this.member4212 = false;
        this.member4469 = 0;
        if (n !== undefined && z !== undefined && j !== undefined && r !== undefined && t !== undefined && o !== undefined && u !== undefined && h !== undefined && s !== undefined && y !== undefined && D !== undefined && C !== undefined && B !== undefined && A !== undefined) {
            member46(this, Class372, n, z, j, Class374.member4132, r);
            this.member2506 = this.member4459 = s;
            this.member2522 = h;
            this.member2523 = q;
            this.member2519 = t;
            this.member2520 = o;
            this.member2527 = u;
            if (v !== undefined) {
                this.member4211 = Class304(v);
            }
            this.member4147 = Class291(r, D, C);
            this.member4456 = B;
            this.member4455 = A;
            if (x !== undefined) {
                this.member2535 = x;
            }
            if (t === Class198.member2339 && k !== undefined) {
                this.member2536 = k;
            }
            this.member2621 = y;
            this.member2621.member563();
            this.member2621.member510();
            if (this.member4148 !== null && this.member4148.getClickbox() !== null) {
                this.member4093(Cuboid(this.member4148.getClickbox()));
            } else {
                this.member4093(Cuboid(this.member2621.member2098()));
            }
            this.member4210 = Date.now();
            this.member1612[3] = -1;
            this.member4457 = d;
        } else if (n !== undefined && z !== undefined && j !== undefined && r !== undefined && t !== undefined && o !== undefined && u !== undefined && h !== undefined && s !== undefined && D !== undefined && C !== undefined && B !== undefined && A !== undefined) {
            member46(this, Class372, n, z, j, Class374.member4132, r);
            this.member2506 = this.member4459 = s;
            this.member2522 = h;
            this.member2523 = q;
            this.member2519 = t;
            this.member2520 = o;
            this.member2527 = u;
            if (v !== undefined) {
                this.member4211 = Class304(v);
            }
            this.member4147 = Class291(r, D, C);
            this.member4456 = B;
            this.member4455 = A;
            if (m !== undefined) {
                this.member4460 = m;
            }
            if (i !== undefined) {
                this.member4454 = i;
            }
            if (x !== undefined) {
                this.member2535 = x;
            }
            if (t === Class198.member2339 && k !== undefined) {
                this.member2536 = k;
            }
            this.member4457 = b;
        } else {
            throw new Error('1051 ');
        }
    };
    member45(Class372, a);
    a.prototype.getID = function () {
        return this.member2506;
    };
    a.prototype.member4151 = function () {
        return this.member4148;
    };
    a.prototype.member4152 = function () {
        return this.member4453;
    };
    a.prototype.member4471 = function () {
        return this.member2520;
    };
    a.prototype.getName = function () {
        return this.member4148.getName();
    };
    a.prototype.member4472 = function () {
        return this.member2519;
    };
    a.prototype.member4153 = function () {
        return this.member4147;
    };
    a.prototype.member4158 = function () {
        return true;
    };
    a.prototype.member4159 = function () {
        return this.member4149;
    };
    a.prototype.member4160 = function () {
        return this.member4150;
    };
    a.prototype.member4473 = function (h) {
        this.member2529 = h;
    };
    a.prototype.member4474 = function () {
        return this.member2529;
    };
    a.prototype.member4475 = function () {
        if (this.member2621 === NULL || this.member4460 !== undefined) {
            return true;
        }
        return false;
    };
    a.prototype.hide = function () {
        this.member4149 = true;
        if (this.member4476 !== d) {
            this.member4154(g);
        }
    };
    a.prototype.member4155 = function () {
        this.member4149 = false;
        if (this.member4476 !== d) {
            this.member4154(b);
        }
    };
    a.prototype.member4156 = function () {
        this.member4150 = true;
        if (this.member4476 !== d) {
            this.member4154(g);
        }
    };
    a.prototype.member4157 = function () {
        this.member4150 = false;
        if (this.member4476 !== d) {
            this.member4154(b);
        }
    };
    a.prototype.member4477 = function () {
        this.member4463 = undefined;
        this.member4464.member2621.member511();
        this.member4464 = undefined;
    };
    a.prototype.member4438 = function (h, i) {
        this.member4467 = h;
        this.member4468 = i;
        this.member4092(1);
    };
    a.prototype.member4478 = function () {
        if (this.member4148.member2142() !== -1 && (!this.member4148.member4479 || this.member4070.member4480().member3938.getValue() === Class305.member796)) {
            return true;
        }
        if (this.member4467 !== undefined) {
            return true;
        }
        if (this.member2621.member2101() !== undefined) {
            return true;
        }
        if (this.member4466 !== undefined && this.member4466.member2679()) {
            return true;
        }
        return false;
    };
    a.prototype.member4380 = function (F, C, m, H, G, y) {
        if (this.member4453 === NULL) {
            this.member4453 = m.getConfigType(Js5ConfigGroup.LOCTYPE.member1204, this.member2506);
            if (this.member4453 === NULL) {
                return;
            }
            if (this.member4453.member4481()) {
                this.member4148 = this.member4453.member4482();
                if (this.member4148 === NULL) {
                    this.member4453 = NULL;
                    return;
                }
            } else {
                this.member4148 = this.member4453;
            }
            if (this.member4453.getActive() || this.member4453.member4481()) {
                this.member4096(Class373({ empty: true }));
            }
            if (!this.member4453.getActive()) {
                this.member4094(true);
            }
        }
        if (this.member4148 === undefined) {
            this.member4088(this.member4089());
            return;
        }
        var t = this.member4147.x * Class86.member718, o = this.member4147.member756 * Class86.member718;
        var r = this.member4453.getWidth(this.member2520) * Class86.member718;
        var j = this.member4453.getLength(this.member2520) * Class86.member718;
        if (this.member4331 === -1) {
            this.member4331 = this.member4453.member4483(this.member4453, this.member4085().member4114(), this.member4110(t, o), this.member4147.x, this.member4147.member756, this.member2520, !this.member2522);
            if (this.member4331 !== -1) {
                var I = this.member3320();
                var z = this.member4148.getOffset();
                Class198.member2361(this.member2519, this.member2520, this.member2535, this.member2536, e);
                var x = this.member4456 * Class86.member718 + r / 2 + (z === null ? 0 : z[0]) + e.member2363;
                var s = this.member4455 * Class86.member718 + j / 2 + (z === null ? 0 : z[2]) + e.member2364;
                I.member4198(e.member2362);
                I.member4194(x, this.member4331 + (z === null ? 0 : z[1]), s);
            }
        }
        if (this.member4331 === -1) {
            return;
        }
        if (this.member2523 === undefined) {
            this.member2523 = this.member4148.member4484(this.member4085().member4111(), this.member4081(), this.member4147.x, this.member4147.member756, this.member2520);
        }
        if (this.member4211 === undefined) {
            var u = this.member4085();
            c.level = this.level;
            var n = t + r / 2;
            var k = o + j / 2;
            c.member3454[0] = n;
            c.member3454[1] = this.member4331;
            c.member3454[2] = k;
            var h = new Array(Class32.member310);
            var q = this.member4085().member4485(c, h, false);
            if (q === -1) {
                return;
            }
            h.length = q;
            this.member4211 = Class304(h);
        }
        if (this.member2621 === NULL || this.member4465) {
            if (this.member4148.getModels() !== null) {
                if (this.member4463 === undefined) {
                    this.member4464 = this.member4148.member4487(G, Class387.member4394, this.member2519, this.member2520, this.member2527, this.member4454, true);
                    if (this.member4464 === NULL) {
                        return;
                    }
                    if (this.member4464 !== undefined) {
                        this.member4464.member2621.member510();
                        this.member2619 = this.member4464.member2619;
                        var i = this.member4148.getHillChangeMode();
                        if (i === HillChange.FLOOR_SKEW || i === HillChange.TREE_SKEW || i === HillChange.ROTATE) {
                            this.member2532 = this.member4148.member4488(this.member4453, this.member4331, this.member4085().member4114(), this.member4110(t, o), this.member4147.x, this.member4147.member756, this.member2520, !this.member2522);
                        } else {
                            this.member2532 = false;
                        }
                        var v = null;
                        if (this.member2532 === false && i !== HillChange.member1852) {
                            v = this.member4148.member4489(this.member4453, this.member4085().member4114(), this.member4110(t, o), this.member4147.x, this.member4147.member756, this.member2520, !this.member2522);
                            if (v === undefined) {
                                v = null;
                            }
                        }
                        this.member4463 = Class382(Class387.member4394, this.member4148, this.member4453, this.member4464.member2621, this.member2520, this.member4331, v);
                        if (!H.member2939(this.member4463)) {
                            this.member4477();
                            return;
                        }
                    } else {
                        this.member2621 = undefined;
                    }
                }
                if (this.member4463 !== undefined) {
                    var D = this.member4463.member2723();
                    if (!D.member2859) {
                        return;
                    } else if (!D.member2863) {
                        this.member4477();
                        return;
                    }
                    var E = this.member4463.member2893();
                    if (E.member4490 !== undefined) {
                        this.member4461 = new Float32Array(E.member4490);
                    }
                    if (this.member4465 && this.member2621 !== NULL) {
                        this.member512();
                    }
                    this.member4465 = false;
                    this.member2621 = Class188(undefined, undefined, F, undefined, undefined, undefined, E.member2621);
                    this.member2621.member510();
                    this.member2621.member563();
                    if (this.member4148.getClickbox() !== null) {
                        this.member4093(Cuboid(this.member4148.getClickbox()));
                    } else {
                        this.member4093(Cuboid(this.member2621.member2098()));
                    }
                    this.member4477();
                }
            } else {
                this.member2621 = undefined;
            }
        }
        var A = true;
        if (this.member2621 !== undefined) {
            if (this.member2285 === undefined && this.member3320().member4188()) {
                this.member2285 = this.member1985().member4491(this.member3320().member4099());
            }
            if (this.member4478()) {
                if (this.member4466 === undefined) {
                    if (this.member2619 === NULL) {
                        var B = this.member4148.member4487(G, Class387.member104, this.member2519, this.member2520, this.member2527, this.member4454, true);
                        if (B !== NULL) {
                            this.member2619 = B.member2619;
                        } else {
                            A = false;
                        }
                    }
                    if (this.member2619 !== NULL) {
                        this.member4466 = Class388(m, H, false, Class50.member369, this.member4385, this, this.member4148.randseq);
                        if (!this.member4148.member4479 || this.member4070.member4480().member3938.getValue() === Class305.member796) {
                            this.member4466.member4439(this.member4148.member2142());
                        }
                    }
                }
                if (this.member4466 !== undefined) {
                    if (this.member4467 !== undefined) {
                        this.member4466.member4438(this.member4467, this.member4468);
                        this.member4467 = undefined;
                    }
                    this.member4466.member4380(y, F, this.member2621, this.member2619, 0);
                    A = !this.member4466.member4431() && !this.member4466.member4427();
                }
            } else {
                this.member4466 = undefined;
            }
        }
        if (this.member4460 !== undefined) {
            this.member1985().member4493(this.member4460, this);
            this.member4460 = undefined;
        }
        if (this.member4149 === true || this.member4154(this.member4457)) {
            this.member4476 = this.member4457;
            this.member4457 = d;
        } else {
            A = false;
        }
        if (A) {
            this.member4088(this.member4089());
        }
    };
    a.prototype.member512 = function () {
        this.member4154(g);
        if (this.member2621 !== NULL && this.member2621 !== undefined) {
            this.member2621.member511();
            this.member2621 = NULL;
        }
        this.member2619 = NULL;
        if (this.member4466 !== undefined) {
            this.member4466.member512();
            this.member4466 = undefined;
        }
        this.member1728 = undefined;
        this.member4123();
    };
    a.prototype.member952 = function (h, m, u, t, s) {
        var i = Class132.member1266();
        var k = i.member522(Class72.member499);
        var n = i.member941(Class72.POINTLIGHT);
        if (this.member4212) {
            n.member990(this.member4211);
        }
        if (this.member2285 !== undefined) {
            i.member1023(Class72.member504);
            var q = i.member941(Class72.member504);
            q.member912(this.member2285.member1675);
            q.member913(this.member2285.member1593[1] - this.member2285.member1673, this.member2285.member1593[1] - this.member2285.member1674);
        }
        var o = this.member4148.member4494(this.member2519);
        h.member4228(Class155.member96, o);
        h.member4228(Class155.member416, o);
        var r = this.member4085().member4227();
        var j = !this.member4148.getActive() && this.member4081() >= r || this.member4081() > r;
        this.member2621.member952(h, t, m, this.member4462 !== undefined ? this.member4462 : u, this.member1611, this.member1728, false, s, this.member1612, j);
        if (this.member2285 !== undefined) {
            i.member1024(Class72.member504);
        }
        if (this.member4466 !== undefined && !k && !i.member522(Class72.member96) && (s === undefined || s === Class133.member1270)) {
            this.member4466.member4450(h, m);
        }
        h.member4229(Class155.member416);
        h.member4229(Class155.member96);
        if (this.member4212) {
            n.member991();
        }
    };
    a.prototype.member4230 = function (n, m, k, i) {
        if (this.member2621 === undefined) {
            return;
        }
        if (this.member2522 || this.member4149) {
            return;
        }
        if (this.member4148 === undefined) {
            return;
        }
        if (this.member2621 === NULL || this.member4148 === NULL) {
            return;
        }
        if (this.member4148.member4495()) {
            return;
        }
        var j = false;
        var h = true;
        var o = false;
        this.member2621.member1630(0, n, this.member4462 !== undefined ? this.member4462 : m, this.member1611, this.member1728, h, i, undefined, o);
    };
    a.prototype.member486 = function (k, s, r, q) {
        var h = Class132.member1266();
        var j = h.member522(Class72.member499);
        var m = h.member941(Class72.POINTLIGHT);
        if (this.member4212) {
            m.member990(this.member4211);
        }
        if (this.member2285 !== undefined) {
            h.member1023(Class72.member504);
            var n = h.member941(Class72.member504);
            n.member912(this.member2285.member1675);
            n.member913(this.member2285.member1593[1] - this.member2285.member1673, this.member2285.member1593[1] - this.member2285.member1674);
        }
        var o = this.member4085().member4227();
        var i = !this.member4148.getActive() && this.member4081() >= o || this.member4081() > o;
        this.member2621.member1630(r, k, this.member4462 !== undefined ? this.member4462 : s, this.member1611, this.member1728, false, q, this.member1612, i);
        if (this.member2285 !== undefined) {
            h.member1024(Class72.member504);
        }
        if (this.member4466 !== undefined && !j && !h.member522(Class72.member96) && (q === undefined || q === Class133.member1270)) {
            this.member4466.getID9(k);
        }
        if (this.member4212) {
            m.member991();
        }
    };
    a.prototype.member4222 = function (i, k, m, n, j) {
        if (this.member4461 !== undefined) {
            if (this.member4462 === undefined) {
                this.member4462 = Class49.create();
            }
            Class49.member323(k, this.member4461, this.member4462);
        } else {
            this.member4462 = undefined;
        }
        var h = this.member4462 !== undefined ? this.member4462 : k;
        Class49.member334(h, this.member1611);
        if (this.member4466 !== undefined) {
            this.member1728 = this.member4466.getID5(j, 0);
        } else {
            this.member1728 = undefined;
        }
    };
    a.prototype.member3437 = function (n, u, k, B, t) {
        if (this.member4103(n)) {
            if (this.member4453 === NULL || this.member4149) {
                this.member4105(false);
                return;
            }
            var A = this.member4453.member4482();
            if (this.member4453.member4481()) {
                if (A === undefined) {
                    this.member512();
                    this.member4148 = A;
                    this.member4459 = -1;
                } else if (A !== NULL && (this.member2621 === NULL && A.getModels() !== null || this.member4459 !== A.member682())) {
                    this.member4465 = true;
                    this.member4148 = A;
                    this.member4459 = A.member682();
                    this.member4092(1);
                }
            }
            if (this.member4148 === NULL || this.member4148 === undefined || this.member2621 === NULL || this.member2621 === undefined) {
                this.member4105(false);
                return;
            }
            if (this.member4466 === undefined && this.member2621.member2106() === 0) {
                this.member4105(false);
                return;
            }
            if (this.member4148.member4495()) {
                this.member4105(false);
                return;
            }
            if (this.member4461 !== undefined) {
                if (this.member4462 === undefined) {
                    this.member4462 = Class49.create();
                }
                Class49.member323(u, this.member4461, this.member4462);
            } else {
                this.member4462 = undefined;
            }
            var s = this.member4462 !== undefined ? this.member4462 : u;
            Class49.member334(s, this.member1611);
            if (this.member4466 !== undefined) {
                this.member1728 = this.member4466.getID5(t, 0);
                this.member4466.getID8(s);
            } else {
                this.member1728 = undefined;
            }
            var x = this.member4095();
            if (x !== undefined && A !== NULL && A.getActive()) {
                var m = this.member4085().member4166();
                var v = this.member3320().member4167().member1812(B, k, m.width, m.height, x);
                this.member4098(v);
                if (v) {
                    this.member4085().member4168(this);
                }
            }
            if (this.member1612 !== undefined && this.member1612[3] < 0) {
                this.member1612[3] = (Date.now() - this.member4210) / 1000 - 1;
                if (this.member1612[3] >= 0) {
                    this.member1612 = undefined;
                }
            }
            this.member4102();
            this.member4105(true);
        } else if (!this.member4104()) {
            return;
        }
        if (Class130.member1194()) {
            if (this.member2522 || this.member2519 === Class198.member2352) {
                this.member4107(false);
                return;
            }
            if (!this.member4208) {
                this.member4208 = this.member4085().member4223(this);
            }
            if (!this.member4108()) {
                this.member4107(false);
                return;
            }
        }
        var q = Class132.member1266();
        var o = q.member522(Class72.member499);
        if (o) {
            if (!this.member4148.member4494(this.member2519)) {
                this.member4107(false);
                return;
            }
            var y = q.member941(Class72.member499);
            if (y.member972() < y.member970) {
                this.member4107(false);
                return;
            }
        }
        var r = q.member522(Class72.member96);
        if (r) {
            if (!this.member4148.member4494(this.member2519)) {
                this.member4107(false);
                return;
            }
        }
        var z = q.member522(Class72.member416);
        if (z) {
            if (!this.member4148.member4494(this.member2519)) {
                this.member4107(false);
                return;
            }
        }
        var h = q.member941(Class72.POINTLIGHT);
        this.member4212 = this.member4211 !== undefined && h.member291() && !o;
        if (this.member4212) {
            var i = this.member4211.member427();
            for (var j = 0; j < i.length; j++) {
                i[j].member4224(t, false);
            }
        }
        this.member4107(true);
    };
    a.prototype.member4154 = function (h) {
        if (h === d) {
            return true;
        }
        if (this.member4148 === NULL || this.member2621 === NULL) {
            return false;
        }
        if (!this.member4148.member4161(this.member2519, this.member2522) || !this.member4453.member4161(this.member2519, this.member2522)) {
            return true;
        }
        var i = undefined;
        if (h === b) {
            i = this.member4085().member4114().member4162;
        } else if (h === g) {
            i = this.member4085().member4114().member4163;
        }
        var j = this.member4148.member4496(this.member2519);
        i(this.member4110(), this.member4147.x, this.member4147.member756, this.member4148.getWidth(this.member2520), this.member4148.getLength(this.member2520), j === 0 && this.member2621 !== undefined ? this.member2621.member2098().member1793()[1] : j);
        return true;
    };
    a.prototype.member4102 = function () {
        if (this.member1612 !== undefined && this.member1612[3] < 0) {
            this.member4101(Class376.member4172);
            return;
        }
        var h = 0;
        if (this.member4466 !== undefined) {
            if (this.member4466.member1843()) {
                this.member4101(Class376.member4172);
                return;
            }
            if (this.member4466.member4433() !== null) {
                h |= Class376.member4171;
            }
        }
        if (this.member2621 !== NULL && this.member2621 !== undefined) {
            if (this.member2621.member2121()) {
                h |= Class376.member4171;
            }
            if (this.member2621.member2122()) {
                h |= Class376.member4169;
            }
        }
        if (h !== 0) {
            this.member4101(h);
        }
    };
    a.prototype.member4122 = function () {
        --this.member4469;
        this.member4125();
        if (this.member4148 === NULL || this.member4148 === undefined) {
            return;
        }
        var s = this.member4148.getBackgroundSound();
        var r = this.member4148.member4498();
        if (s >= 0 && !this.member4126(s)) {
            var m = Class371.member4059(Class332.member3782, s, -1, this.member4148.getBackgroundSoundVolume(), Class347.member3914, this, r, {
                member4014: 0,
                maxDistance: this.member4148.getBackgroundSoundRange() + this.member4148.getBackgroundSoundSize()
            }, this.getWorldPosition(), this.member4081());
            if (m !== undefined) {
                m.member3335(this.member4148.member4502(), this.member4148.member4503(), this.member4148.member4504(), this.member4148.member4505());
                m.start();
                this.member4128(m, s);
            }
        }
        var j = this.member4148.getBackgroundSoundRandom();
        if (this.member4469 <= 0 && j !== undefined && j.length > 0) {
            var n = true;
            for (var k = 0; k < j.length; k++) {
                if (this.member4126(j[k])) {
                    n = false;
                    break;
                }
            }
            if (n) {
                var i = j[Math.floor(Math.random() * j.length)];
                var o = this.member4148.member4507();
                if (i >= 0) {
                    var m = Class371.member4059(Class332.member3783, i, 0, this.member4148.getBackgroundSoundVolume(), Class347.member3913, this, o, {
                        member4014: 0,
                        maxDistance: this.member4148.getBackgroundSoundRange() + this.member4148.getBackgroundSoundSize()
                    }, this.getWorldPosition(), this.member4081());
                    if (m !== undefined) {
                        m.member3335(this.member4148.member4508(), this.member4148.member4509(), this.member4148.member4510(), this.member4148.member4511());
                        m.start();
                        this.member4128(m, i);
                        var h = this.member4148.getBackgroundSoundMinDelay();
                        var q = this.member4148.getBackgroundSoundMaxDelay();
                        this.member4469 = Math.floor(h + Math.random() * (q - h));
                    }
                }
            }
        }
    };
    a.prototype.member4385 = function (r, i, m, k, s, j, h, q, o) {
        if (this.member4148 === NULL || this.member4148 === undefined) {
            return;
        }
        var n = Class371.member4059(Class332.member3785, r, i, k != -1 ? m * k / 100 : m, Class347.member3910, this, Class351.member3918, {
            member4014: 0,
            maxDistance: s
        }, this.member3320().member4099(), this.member4081(), o);
        if (n !== undefined) {
            n.start();
            this.member4128(n);
        }
    };
    return function (n, z, j, r, s, t, o, u, h, D, C, B, A, q, v, x, k, y, m, i) {
        return new a(n, z, j, r, s, t, o, u, h, D, C, B, A, q, v, x, k, y, m, i);
    };
}();